import * as crypto from 'crypto';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { generateBadgeSVG } from './badge-generator';

interface BadgeOptions {
  style?: 'flat' | 'plastic' | 'flat-square' | 'for-the-badge' | 'social';
  label?: string;
  color?: string;
  labelColor?: string;
}

interface TelegramApiResponse {
  ok: boolean;
  result?: number;
  description?: string;
}

const logger = {
  info: (message: string, data: Record<string, any> = {}): void => {
    console.log(`[INFO] ${message}`, data);
  },
  warn: (message: string, data: Record<string, any> = {}): void => {
    console.warn(`[WARN] ${message}`, data);
  },
  error: (message: string, error: any = null): void => {
    console.error(`[ERROR] ${message}`, error);
  },
  debug: (message: string, data: Record<string, any> = {}): void => {
    if (process.env.DEBUG) {
      console.log(`[DEBUG] ${message}`, data);
    }
  }
};

const validateEnvironment = (): { token: string; chatId: string } => {
  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;
  
  if (!token) {
    throw new Error("Missing BOT_TOKEN environment variable");
  }
  
  if (!chatId) {
    throw new Error("Missing CHAT_ID environment variable");
  }
  
  return { token, chatId };
};

const getMemberCount = async (token: string, chatId: string): Promise<number> => {
  const apiUrl = `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=${encodeURIComponent(chatId)}`;
  logger.debug('Fetching member count', { chatId });
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  
  try {
    const response = await fetch(apiUrl, { 
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'TelegramBadgeGenerator/1.0'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json() as TelegramApiResponse;
    
    if (!data.ok) {
      throw new Error(`Telegram API error: ${data.description}`);
    }
    
    logger.debug('Member count received', { count: data.result });
    return data.result!;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      logger.error('Request timeout', error);
      throw new Error('Request timeout: Telegram API took too long to respond');
    }
    logger.error('Error fetching member count', error);
    throw error;
  }
};

const validateStyleOptions = (options: BadgeOptions): Required<BadgeOptions> => {
  const validStyles: BadgeOptions['style'][] = ['flat', 'plastic', 'flat-square', 'for-the-badge', 'social'];
  
  let style = options.style || 'flat';
  if (!validStyles.includes(style)) {
    logger.warn(`Invalid style: ${style}, using default 'flat'`);
    style = 'flat';
  }
  
  const label = options.label || 'Telegram';
  const color = options.color || '2AABEE';
  const labelColor = options.labelColor || '555555';
  
  return { style, label, color, labelColor };
};

const createBadge = (members: number, options: BadgeOptions): string => {
  const { style, label, color, labelColor } = validateStyleOptions(options);
  logger.debug('Creating badge', { style, label, color, labelColor });
  
  const normalizedColor = color.replace(/^#/, '');
  const normalizedLabelColor = labelColor.replace(/^#/, '');
  
  const format = {
    label,
    message: `${members} members`,
    color: `#${normalizedColor}`,
    labelColor: `#${normalizedLabelColor}`,
    style
  };
  
  return generateBadgeSVG(format);
};

const createErrorBadge = (errorMessage: string): string => {
  const format = {
    label: 'Error',
    message: errorMessage,
    color: '#e05d44',
    labelColor: '#555555',
    style: 'flat'
  };
  
  return generateBadgeSVG(format);
};

const setCacheHeaders = (res: VercelResponse, svg: string): void => {
  res.setHeader("Content-Type", "image/svg+xml");
  
  res.setHeader(
    "Cache-Control", 
    "max-age=300, s-maxage=600, stale-while-revalidate=86400"
  );
  
  const etag = crypto
    .createHash('md5')
    .update(svg)
    .digest('hex');
  res.setHeader("ETag", `"${etag}"`);
  
  const expiresDate = new Date();
  expiresDate.setSeconds(expiresDate.getSeconds() + 300);
  res.setHeader("Expires", expiresDate.toUTCString());
  
  logger.debug('Cache headers set');
};

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  // Global error handler
  process.on('uncaughtException', (error) => {
    console.error('[UNCAUGHT EXCEPTION]', error);
    if (!res.headersSent) {
      const errorBadge = createErrorBadge('Uncaught Error');
      res.status(500).send(errorBadge);
    }
  });

  process.on('unhandledRejection', (reason) => {
    console.error('[UNHANDLED REJECTION]', reason);
    if (!res.headersSent) {
      const errorBadge = createErrorBadge('Unhandled Rejection');
      res.status(500).send(errorBadge);
    }
  });

  try {
    logger.info('Function started', { 
      query: req.query,
      userAgent: req.headers['user-agent'],
      referer: req.headers['referer'] || 'unknown',
      env: {
        hasToken: !!process.env.BOT_TOKEN,
        hasChatId: !!process.env.CHAT_ID
      }
    });
    
    // Early check for environment variables
    if (!process.env.BOT_TOKEN || !process.env.CHAT_ID) {
      logger.error('Missing environment variables', {
        BOT_TOKEN: !!process.env.BOT_TOKEN,
        CHAT_ID: !!process.env.CHAT_ID
      });
      const errorBadge = createErrorBadge('Missing Config');
      res.setHeader("Content-Type", "image/svg+xml");
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.status(500).send(errorBadge);
      return;
    }
    
    const { token, chatId } = validateEnvironment();
    logger.debug('Environment validated', { chatId });

    const ifNoneMatch = req.headers['if-none-match'];
    
    const requestEtag = `"${crypto
      .createHash('md5')
      .update(JSON.stringify({ token, chatId, query: req.query, time: Math.floor(Date.now() / 300000) }))
      .digest('hex')}"`;
    
    if (ifNoneMatch && ifNoneMatch === requestEtag) {
      logger.info('Returning 304 Not Modified');
      res.status(304).end();
      return;
    }
    
    const members = await getMemberCount(token, chatId);
    logger.info('Member count fetched', { members });
    
    const badgeOptions: BadgeOptions = {
      style: req.query.style as BadgeOptions['style'],
      label: Array.isArray(req.query.label) ? req.query.label[0] : req.query.label,
      color: Array.isArray(req.query.color) ? req.query.color[0] : req.query.color,
      labelColor: Array.isArray(req.query.labelColor) ? req.query.labelColor[0] : req.query.labelColor
    };
    
    const svg = createBadge(members, badgeOptions);
    logger.debug('Badge created');

    setCacheHeaders(res, svg);
    res.status(200).send(svg);
    logger.info('Badge sent successfully');
    
  } catch (err) {
    logger.error('Error processing request', err);
    
    let errorBadge: string;
    let statusCode = 500;
    
    if (err instanceof Error) {
      if (err.message.includes("Missing BOT_TOKEN") || err.message.includes("Missing CHAT_ID")) {
        errorBadge = createErrorBadge('Configuration Error');
        logger.error(`Configuration error: ${err.message}`);
      } else if (err.message.includes("Telegram API error")) {
        errorBadge = createErrorBadge('API Error');
        logger.error(`Telegram API error: ${err.message}`);
      } else if (err.message.includes("Request timeout")) {
        errorBadge = createErrorBadge('Timeout');
        statusCode = 503;
        logger.error(`Timeout error: ${err.message}`);
      } else {
        errorBadge = createErrorBadge('Server Error');
        logger.error(`Server error: ${err.message}`);
      }
    } else {
      errorBadge = createErrorBadge('Server Error');
      logger.error('Unknown error occurred');
    }
    
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.status(statusCode).send(errorBadge);
    logger.info(`Error badge sent with status ${statusCode}`);
  }
}
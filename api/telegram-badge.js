import { makeBadge } from 'badge-maker';
import crypto from 'crypto';

// Простая функция логирования с уровнями
const logger = {
  info: (message, data = {}) => {
    console.log(`[INFO] ${message}`, data);
  },
  warn: (message, data = {}) => {
    console.warn(`[WARN] ${message}`, data);
  },
  error: (message, error = null) => {
    console.error(`[ERROR] ${message}`, error);
  },
  debug: (message, data = {}) => {
    if (process.env.DEBUG) {
      console.log(`[DEBUG] ${message}`, data);
    }
  }
};

// Функция для проверки переменных окружения
const validateEnvironment = () => {
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

export default async function (req, res) {
  // Логируем входящий запрос
  logger.info('Received badge request', { 
    query: req.query,
    userAgent: req.headers['user-agent'],
    referer: req.headers['referer'] || 'unknown'
  });
  
  try {
    // Проверяем переменные окружения
    const { token, chatId } = validateEnvironment();
    logger.debug('Environment validated', { chatId });

    // Выделяем функцию для получения количества участников группы с оптимизацией
    const getMemberCount = async (token, chatId) => {
      const apiUrl = `https://api.telegram.org/bot${token}/getChatMemberCount?chat_id=${encodeURIComponent(chatId)}`;
      logger.debug('Fetching member count', { chatId });
      
      // Добавляем таймаут для запроса
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 секунд таймаут
      
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
        
        const data = await response.json();
        
        if (!data.ok) {
          throw new Error(`Telegram API error: ${data.description}`);
        }
        
        logger.debug('Member count received', { count: data.result });
        return data.result;
      } catch (error) {
        if (error.name === 'AbortError') {
          logger.error('Request timeout', error);
          throw new Error('Request timeout: Telegram API took too long to respond');
        }
        logger.error('Error fetching member count', error);
        throw error;
      }
    };
    
    // Проверяем условные запросы
    const ifNoneMatch = req.headers['if-none-match'];
    
    // Генерируем ETag на основе параметров запроса и времени
    const requestEtag = `"${crypto
      .createHash('md5')
      .update(JSON.stringify({ token, chatId, query: req.query, time: Math.floor(Date.now() / 300000) }))
      .digest('hex')}"`;
    
    // Если ETag совпадает, возвращаем 304 Not Modified
    if (ifNoneMatch && ifNoneMatch === requestEtag) {
      logger.info('Returning 304 Not Modified');
      res.status(304).end();
      return;
    }
    
    // Получаем количество участников
    const members = await getMemberCount(token, chatId);
    logger.info('Member count fetched', { members });
    
    // Функция для валидации и нормализации параметров стилизации
    const validateStyleOptions = (options) => {
      // Допустимые стили бейджа
      const validStyles = ['flat', 'plastic', 'flat-square', 'for-the-badge', 'social'];
      
      // Нормализуем и валидируем стиль
      let style = options.style || 'flat';
      if (!validStyles.includes(style)) {
        logger.warn(`Invalid style: ${style}, using default 'flat'`);
        style = 'flat';
      }
      
      // Нормализуем метку
      const label = options.label || 'Telegram';
      
      // Нормализуем цвета
      const color = options.color || '2AABEE';
      const labelColor = options.labelColor || '555555';
      
      return { style, label, color, labelColor };
    };
    
    // Функция для создания бейджа
    const createBadge = (members, options) => {
      const { style, label, color, labelColor } = validateStyleOptions(options);
      logger.debug('Creating badge', { style, label, color, labelColor });
      
      // Нормализуем цвета (удаляем # если он есть)
      const normalizedColor = color.replace(/^#/, '');
      const normalizedLabelColor = labelColor.replace(/^#/, '');
      
      const format = {
        label,
        message: `${members} members`,
        color: `#${normalizedColor}`,
        labelColor: `#${normalizedLabelColor}`,
        style
      };
      
      return makeBadge(format);
    };
    
    // Получаем параметры из запроса
    const badgeOptions = {
      style: req.query.style,
      label: req.query.label,
      color: req.query.color,
      labelColor: req.query.labelColor
    };
    
    // Создаем бейдж
    const svg = createBadge(members, badgeOptions);
    logger.debug('Badge created');

    // Функция для установки заголовков кэширования
    const setCacheHeaders = (res) => {
      // Устанавливаем тип контента
      res.setHeader("Content-Type", "image/svg+xml");
      
      // Устанавливаем заголовки кэширования
      // max-age - время кэширования в браузере
      // s-maxage - время кэширования в CDN
      // stale-while-revalidate - разрешает использовать устаревший кэш во время обновления
      res.setHeader(
        "Cache-Control", 
        "max-age=300, s-maxage=600, stale-while-revalidate=86400"
      );
      
      // Добавляем ETag для условных запросов
      const etag = crypto
        .createHash('md5')
        .update(svg)
        .digest('hex');
      res.setHeader("ETag", `"${etag}"`);
      
      // Устанавливаем время истечения кэша
      const expiresDate = new Date();
      expiresDate.setSeconds(expiresDate.getSeconds() + 300);
      res.setHeader("Expires", expiresDate.toUTCString());
      
      logger.debug('Cache headers set');
    };
    
    // Устанавливаем заголовки и отправляем SVG
    setCacheHeaders(res);
    res.status(200).send(svg);
    logger.info('Badge sent successfully');
    
  } catch (err) {
    logger.error('Error processing request', err);
    
    // Функция для создания бейджа с ошибкой
    const createErrorBadge = (errorMessage) => {
      const format = {
        label: 'Error',
        message: errorMessage,
        color: '#e05d44', // Красный цвет для ошибок
        labelColor: '#555555',
        style: 'flat'
      };
      
      return makeBadge(format);
    };
    
    // Определяем тип ошибки и создаем соответствующий бейдж
    let errorBadge;
    let statusCode = 500;
    
    if (err.message.includes("Missing BOT_TOKEN") || err.message.includes("Missing CHAT_ID")) {
      errorBadge = createErrorBadge('Configuration Error');
      logger.error(`Configuration error: ${err.message}`);
    } else if (err.message.includes("Telegram API error")) {
      errorBadge = createErrorBadge('API Error');
      logger.error(`Telegram API error: ${err.message}`);
    } else if (err.message.includes("Request timeout")) {
      errorBadge = createErrorBadge('Timeout');
      statusCode = 503; // Service Unavailable
      logger.error(`Timeout error: ${err.message}`);
    } else {
      errorBadge = createErrorBadge('Server Error');
      logger.error(`Server error: ${err.message}`);
    }
    
    // Устанавливаем заголовки и отправляем бейдж с ошибкой
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.status(statusCode).send(errorBadge);
    logger.info(`Error badge sent with status ${statusCode}`);
  }
};
export interface BadgeOptions {
  style?: 'flat' | 'plastic' | 'flat-square' | 'for-the-badge' | 'social';
  label?: string;
  color?: string;
  labelColor?: string;
}

export interface BadgeFormat {
  label: string;
  message: string;
  color: string;
  labelColor: string;
  style: 'flat' | 'plastic' | 'flat-square' | 'for-the-badge' | 'social';
}

export interface TelegramApiResponse {
  ok: boolean;
  result?: number;
  description?: string;
}

export interface Logger {
  info: (message: string, data?: Record<string, any>) => void;
  warn: (message: string, data?: Record<string, any>) => void;
  error: (message: string, error?: any) => void;
  debug: (message: string, data?: Record<string, any>) => void;
}

export interface RequestQuery {
  style?: string;
  label?: string;
  color?: string;
  labelColor?: string;
}

export interface RequestHeaders {
  'if-none-match'?: string;
  'user-agent'?: string;
  referer?: string;
}

export interface Request {
  query: RequestQuery;
  headers: RequestHeaders;
}

export interface Response {
  status: (code: number) => Response;
  send: (data: string) => void;
  end: () => void;
  setHeader: (name: string, value: string) => void;
}

export interface Environment {
  token: string;
  chatId: string;
}
import badgeHandler from '../api/telegram-badge';
import * as crypto from 'crypto';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Mock fetch globally
global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;

// Mock console methods for clean test output
console.log = jest.fn();
console.error = jest.fn();
console.warn = jest.fn();

describe('Telegram Badge API', () => {
  let req: Partial<VercelRequest>;
  let res: Partial<VercelResponse>;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock environment variables
    process.env.BOT_TOKEN = 'test_token';
    process.env.CHAT_ID = '@test_chat';

    // Mock request and response objects
    req = {
      query: {},
      headers: {}
    };

    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      setHeader: jest.fn(),
      end: jest.fn()
    } as Partial<VercelResponse>;

    // Mock successful Telegram API response
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        ok: true,
        result: 100
      })
    } as any);
  });

  test('должен возвращать SVG бейдж с количеством участников', async () => {
    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Check that fetch was called with correct parameters
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.telegram.org/bottest_token/getChatMemberCount'),
      expect.any(Object)
    );

    // Check that headers were set
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml');
    expect(res.setHeader).toHaveBeenCalledWith('Cache-Control', expect.any(String));

    // Check that response was sent with status 200
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });

  test('должен обрабатывать отсутствие переменных окружения', async () => {
    // Remove environment variables
    delete process.env.BOT_TOKEN;

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Check that error response was sent
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });

  test('должен обрабатывать ошибки Telegram API', async () => {
    // Mock Telegram API error
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        ok: false,
        description: 'Test error'
      })
    } as any);

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Check that error response was sent
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });

  test('должен обрабатывать сетевые ошибки', async () => {
    // Mock network error
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValue(new Error('Network error'));

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Check that error response was sent
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });

  test('должен применять параметры стилизации', async () => {
    // Set styling parameters
    req.query = {
      style: 'flat-square',
      label: 'Custom Label',
      color: 'FF0000',
      labelColor: '000000'
    };

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Check that response was sent with status 200
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });

  test('должен возвращать 304 Not Modified при совпадении ETag', async () => {
    // Set If-None-Match header
    const testEtag = '\"test-etag\"';
    req.headers!['if-none-match'] = testEtag;

    // Mock the specific environment to create a predictable ETag
    const originalEnv = process.env;
    process.env = {
      ...originalEnv,
      BOT_TOKEN: 'test_token_for_etag',
      CHAT_ID: '@test_chat_for_etag'
    };

    // We need to create the exact same hash that would be generated
    const fixedTime = 1234567890000; // Fixed timestamp
    jest.spyOn(Date, 'now').mockReturnValue(fixedTime);

    // Create expected ETag based on our known values
    const expectedHash = crypto
      .createHash('md5')
      .update(JSON.stringify({
        token: 'test_token_for_etag',
        channelId: '@test_chat_for_etag',
        query: {},
        time: Math.floor(fixedTime / 300000)
      }))
      .digest('hex');

    req.headers!['if-none-match'] = `"${expectedHash}"`;

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Restore environment
    process.env = originalEnv;

    // Check that response was sent with status 304
    expect(res.status).toHaveBeenCalledWith(304);
    expect(res.end).toHaveBeenCalled();
  });

  test('должен обрабатывать таймауты запросов', async () => {
    // Mock timeout error
    const abortError = new Error('Request timeout');
    abortError.name = 'AbortError';
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValue(abortError);

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Check that error response was sent with service unavailable status
    expect(res.status).toHaveBeenCalledWith(503);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });

  test('должен валидировать стили бейджа', async () => {
    // Set invalid style
    req.query = {
      style: 'invalid-style'
    };

    await badgeHandler(req as VercelRequest, res as VercelResponse);

    // Should still work with default style
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });
});
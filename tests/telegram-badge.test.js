const badgeHandler = require('../api/telegram-badge');
const crypto = require('crypto');

// Мокаем fetch
global.fetch = jest.fn();

// Мокаем console.log и console.error для чистоты вывода тестов
console.log = jest.fn();
console.error = jest.fn();
console.warn = jest.fn();

describe('Telegram Badge API', () => {
  let req;
  let res;
  
  beforeEach(() => {
    // Сбрасываем моки перед каждым тестом
    jest.clearAllMocks();
    
    // Мокаем переменные окружения
    process.env.BOT_TOKEN = 'test_token';
    process.env.CHAT_ID = '@test_chat';
    
    // Мокаем объекты запроса и ответа
    req = {
      query: {},
      headers: {}
    };
    
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      setHeader: jest.fn(),
      end: jest.fn()
    };
    
    // Мокаем успешный ответ от Telegram API
    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        ok: true,
        result: 100
      })
    });
  });
  
  test('должен возвращать SVG бейдж с количеством участников', async () => {
    await badgeHandler(req, res);
    
    // Проверяем, что fetch был вызван с правильными параметрами
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://api.telegram.org/bottest_token/getChatMemberCount'),
      expect.any(Object)
    );
    
    // Проверяем, что заголовки были установлены
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/svg+xml');
    expect(res.setHeader).toHaveBeenCalledWith('Cache-Control', expect.any(String));
    
    // Проверяем, что был отправлен ответ со статусом 200
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });
  
  test('должен обрабатывать отсутствие переменных окружения', async () => {
    // Удаляем переменные окружения
    delete process.env.BOT_TOKEN;
    
    await badgeHandler(req, res);
    
    // Проверяем, что был отправлен ответ с ошибкой
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });
  
  test('должен обрабатывать ошибки Telegram API', async () => {
    // Мокаем ошибку от Telegram API
    fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        ok: false,
        description: 'Test error'
      })
    });
    
    await badgeHandler(req, res);
    
    // Проверяем, что был отправлен ответ с ошибкой
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });
  
  test('должен обрабатывать сетевые ошибки', async () => {
    // Мокаем сетевую ошибку
    fetch.mockRejectedValue(new Error('Network error'));
    
    await badgeHandler(req, res);
    
    // Проверяем, что был отправлен ответ с ошибкой
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.any(String));
  });
  
  test('должен применять параметры стилизации', async () => {
    // Устанавливаем параметры стилизации
    req.query = {
      style: 'flat-square',
      label: 'Custom Label',
      color: 'FF0000',
      labelColor: '000000'
    };
    
    await badgeHandler(req, res);
    
    // Проверяем, что был отправлен ответ со статусом 200
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
  });
  
  test('должен возвращать 304 Not Modified при совпадении ETag', async () => {
    // Устанавливаем заголовок If-None-Match
    req.headers['if-none-match'] = '"some-etag"';
    
    // Мокаем crypto для генерации такого же ETag
    jest.spyOn(crypto, 'createHash').mockImplementation(() => ({
      update: jest.fn().mockReturnThis(),
      digest: jest.fn().mockReturnValue('some-etag')
    }));
    
    await badgeHandler(req, res);
    
    // Проверяем, что был отправлен ответ со статусом 304
    expect(res.status).toHaveBeenCalledWith(304);
    expect(res.end).toHaveBeenCalled();
  });
});
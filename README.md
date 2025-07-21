# 🛡️ Telegram Group Badge Generator

Этот проект генерирует SVG-бейдж с текущим количеством участников вашей Telegram-группы. Идеально подходит для отображения активности сообщества в README на GitHub или на сайте.

## 🚀 Демо

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge)

---

## 📦 Стек

- Node.js / Bun
- Telegram Bot API
- Vercel (Serverless API)

---

## 🛠 Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
```

2. Установите зависимости:

```bash
npm install
# или
bun install
```

3. Создайте .env файл и добавьте:

```bash
BOT_TOKEN=your_telegram_bot_token
CHAT_ID=@your_group_username_or_chat_id
```

Убедитесь, что бот добавлен в группу как админ.

## 🧪 Локальный запуск

```bash
npm run dev
# или
bun dev
```

Открой в браузере: http://localhost:3000/api/telegram-badge

## ☁️ Деплой на Vercel
1.	Задеплойте репозиторий на vercel.com
2.	В настройках проекта добавьте переменные окружения:
	•	BOT_TOKEN
	•	CHAT_ID

## 🧩 Использование в GitHub README

Добавьте следующую строку в ваш README.md:

```markdown
![Telegram Group Badge](https://telegram-badge.vercel.app/api/telegram-badge)
```

### 🎨 Параметры стилизации

Вы можете настроить внешний вид бейджа с помощью следующих параметров:

| Параметр | Описание | Значение по умолчанию |
|----------|----------|------------------------|
| `style` | Стиль бейджа | `flat` |
| `label` | Текст метки | `Telegram` |
| `color` | Цвет основной части бейджа | `2AABEE` (цвет Telegram) |
| `labelColor` | Цвет метки бейджа | `555555` |

#### Доступные стили:

- `flat` - плоский стиль (по умолчанию)
- `plastic` - объемный стиль
- `flat-square` - плоский квадратный стиль
- `for-the-badge` - широкий стиль с заглавными буквами
- `social` - социальный стиль

#### Примеры:

Стандартный бейдж:
```
https://telegram-badge.vercel.app/api/telegram-badge
```

Бейдж с кастомной меткой:
```
https://telegram-badge.vercel.app/api/telegram-badge?label=Our%20Group
```

Бейдж с кастомным цветом:
```
https://telegram-badge.vercel.app/api/telegram-badge?color=FF0000
```

Бейдж с кастомным стилем:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge
```

Полностью кастомизированный бейдж:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=social&label=Join%20Us&color=FF5733&labelColor=333333
```

## 🧠 Возможности

- 👥 Отображение количества участников в реальном времени
- 🎨 Полная кастомизация внешнего вида бейджа
- 🔒 Поддержка .env и переменных Vercel для безопасного хранения токенов
- ⚡ Оптимизированное кэширование для быстрой загрузки
- 🛡️ Обработка ошибок с информативными сообщениями
- 🆓 Бесплатно на Vercel при обычной нагрузке
- 📡 Можно расширить до отображения активности / количества сообщений

⸻

📜 Лицензия

MIT
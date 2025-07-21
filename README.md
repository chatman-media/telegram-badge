# 🛡️ Telegram Group Badge Generator

Этот проект генерирует SVG-бейдж с текущим количеством участников вашей Telegram-группы. Идеально подходит для отображения активности сообщества в README на GitHub или на сайте.

## 🚀 Демо

![Telegram Group Members](https://your-vercel-app.vercel.app/api/telegram-badge)

> Замените `your-vercel-app` на ваш актуальный Vercel-деплой.

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

![Telegram Group Badge](https://your-vercel-app.vercel.app/api/telegram-badge)

🧠 Возможности
	•	👥 Отображение количества участников
	•	🔒 Поддержка .env и переменных Vercel
	•	🆓 Бесплатно на Vercel при обычной нагрузке
	•	📡 Можно расширить до отображения активности / количества сообщений

⸻

📜 Лицензия

MIT
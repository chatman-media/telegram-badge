# 🛡️ Telegram Group Badge Generator

[🇷🇺 Русский](README.ru.md) | [🇺🇸 English](README.md) | [🇨🇳 中文](README.zh.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://badge.fury.io/js/telegram-badge.svg)](https://badge.fury.io/js/telegram-badge)
[![npm downloads](https://img.shields.io/npm/dm/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

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

**Примечание:** Для публичных групп/каналов бота не нужно добавлять в группу. Для приватных групп бот должен быть участником.

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
| `logo` | Показывать логотип Telegram | `true` |

#### Доступные стили:

- `flat` - плоский стиль (по умолчанию)
- `plastic` - объемный стиль с градиентом
- `flat-square` - плоский стиль без закруглений
- `for-the-badge` - широкий стиль с заглавными буквами
- `social` - стиль как у GitHub

#### Примеры:

Стандартный бейдж (стиль flat):
```
https://telegram-badge.vercel.app/api/telegram-badge
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge)

Бейдж со стилем plastic:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?style=plastic)

Бейдж со стилем flat-square:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?style=flat-square)

Бейдж со стилем for-the-badge:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge)

Бейдж со стилем social:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?style=social)

Бейдж с кастомной меткой и цветом:
```
https://telegram-badge.vercel.app/api/telegram-badge?label=Наш%20Чат&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?label=Наш%20Чат&color=00FF00)

Полностью кастомизированный бейдж:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge&label=Сообщество&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge&label=Сообщество&color=FF5733&labelColor=1A1A1A)

Бейдж без логотипа:
```
https://telegram-badge.vercel.app/api/telegram-badge?logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?logo=false)

## 🧠 Возможности

- 👥 Отображение количества участников в реальном времени
- 🎨 Полная кастомизация внешнего вида бейджа
- 🔒 Поддержка .env и переменных Vercel для безопасного хранения токенов
- ⚡ Оптимизированное кэширование для быстрой загрузки
- 🛡️ Обработка ошибок с информативными сообщениями
- 🆓 Бесплатно на Vercel при обычной нагрузке
- 📡 Можно расширить до отображения активности / количества сообщений

## 🔧 Использование API

### Как npm пакет:

```bash
npm install telegram-badge
```

```typescript
import badgeHandler from 'telegram-badge';

// Используйте в вашей serverless функции
export default badgeHandler;
```

### Прямые вызовы API:

```typescript
GET /api/telegram-badge?style=flat&label=Участники&color=2AABEE&labelColor=555555
```

## 🧪 Тестирование

Запустить тесты:

```bash
npm test
```

Проверка типов:

```bash
npm run type-check
```

Сборка проекта:

```bash
npm run build
```

## Подписывайтесь

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## История звёзд

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## 🤝 Внести вклад

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📜 Лицензия

Этот проект лицензирован под лицензией MIT - подробности в файле [LICENSE](LICENSE).

---

Сделано с ❤️ от [Chatman Media](https://github.com/chatman-media)
# Telegram Group Badge Generator

[🇷🇺 Русский](README.ru.md) | [🇺🇸 English](README.md) | [🇨🇳 中文](README.zh.md) | [🇹🇭 ไทย](README.th.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![Release](https://github.com/chatman-media/telegram-badge/workflows/Release/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![JSR](https://jsr.io/badges/@chatman-media/telegram-badge)](https://jsr.io/@chatman-media/telegram-badge)
[![Deno](https://img.shields.io/badge/Deno-2.0+-00ADD8.svg?style=flat&logo=deno)](https://deno.land/)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

Этот проект генерирует SVG-бейдж с текущим количеством участников вашей Telegram-группы. Идеально подходит для отображения активности сообщества в README на GitHub или на сайте.

## 🚀 Быстрый старт

Просто используйте параметры URL для генерации бейджей для любого Telegram-канала или группы:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 📦 Стек

- Node.js / TypeScript
- Telegram Bot API
- Vercel (Serverless API)
- Jest для тестирования

---

## 🧩 Использование

### Основной метод: параметры URL (настройка не требуется!)

Просто добавьте ID вашего Telegram-канала/группы к URL:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel)
```

Вот и всё! Не нужно разворачивать проект, не нужен токен бота.

### Альтернативный метод: самостоятельный хостинг

Для продвинутых пользователей, которые хотят развернуть собственный экземпляр:

#### 1. Предварительные требования
- Токен Telegram-бота (создайте через [@BotFather](https://t.me/botfather))
- Аккаунт Vercel (или любой хостинг Node.js)

#### 2. Деплой на Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchatman-media%2Ftelegram-badge)

Установите переменные окружения:
- `BOT_TOKEN`: Токен вашего Telegram-бота
- `CHAT_ID`: ID чата по умолчанию (необязательно при использовании параметров URL)

#### 3. Локальная разработка

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
npm install

# Создайте .env файл
echo "BOT_TOKEN=your_bot_token" > .env
echo "CHAT_ID=@your_channel" >> .env

npm run dev
```

### 🎨 Параметры стилизации

Вы можете настроить внешний вид бейджа с помощью следующих параметров:

| Параметр | Описание | Значение по умолчанию |
|----------|----------|------------------------|
| `channelId` | ID или имя пользователя Telegram-чата (например, `@timelinestudiochat`) | Из окружения |
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
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

Бейдж со стилем plastic:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic)

Бейдж со стилем flat-square:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square)

Бейдж со стилем for-the-badge:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge)

Бейдж со стилем social:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social)

Бейдж с кастомной меткой и цветом:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&label=Наш%20Чат&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&label=Наш%20Чат&color=00FF00)

Полностью кастомизированный бейдж:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&label=Сообщество&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge&label=Сообщество&color=FF5733&labelColor=1A1A1A)

Бейдж без логотипа:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&logo=false)

Бейдж для конкретного канала:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

Бейдж с пользовательским стилем:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&color=FF5733
```

## ✨ Возможности

- 👥 Отображение количества участников в реальном времени
- 🔗 Прямые параметры URL - настройка не требуется!
- 🎨 Полная кастомизация внешнего вида бейджа
- 🔒 Опциональный самостоятельный хостинг с безопасным хранением токенов
- ⚡ Оптимизированное кэширование для быстрой загрузки
- 🛡️ Обработка ошибок с информативными сообщениями
- 🆓 Бесплатное использование
- 📡 Можно расширить до отображения активности / количества сообщений
- 🧪 Полный набор тестов с TypeScript

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

### Как Deno/JSR пакет:

```bash
# Используя JSR
deno add @chatman-media/telegram-badge

# Или импортируйте напрямую
import badgeHandler from "jsr:@chatman-media/telegram-badge";
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Используйте в вашей Deno serverless функции
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

## Подписывайтесь

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## Поддержка 💝🚀

- **BTC:** 14s9Y9Rb2CUWHSAatiQMhfkpx1MWXofUzw
- **TON:** UQD1M80nPyzph5ZW1vfp_r19XI5MaerNhDq4dWXbXCo96WFj
- **NOT:** UQD1M80nPyzph5ZW1vfp_r19XI5MaerNhDq4dWXbXCo96WFj
- **ETH:** 0x286D65151b622dCC16624cEd8463FDa45585fd60

<div align="center">
  <table>
    <tr>
      <td><img src="public/btc.png" alt="BTC" height="185" /></td>
      <td><img src="public/ton.png" alt="TON" height="185" /></td>
      <td><img src="public/not.png" alt="NOT" height="185" /></td>
      <td><img src="public/eth.png" alt="ETH" height="185" /></td>
    </tr>
  </table>
</div>

## Активность репозитория

![Alt](https://repobeats.axiom.co/api/embed/74975e0da934ce1756e69f04fe68f2b026a77aee.svg "Repobeats analytics image")

## 📜 Лицензия

Этот проект лицензирован под лицензией MIT - подробности в файле [LICENSE](LICENSE).

---

Сделано с ❤️ от [Chatman Media](https://github.com/chatman-media)
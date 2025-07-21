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

This project generates SVG badges with the current member count of your Telegram group. Perfect for displaying community activity in GitHub README files or on websites.

## 🚀 Demo

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge)

---

## 📦 Tech Stack

- Node.js / TypeScript
- Telegram Bot API
- Vercel (Serverless API)
- Jest for testing

---

## 🛠 Installation

1. Clone the repository:

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Create a .env file and add:

```bash
BOT_TOKEN=your_telegram_bot_token
CHAT_ID=@your_group_username_or_chat_id
```

**Note:** For public groups/channels, the bot doesn't need to be added as a member. For private groups, the bot must be added to the group.

## 🧪 Local Development

```bash
npm run dev
# or
bun dev
```

Open in browser: http://localhost:3000/api/telegram-badge

## ☁️ Deploy to Vercel

1. Deploy the repository to vercel.com
2. Add environment variables in project settings:
   - BOT_TOKEN
   - CHAT_ID

## 🧩 Usage in GitHub README

Add the following line to your README.md:

```markdown
![Telegram Group Badge](https://telegram-badge.vercel.app/api/telegram-badge)
```

### 🎨 Styling Parameters

You can customize the badge appearance using the following parameters:

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| `style` | Badge style | `flat` |
| `label` | Label text | `Telegram` |
| `color` | Main badge color | `2AABEE` (Telegram color) |
| `labelColor` | Label color | `555555` |
| `logo` | Show Telegram logo | `true` |

#### Available styles:

- `flat` - flat style (default)
- `plastic` - plastic style with gradient
- `flat-square` - flat square style without rounded corners
- `for-the-badge` - wide style with uppercase letters
- `social` - GitHub social style

#### Examples:

Standard badge (flat style):
```
https://telegram-badge.vercel.app/api/telegram-badge
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge)

Badge with plastic style:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?style=plastic)

Badge with flat-square style:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?style=flat-square)

Badge with for-the-badge style:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge)

Badge with social style:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?style=social)

Badge with custom label and color:
```
https://telegram-badge.vercel.app/api/telegram-badge?label=Join%20Chat&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?label=Join%20Chat&color=00FF00)

Fully customized badge:
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge&label=Community&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge&label=Community&color=FF5733&labelColor=1A1A1A)

Badge without logo:
```
https://telegram-badge.vercel.app/api/telegram-badge?logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?logo=false)

## ✨ Features

- 👥 Real-time member count display
- 🎨 Full badge appearance customization
- 🔒 Support for .env and Vercel environment variables for secure token storage
- ⚡ Optimized caching for fast loading
- 🛡️ Error handling with informative messages
- 🆓 Free on Vercel with normal usage
- 📡 Can be extended to show activity/message count
- 🧪 Comprehensive test suite with TypeScript

## 🔧 API Usage

### As npm package:

```bash
npm install telegram-badge
```

```typescript
import badgeHandler from 'telegram-badge';

// Use in your serverless function
export default badgeHandler;
```

### Direct API calls:

```typescript
GET /api/telegram-badge?style=flat&label=Members&color=2AABEE&labelColor=555555
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run type checking:

```bash
npm run type-check
```

Build the project:

```bash
npm run build
```

## Subscribe

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## Star History

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Chatman Media](https://github.com/chatman-media)
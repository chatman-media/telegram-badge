# 🛡️ Telegram Group Badge Generator

[🇷🇺 Русский](README.ru.md) | [🇺🇸 English](README.md) | [🇨🇳 中文](README.zh.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

This project generates SVG badges with the current member count of your Telegram group. Perfect for displaying community activity in GitHub README files or on websites.

## 🚀 Quick Start

Just use URL parameters to generate badges for any Telegram channel or group:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 📦 Tech Stack

- Node.js / TypeScript
- Telegram Bot API
- Vercel (Serverless API)
- Jest for testing

---

## 🧩 Usage

### Primary Method: URL Parameters (No Setup Required!)

Simply add your Telegram channel/group ID to the URL:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel)
```

That's it! No deployment, no bot token needed.

### Alternative Method: Self-Hosted Deployment

For advanced users who want to host their own instance:

#### 1. Prerequisites
- Telegram Bot Token (create via [@BotFather](https://t.me/botfather))
- Vercel account (or any Node.js hosting)

#### 2. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchatman-media%2Ftelegram-badge)

Set environment variables:
- `BOT_TOKEN`: Your Telegram bot token
- `CHAT_ID`: Default chat ID (optional if using URL parameters)

#### 3. Local Development

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
npm install

# Create .env file
echo "BOT_TOKEN=your_bot_token" > .env
echo "CHAT_ID=@your_channel" >> .env

npm run dev
```


### 🎨 Styling Parameters

You can customize the badge appearance using the following parameters:

| Parameter | Description | Default Value |
|-----------|-------------|---------------|
| `channelId` | Telegram chat ID or username (e.g., ``) | From environment |
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
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

Badge with plastic style:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic)

Badge with flat-square style:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square)

Badge with for-the-badge style:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge)

Badge with social style:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social)

Badge with custom label and color:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&label=Join%20Chat&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&label=Join%20Chat&color=00FF00)

Fully customized badge:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&label=Community&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge&label=Community&color=FF5733&labelColor=1A1A1A)

Badge without logo:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&logo=false)

Badge for specific channel:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

Badge with custom styling:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&color=FF5733
```

## ✨ Features

- 👥 Real-time member count display
- 🔗 Direct URL parameters - no setup required!
- 🎨 Full badge appearance customization
- 🔒 Optional self-hosting with secure token storage
- ⚡ Optimized caching for fast loading
- 🛡️ Error handling with informative messages
- 🆓 Free to use
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

## Subscribe

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com)

## Support 💝🚀

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

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Chatman Media](https://github.com/chatman-media)
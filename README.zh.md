# Telegram 徽章生成器

[🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇩🇪 Deutsch](README.de.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇹🇭 ไทย](README.th.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![Release](https://github.com/chatman-media/telegram-badge/workflows/Release/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![JSR](https://jsr.io/badges/@chatman-media/telegram-badge)](https://jsr.io/@chatman-media/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub 星标](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

本项目生成显示 Telegram 群组和频道当前成员数量的 SVG 徽章。非常适合在 GitHub README 文件或网站上展示社区活跃度。

## 快速开始

只需使用 URL 参数即可为任何 Telegram 群组或频道生成徽章：

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel_or_group
```

![Telegram 群组成员](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 技术栈

- Node.js / TypeScript
- Telegram Bot API
- Vercel（无服务器 API）
- Jest 测试框架

---

## 使用方法

### 主要方法：URL 参数（无需任何设置！）

只需将您的 Telegram 群组或频道 ID 添加到 URL：

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel_or_group)
```

**支持的实体：**
- 公开频道（例如：`@your_channel`）
- 公开群组（例如：`@your_group`）
- 私有群组/频道（使用数字 ID：`-1001234567890`）

就这样！无需部署，公开频道和群组无需机器人令牌。

### 替代方法：自托管部署

对于想要托管自己实例的高级用户：

#### 1. 先决条件
- Telegram 机器人令牌（通过 [@BotFather](https://t.me/botfather) 创建）
- Vercel 账户（或任何 Node.js 托管）

#### 2. 部署到 Vercel

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchatman-media%2Ftelegram-badge)

设置环境变量：
- `BOT_TOKEN`：您的 Telegram 机器人令牌
- `CHAT_ID`：默认聊天 ID（如果使用 URL 参数则可选）

#### 3. 本地开发

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
npm install

# 创建 .env 文件
echo "BOT_TOKEN=your_bot_token" > .env
echo "CHAT_ID=@your_channel" >> .env

npm run dev
```


### 样式参数

您可以使用以下参数自定义徽章外观：

| 参数 | 描述 | 默认值 |
|------|------|--------|
| `channelId` | Telegram 聊天 ID 或用户名（例如 `@timelinestudiochat`） | 从环境变量 |
| `style` | 徽章样式 | `flat` |
| `label` | 标签文本 | `Telegram` |
| `color` | 主徽章颜色 | `2AABEE`（Telegram 颜色） |
| `labelColor` | 标签颜色 | `555555` |
| `logo` | 显示 Telegram 标志 | `true` |

#### 可用样式：

- `flat` - 扁平样式（默认）
- `plastic` - 带渐变的立体样式
- `flat-square` - 无圆角的扁平样式
- `for-the-badge` - 带大写字母的宽样式
- `social` - GitHub 社交样式

#### 示例：

标准徽章（扁平样式）：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

立体样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic)

方形扁平样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square)

for-the-badge 样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge)

社交样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social)

自定义标签和颜色的徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&label=加入聊天&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&label=加入聊天&color=00FF00)

完全自定义徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&label=社区&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge&label=社区&color=FF5733&labelColor=1A1A1A)

无标志徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&logo=false)

特定频道的徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

带自定义样式的徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&color=FF5733
```

## 功能特性

- 👥 实时显示成员数量
- 🔗 直接 URL 参数 - 无需任何设置！
- 🎨 完全自定义徽章外观
- 🔒 可选的自托管与安全令牌存储
- ⚡ 优化缓存以实现快速加载
- 🛡️ 错误处理和信息提示
- 🆓 免费使用
- 📡 可扩展显示活动/消息计数
- 🧪 使用 TypeScript 的完整测试套件

## API 使用

### 作为 npm 包：

```bash
npm install telegram-badge
```

```typescript
import badgeHandler from 'telegram-badge';

// 在您的无服务器函数中使用
export default badgeHandler;
```

### 直接 API 调用：

```typescript
GET /api/telegram-badge?style=flat&label=成员&color=2AABEE&labelColor=555555
```

## 测试

运行测试套件：

```bash
npm test
```

运行类型检查：

```bash
npm run type-check
```

构建项目：

```bash
npm run build
```

## 星标历史

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## 贡献

1. Fork 本仓库
2. 创建您的功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开一个 Pull Request

## 订阅

[![TikTok](https://img.shields.io/badge/TikTok-000000?logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## 支持 💝🚀

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

## 仓库活动

![Alt](https://repobeats.axiom.co/api/embed/74975e0da934ce1756e69f04fe68f2b026a77aee.svg "Repobeats analytics image")

## 许可证

本项目根据 MIT 许可证获得许可 - 有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

---

由 [Chatman Media](https://github.com/chatman-media) 用 ❤️ 制作
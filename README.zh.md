# 🛡️ Telegram 群组徽章生成器

[🇷🇺 Русский](README.ru.md) | [🇺🇸 English](README.md) | [🇨🇳 中文](README.zh.md)

[![构建状态](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm 版本](https://badge.fury.io/js/telegram-badge.svg)](https://badge.fury.io/js/telegram-badge)
[![npm 下载量](https://img.shields.io/npm/dm/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![npm 包大小](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub 星标](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

本项目生成显示 Telegram 群组当前成员数量的 SVG 徽章。非常适合在 GitHub README 文件或网站上展示社区活跃度。

## 🚀 演示

![Telegram 群组成员](https://telegram-badge.vercel.app/api/telegram-badge)

---

## 📦 技术栈

- Node.js / TypeScript
- Telegram Bot API
- Vercel（无服务器 API）
- Jest 测试框架

---

## 🛠 安装

1. 克隆仓库：

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
```

2. 安装依赖：

```bash
npm install
# 或
bun install
```

3. 创建 .env 文件并添加：

```bash
BOT_TOKEN=your_telegram_bot_token
CHAT_ID=@your_group_username_or_chat_id
```

**注意：** 对于公开群组/频道，机器人无需添加为成员。对于私有群组，机器人必须是群组成员。

## 🧪 本地开发

```bash
npm run dev
# 或
bun dev
```

在浏览器中打开：http://localhost:3000/api/telegram-badge

## ☁️ 部署到 Vercel

1. 将仓库部署到 vercel.com
2. 在项目设置中添加环境变量：
   - BOT_TOKEN
   - CHAT_ID

## 🧩 在 GitHub README 中使用

在您的 README.md 中添加以下代码：

```markdown
![Telegram 群组徽章](https://telegram-badge.vercel.app/api/telegram-badge)
```

### 🎨 样式参数

您可以使用以下参数自定义徽章外观：

| 参数 | 描述 | 默认值 |
|------|------|--------|
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
https://telegram-badge.vercel.app/api/telegram-badge
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge)

立体样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?style=plastic)

方形扁平样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?style=flat-square)

for-the-badge 样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge)

社交样式徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?style=social)

自定义标签和颜色的徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?label=加入聊天&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?label=加入聊天&color=00FF00)

完全自定义徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge&label=社区&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?style=for-the-badge&label=社区&color=FF5733&labelColor=1A1A1A)

无标志徽章：
```
https://telegram-badge.vercel.app/api/telegram-badge?logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?logo=false)

## ✨ 功能特性

- 👥 实时显示成员数量
- 🎨 完全自定义徽章外观
- 🔒 支持 .env 和 Vercel 环境变量以安全存储令牌
- ⚡ 优化缓存以实现快速加载
- 🛡️ 错误处理和信息提示
- 🆓 在 Vercel 上正常使用免费
- 📡 可扩展显示活动/消息计数
- 🧪 使用 TypeScript 的完整测试套件

## 🔧 API 使用

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

## 🧪 测试

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

## 订阅

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## 星标历史

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## 🤝 贡献

1. Fork 本仓库
2. 创建您的功能分支（`git checkout -b feature/amazing-feature`）
3. 提交您的更改（`git commit -m 'Add some amazing feature'`）
4. 推送到分支（`git push origin feature/amazing-feature`）
5. 打开一个 Pull Request

## 📜 许可证

本项目根据 MIT 许可证获得许可 - 有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

---

由 [Chatman Media](https://github.com/chatman-media) 用 ❤️ 制作
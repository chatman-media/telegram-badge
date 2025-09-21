# 🛡️ Telegram Group Badge Generator

[🇷🇺 Русский](README.ru.md) | [🇺🇸 English](README.md) | [🇨🇳 中文](README.zh.md) | [🇹🇭 ไทย](README.th.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

โปรเจ็กต์นี้สร้างป้าย SVG ที่แสดงจำนวนสมาชิกปัจจุบันของกลุ่ม Telegram ของคุณ เหมาะอย่างยิ่งสำหรับแสดงความคล่องแคล่วของชุมชนในไฟล์ README ของ GitHub หรือบนเว็บไซต์

## 🚀 เริ่มต้นอย่างรวดเร็ว

เพียงใช้พารามิเตอร์ URL เพื่อสร้างป้ายสำหรับช่องหรือกลุ่ม Telegram ใดๆ:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 📦 เทคโนโลยีที่ใช้

- Node.js / TypeScript
- Telegram Bot API
- Vercel (Serverless API)
- Jest สำหรับการทดสอบ

---

## 🧩 วิธีใช้งาน

### วิธีหลัก: พารามิเตอร์ URL (ไม่ต้องตั้งค่า!)

เพียงเพิ่ม ID ช่อง/กลุ่ม Telegram ของคุณไปยัง URL:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel)
```

เพียงเท่านี้! ไม่ต้อง deploy ไม่ต้องใช้โทเค็นบอท

### วิธีทางเลือก: โฮสต์ด้วยตนเอง

สำหรับผู้ใช้ขั้นสูงที่ต้องการโฮสต์อินสแตนซ์ของตนเอง:

#### 1. ข้อกำหนดเบื้องต้น
- โทเค็นบอท Telegram (สร้างผ่าน [@BotFather](https://t.me/botfather))
- บัญชี Vercel (หรือโฮสติ้ง Node.js ใดๆ)

#### 2. Deploy ไปยัง Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchatman-media%2Ftelegram-badge)

ตั้งค่าตัวแปรสภาพแวดล้อม:
- `BOT_TOKEN`: โทเค็นบอท Telegram ของคุณ
- `CHAT_ID`: ID แชทเริ่มต้น (ไม่จำเป็นหากใช้พารามิเตอร์ URL)

#### 3. การพัฒนาในเครื่อง

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
npm install

# สร้างไฟล์ .env
echo "BOT_TOKEN=your_bot_token" > .env
echo "CHAT_ID=@your_channel" >> .env

npm run dev
```

### 🎨 พารามิเตอร์การปรับแต่ง

คุณสามารถปรับแต่งรูปลักษณ์ของป้ายได้โดยใช้พารามิเตอร์ต่อไปนี้:

| พารามิเตอร์ | คำอธิบาย | ค่าเริ่มต้น |
|-----------|-------------|---------------|
| `channelId` | ID หรือชื่อผู้ใช้ของแชท Telegram (เช่น `@timelinestudiochat`) | จากสภาพแวดล้อม |
| `style` | รูปแบบป้าย | `flat` |
| `label` | ข้อความป้ายกำกับ | `Telegram` |
| `color` | สีป้ายหลัก | `2AABEE` (สี Telegram) |
| `labelColor` | สีป้ายกำกับ | `555555` |
| `logo` | แสดงโลโก้ Telegram | `true` |

#### รูปแบบที่ใช้ได้:

- `flat` - รูปแบบเรียบ (เริ่มต้น)
- `plastic` - รูปแบบพลาสติกกับไล่ระดับสี
- `flat-square` - รูปแบบเรียบเหลี่ยมไม่มีมุมมน
- `for-the-badge` - รูปแบบกว้างกับตัวพิมพ์ใหญ่
- `social` - รูปแบบโซเชียลของ GitHub

#### ตัวอย่าง:

ป้ายมาตรฐาน (รูปแบบ flat):
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

ป้ายกับรูปแบบ plastic:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic)

ป้ายกับรูปแบบ flat-square:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square)

ป้ายกับรูปแบบ for-the-badge:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge)

ป้ายกับรูปแบบ social:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social)

ป้ายกับป้ายกำกับและสีที่กำหนดเอง:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&label=เข้าร่วมแชท&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&label=เข้าร่วมแชท&color=00FF00)

ป้ายที่ปรับแต่งเต็มรูปแบบ:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&label=ชุมชน&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge&label=ชุมชน&color=FF5733&labelColor=1A1A1A)

ป้ายไม่มีโลโก้:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&logo=false)

ป้ายสำหรับช่องเฉพาะ:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

ป้ายกับการปรับแต่งที่กำหนดเอง:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&color=FF5733
```

## ✨ คุณสมบัติ

- 👥 แสดงจำนวนสมาชิกแบบเรียลไทม์
- 🔗 พารามิเตอร์ URL โดยตรง - ไม่ต้องตั้งค่า!
- 🎨 ปรับแต่งรูปลักษณ์ป้ายได้เต็มรูปแบบ
- 🔒 โฮสต์ด้วยตนเองแบบเลือกได้กับการจัดเก็บโทเค็นอย่างปลอดภัย
- ⚡ แคชที่ปรับปรุงแล้วสำหรับการโหลดที่รวดเร็ว
- 🛡️ การจัดการข้อผิดพลาดกับข้อความที่ให้ข้อมูล
- 🆓 ใช้งานฟรี
- 📡 สามารถขยายเพื่อแสดงกิจกรรม/จำนวนข้อความ
- 🧪 ชุดทดสอบที่ครอบคลุมกับ TypeScript

## 🔧 การใช้งาน API

### เป็นแพ็คเกจ npm:

```bash
npm install telegram-badge
```

```typescript
import badgeHandler from 'telegram-badge';

// ใช้ในเซิร์ฟเวอร์เลสฟังก์ชันของคุณ
export default badgeHandler;
```

### การเรียก API โดยตรง:

```typescript
GET /api/telegram-badge?style=flat&label=สมาชิก&color=2AABEE&labelColor=555555
```

## 🧪 การทดสอบ

รันแพ็คเกจทดสอบ:

```bash
npm test
```
# Telegram Badge Generator

[🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇩🇪 Deutsch](README.de.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇨🇳 中文](README.zh.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![Release](https://github.com/chatman-media/telegram-badge/workflows/Release/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![JSR](https://jsr.io/badges/@chatman-media/telegram-badge)](https://jsr.io/@chatman-media/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

โปรเจ็กต์นี้สร้างป้าย SVG ที่แสดงจำนวนสมาชิกปัจจุบันของกลุ่มและช่อง Telegram ของคุณ เหมาะอย่างยิ่งสำหรับแสดงความคล่องแคล่วของชุมชนในไฟล์ README ของ GitHub หรือบนเว็บไซต์

## 🚀 เริ่มต้นอย่างรวดเร็ว

เพียงใช้พารามิเตอร์ URL เพื่อสร้างป้ายสำหรับกลุ่มหรือช่อง Telegram ใดๆ:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel_or_group
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

เพียงเพิ่ม ID กลุ่มหรือช่อง Telegram ของคุณไปยัง URL:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel_or_group)
```

**เอนทิตีที่รองรับ:**
- ช่องสาธารณะ (ตัวอย่าง: `@your_channel`)
- กลุ่มสาธารณะ (ตัวอย่าง: `@your_group`)
- กลุ่ม/ช่องส่วนตัว (ใช้ ID ตัวเลข: `-1001234567890`)

เพียงเท่านี้! ไม่ต้อง deploy ไม่ต้องใช้โทเค็นบอทสำหรับช่องและกลุ่มสาธารณะ

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

รันการตรวจสอบประเภท:

```bash
npm run type-check
```

สร้างโปรเจ็กต์:

```bash
npm run build
```

## 🤝 การมีส่วนร่วม

1. Fork รีพอซิทอรี
2. สร้าง branch ฟีเจอร์ของคุณ (`git checkout -b feature/amazing-feature`)
3. Commit การเปลี่ยนแปลงของคุณ (`git commit -m 'Add some amazing feature'`)
4. Push ไปยัง branch (`git push origin feature/amazing-feature`)
5. เปิด Pull Request

## ติดตาม

[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X (Twitter)](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## สนับสนุน 💝🚀

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

## ประวัติดาว

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## กิจกรรมรีพอซิทอรี

![Alt](https://repobeats.axiom.co/api/embed/74975e0da934ce1756e69f04fe68f2b026a77aee.svg "Repobeats analytics image")

## 📜 ใบอนุญาต

โปรเจ็กต์นี้ได้รับอนุญาตภายใต้ใบอนุญาต MIT - ดูไฟล์ [LICENSE](LICENSE) สำหรับรายละเอียด

---

สร้างด้วย ❤️ โดย [Chatman Media](https://github.com/chatman-media)
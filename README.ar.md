# مولد شارات تيليجرام

[🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇩🇪 Deutsch](README.de.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇹🇭 ไทย](README.th.md) | [🇨🇳 中文](README.zh.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![Release](https://github.com/chatman-media/telegram-badge/workflows/Release/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![JSR](https://jsr.io/badges/@chatman-media/telegram-badge)](https://jsr.io/@chatman-media/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

هذا المشروع ينشئ شارات SVG بعدد أعضاء مجموعات وقنوات التيليجرام الحالي الخاص بك. مثالي لعرض نشاط المجتمع في ملفات README على GitHub أو على المواقع.

## البدء السريع

فقط استخدم معلمات URL لإنشاء شارات لأي مجموعة أو قناة تيليجرام:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel_or_group
```

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## المكدس التكنولوجي

- Node.js / TypeScript
- Telegram Bot API
- Vercel (Serverless API)
- Jest للاختبار

---

## الاستخدام

### الطريقة الأساسية: معلمات URL (لا يتطلب إعداد!)

فقط أضف معرف مجموعة/قناة التيليجرام الخاص بك إلى URL:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel_or_group)
```

**الكيانات المدعومة:**
- القنوات العامة (مثال: `@your_channel`)
- المجموعات العامة (مثال: `@your_group`)
- المجموعات/القنوات الخاصة (استخدم المعرف الرقمي مثل `-1001234567890`)

هذا كل شيء! لا حاجة للنشر، لا حاجة لرمز البوت للقنوات والمجموعات العامة.

### الطريقة البديلة: الاستضافة الذاتية

للمستخدمين المتقدمين الذين يرغبون في استضافة نسختهم الخاصة:

#### 1. المتطلبات الأساسية
- رمز بوت التيليجرام (أنشئه عبر [@BotFather](https://t.me/botfather))
- حساب Vercel (أو أي استضافة Node.js)

#### 2. النشر على Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchatman-media%2Ftelegram-badge)

قم بتعيين متغيرات البيئة:
- `BOT_TOKEN`: رمز بوت التيليجرام الخاص بك
- `CHAT_ID`: معرف الدردشة الافتراضي (اختياري إذا كنت تستخدم معلمات URL)

#### 3. التطوير المحلي

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
npm install

# إنشاء ملف .env
echo "BOT_TOKEN=your_bot_token" > .env
echo "CHAT_ID=@your_channel" >> .env

npm run dev
```

### معلمات التنسيق

يمكنك تخصيص مظهر الشارة باستخدام المعلمات التالية:

| المعلمة | الوصف | القيمة الافتراضية |
|-----------|-------------|------------------------|
| `channelId` | معرف أو اسم مستخدم دردشة التيليجرام (مثال: `@timelinestudiochat`) | من البيئة |
| `style` | نمط الشارة | `flat` |
| `label` | نص التسمية | `Telegram` |
| `color` | لون الشارة الرئيسي | `2AABEE` (لون التيليجرام) |
| `labelColor` | لون التسمية | `555555` |
| `logo` | إظهار شعار التيليجرام | `true` |

#### الأنماط المتاحة:

- `flat` - نمط مسطح (افتراضي)
- `plastic` - نمط بلاستيكي مع تدرج
- `flat-square` - نمط مسطح مربع بدون زوايا مستديرة
- `for-the-badge` - نمط عريض مع أحرف كبيرة
- `social` - نمط اجتماعي GitHub

#### أمثلة:

الشارة القياسية (نمط flat):
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

شارة بنمط plastic:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic)

شارة بنمط flat-square:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square)

شارة بنمط for-the-badge:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge)

شارة بنمط social:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social)

شارة بتسمية ولون مخصصين:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&label=انضم%20للدردشة&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&label=انضم%20للدردشة&color=00FF00)

شارة مخصصة بالكامل:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&label=المجتمع&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge&label=المجتمع&color=FF5733&labelColor=1A1A1A)

شارة بدون شعار:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&logo=false)

شارة لقناة محددة:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

شارة بتنسيق مخصص:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&color=FF5733
```

## المميزات

- 👥 عرض عدد الأعضاء في الوقت الفعلي
- 🔗 معلمات URL المباشرة - لا يتطلب إعداد!
- 🎨 تخصيص كامل لمظهر الشارة
- 🔒 الاستضافة الذاتية الاختيارية مع تخزين آمن للرموز
- ⚡ التخزين المؤقت المحسّن للتحميل السريع
- 🛡️ معالجة الأخطاء مع رسائل إعلامية
- 🆓 مجاني الاستخدام
- 📡 يمكن توسيعه لعرض النشاط/عدد الرسائل
- 🧪 مجموعة اختبار شاملة مع TypeScript

## استخدام API

### كحزمة npm:

```bash
npm install telegram-badge
```

```typescript
import badgeHandler from 'telegram-badge';

// استخدم في دالة الخادم الخاصة بك
export default badgeHandler;
```

### مكالمات API المباشرة:

```typescript
GET /api/telegram-badge?style=flat&label=الأعضاء&color=2AABEE&labelColor=555555
```

## الاختبار

تشغيل مجموعة الاختبارات:

```bash
npm test
```

## المساهمة

1. قم بعمل Fork للمستودع
2. أنشئ فرع ميزة (`git checkout -b feature/amazing-feature`)
3. قم بتثبيت تغييراتك (`git commit -m 'Add some amazing feature'`)
4. ادفع الفرع (`git push origin feature/amazing-feature`)
5. افتح طلب سحب (Pull Request)

## اشترك

[![TikTok](https://img.shields.io/badge/TikTok-000000?logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## الدعم 💝🚀

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

## تاريخ النجوم

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## نشاط المستودع

![Alt](https://repobeats.axiom.co/api/embed/74975e0da934ce1756e69f04fe68f2b026a77aee.svg "Repobeats analytics image")

## الرخصة

هذا المشروع مرخّص بموجب رخصة MIT - راجع ملف [LICENSE](LICENSE) لمزيد من التفاصيل.

---

صنع بحب من قبل [Chatman Media](https://github.com/chatman-media)
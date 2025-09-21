# 🛡️ Telegram 그룹 배지 생성기

[🇷🇺 Русский](README.ru.md) | [🇺🇸 English](README.md) | [🇨🇳 中文](README.zh.md) | [🇹🇭 ไทย](README.th.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/workflows/CI/badge.svg)](https://github.com/chatman-media/telegram-badge/actions)
[![npm version](https://img.shields.io/npm/v/telegram-badge.svg)](https://www.npmjs.com/package/telegram-badge)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/telegram-badge)](https://bundlephobia.com/package/telegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![GitHub stars](https://img.shields.io/github/stars/chatman-media/telegram-badge?style=social)](https://github.com/chatman-media/telegram-badge)
[![dev.to](https://img.shields.io/badge/dev.to-Article-0A0A0A.svg?style=flat&logo=dev.to)](https://dev.to/chatman-media/show-your-telegram-group-member-count-in-github-readme-46pl)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

이 프로젝트는 Telegram 그룹의 현재 멤버 수를 표시하는 SVG 배지를 생성합니다. GitHub README 파일이나 웹사이트에서 커뮤니티 활동을 표시하는 데 완벽합니다.

## 🚀 빠른 시작

URL 매개변수를 사용하여 모든 Telegram 채널이나 그룹에 대한 배지를 생성하기만 하면 됩니다:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

![Telegram Group Members](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 📦 기술 스택

- Node.js / TypeScript
- Telegram Bot API
- Vercel (서버리스 API)
- Jest (테스트용)

---

## 🧩 사용법

### 주요 방법: URL 매개변수 (설정 불필요!)

Telegram 채널/그룹 ID를 URL에 추가하기만 하면 됩니다:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel)
```

그게 다입니다! 배포도, 봇 토큰도 필요 없습니다.

### 대체 방법: 자체 호스팅

자신만의 인스턴스를 호스팅하려는 고급 사용자를 위한:

#### 1. 필수 조건
- Telegram 봇 토큰 ([@BotFather](https://t.me/botfather)를 통해 생성)
- Vercel 계정 (또는 모든 Node.js 호스팅)

#### 2. Vercel에 배포

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchatman-media%2Ftelegram-badge)

환경 변수 설정:
- `BOT_TOKEN`: Telegram 봇 토큰
- `CHAT_ID`: 기본 채팅 ID (URL 매개변수를 사용하는 경우 선택 사항)

#### 3. 로컬 개발

```bash
git clone https://github.com/chatman-media/telegram-badge.git
cd telegram-badge
npm install

# .env 파일 생성
echo "BOT_TOKEN=your_bot_token" > .env
echo "CHAT_ID=@your_channel" >> .env

npm run dev
```

### 🎨 스타일링 매개변수

다음 매개변수를 사용하여 배지 외관을 사용자 지정할 수 있습니다:

| 매개변수 | 설명 | 기본값 |
|-----------|-------------|---------------|
| `channelId` | Telegram 채팅 ID 또는 사용자 이름 (예: `@timelinestudiochat`) | 환경에서 |
| `style` | 배지 스타일 | `flat` |
| `label` | 레이블 텍스트 | `Telegram` |
| `color` | 메인 배지 색상 | `2AABEE` (Telegram 색상) |
| `labelColor` | 레이블 색상 | `555555` |
| `logo` | Telegram 로고 표시 | `true` |

#### 사용 가능한 스타일:

- `flat` - 플랫 스타일 (기본값)
- `plastic` - 그라데이션이 있는 플라스틱 스타일
- `flat-square` - 둥근 모서리가 없는 플랫 스타일
- `for-the-badge` - 대문자가 있는 넓은 스타일
- `social` - GitHub 소셜 스타일

#### 예시:

표준 배지 (플랫 스타일):
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```
![Flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

플라스틱 스타일 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=plastic
```
![Plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic)

플랫 스퀘어 스타일 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=flat-square
```
![Flat-Square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square)

for-the-badge 스타일 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge
```
![For-The-Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge)

소셜 스타일 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=social
```
![Social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social)

사용자 지정 레이블과 색상이 있는 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&label=채팅에%20가입&color=00FF00
```
![Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&label=채팅에%20가입&color=00FF00)

완전히 맞춤화된 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&label=커뮤니티&color=FF5733&labelColor=1A1A1A
```
![Full Custom](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge&label=커뮤니티&color=FF5733&labelColor=1A1A1A)

로고 없는 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&logo=false
```
![No Logo](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&logo=false)

특정 채널용 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel
```

맞춤 스타일이 있는 배지:
```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@your_channel&style=for-the-badge&color=FF5733
```

## ✨ 기능

- 👥 실시간 멤버 수 표시
- 🔗 직접 URL 매개변수 - 설정 불필요!
- 🎨 배지 외관의 전체 사용자 지정
- 🔒 안전한 토큰 저장을 통한 선택적 자체 호스팅
- ⚡ 빠른 로딩을 위한 최적화된 캐싱
- 🛡️ 정보 메시지가 있는 오류 처리
- 🆓 무료 사용
- 📡 활동/메시지 수 표시로 확장 가능
- 🧪 TypeScript를 통한 포괄적인 테스트 스위트

## 🔧 API 사용

### npm 패키지로:

```bash
npm install telegram-badge
```

```typescript
import badgeHandler from 'telegram-badge';

// 서버리스 함수에서 사용
export default badgeHandler;
```

### 직접 API 호출:

```typescript
GET /api/telegram-badge?style=flat&label=멤버&color=2AABEE&labelColor=555555
```

## 🧪 테스트

테스트 스위트 실행:

```bash
npm test
```
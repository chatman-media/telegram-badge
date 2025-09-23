# Telegram Badge Generator

**Sprachen:** [🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇹🇭 ไทย](README.th.md) | [🇨🇳 中文](README.zh.md)

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

Dieses Projekt generiert SVG-Badges mit der aktuellen Mitgliederzahl Ihrer Telegram-Gruppen und -Kanäle. Perfekt für die Anzeige von Community-Aktivitäten in GitHub README-Dateien oder auf Websites.

**Unterstützt beide:**
- 👥 **Telegram-Gruppen** - Interaktive Communities, in denen alle Mitglieder Nachrichten senden können
- 📢 **Telegram-Kanäle** - Broadcast-Kanäle, in denen nur Admins Nachrichten posten können

Sowohl Gruppen als auch Kanäle verwenden denselben API-Endpunkt und funktionieren identisch mit diesem Badge-Generator.

## Schnellstart

Verwenden Sie einfach URL-Parameter, um Badges für jede Telegram-Gruppe oder jeden Kanal zu generieren:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@ihr_kanal_oder_gruppe
```

![Telegram Mitglieder](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 🛠️ Tech Stack

- **Node.js / TypeScript** für robuste Entwicklung
- **Telegram Bot API** für Echtzeit-Daten
- **Vercel (Serverless API)** für globale Verfügbarkeit
- **Jest** für Tests
- **Biome** für Linting und Formatierung

## Verwendung

### Primäre Methode: URL-Parameter (Keine Einrichtung erforderlich!)

Fügen Sie einfach Ihre Telegram-Gruppen- oder Kanal-ID zur URL hinzu:

```markdown
![Telegram Badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@ihr_kanal_oder_gruppe)
```

**Funktioniert mit:**
- Öffentliche Kanäle: `@ihr_kanal`
- Öffentliche Gruppen: `@ihre_gruppe` 
- Private Gruppen/Kanäle: `-1001234567890` (numerische Chat-ID)

Das war's! Keine Bereitstellung, kein Bot-Token für öffentliche Gruppen und Kanäle erforderlich.

### Alternative Methode: Selbst gehostete Bereitstellung

Für private Kanäle oder benutzerdefinierte Bereitstellungen:

1. **Repository klonen:**
   ```bash
   git clone https://github.com/chatman-media/telegram-badge.git
   cd telegram-badge
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen einrichten:**
   ```bash
   cp .env.example .env
   # Bearbeiten Sie .env mit Ihrem BOT_TOKEN
   ```

4. **Auf Vercel bereitstellen:**
   ```bash
   npm run deploy
   ```

## Styling-Parameter

Passen Sie das Aussehen Ihres Badges an:

| Parameter | Beschreibung | Standard | Beispiel |
|-----------|-------------|----------|----------|
| `style` | Badge-Stil | `flat` | `flat`, `plastic`, `flat-square`, `for-the-badge`, `social` |
| `label` | Linker Text | `Members` | `Mitglieder`, `Abonnenten` |
| `color` | Rechte Farbe | `2AABEE` | `brightgreen`, `red`, `blue` |
| `labelColor` | Linke Farbe | `555555` | `orange`, `lightgrey` |
| `logo` | Logo hinzufügen | `telegram` | `telegram`, `discord` |
| `logoColor` | Logo-Farbe | `white` | `white`, `black` |

### Badge-Stile

| Stil | Beispiel |
|------|----------|
| `flat` | ![flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat) |
| `plastic` | ![plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic) |
| `flat-square` | ![flat-square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square) |
| `for-the-badge` | ![for-the-badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge) |
| `social` | ![social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social) |

### Verwendungsbeispiele

```markdown
<!-- Grundlegendes Badge -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@ihr_kanal)

<!-- Benutzerdefiniertes Styling -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@ihr_kanal&style=for-the-badge&label=Community&color=blue)

<!-- Mit Logo -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@ihr_kanal&logo=telegram&logoColor=white)
```

## Features

- 🔄 **Echtzeit-Mitgliederzahl** - Immer aktuelle Daten
- 🎨 **Vollständig anpassbar** - Farben, Stile, Labels
- 🚀 **Selbst hostbar** - Bereitstellen auf Ihrer eigenen Infrastruktur
- 📦 **NPM-Paket verfügbar** - Einfache Integration in Ihre Projekte
- 🌐 **Globale CDN** - Schnelle Antwortzeiten weltweit
- 🔒 **Sichere API** - Keine Speicherung sensibler Daten
- 📱 **Responsive Design** - Funktioniert auf allen Geräten
- 🎯 **Null-Konfiguration** - Funktioniert sofort

## API-Verwendung

### Als NPM-Paket:

```bash
npm install @chatman-media/telegram-badge
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Verwendung in Ihrer Serverless-Funktion
export default badgeHandler;
```

### Als Deno/JSR-Paket:

```bash
# Mit JSR
deno add @chatman-media/telegram-badge

# Oder direkt importieren
import badgeHandler from "jsr:@chatman-media/telegram-badge";
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Verwendung in Ihrer Deno Serverless-Funktion
export default badgeHandler;
```

### Direkte API-Aufrufe:

```typescript
GET /api/telegram-badge?channelId=@ihr_kanal&style=flat&label=Mitglieder&color=2AABEE&labelColor=555555
```

## Tests

Test-Suite ausführen:

```bash
npm test
```

Typprüfung ausführen:

```bash
npm run type-check
```

Projekt erstellen:

```bash
npm run build
```

## FAQ

### Was ist der Unterschied zwischen Telegram-Gruppen und -Kanälen?

**Telegram-Gruppen:**
- 👥 Interaktive Communities, in denen alle Mitglieder Nachrichten senden können
- Mitglieder können sich gegenseitig sehen und interagieren
- Können bis zu 200.000 Mitglieder haben
- Beispiel: `@ihre_gruppe`

**Telegram-Kanäle:**
- 📢 Broadcast-Kanäle, in denen nur Admins Nachrichten posten können
- Abonnenten können sich nicht gegenseitig sehen
- Können unbegrenzt viele Abonnenten haben
- Beispiel: `@ihr_kanal`

**Für diesen Badge-Generator:** Sowohl Gruppen als auch Kanäle funktionieren genau gleich! Die Telegram Bot API behandelt sie identisch beim Abrufen der Mitglieder-/Abonnentenzahlen.

### Wie finde ich meine Gruppen-/Kanal-ID?

**Für öffentliche Gruppen/Kanäle:**
- Verwenden Sie den Benutzernamen: `@ihr_kanal` oder `@ihre_gruppe`

**Für private Gruppen/Kanäle:**
- Verwenden Sie einen Bot wie [@userinfobot](https://t.me/userinfobot)
- Leiten Sie eine beliebige Nachricht aus Ihrer Gruppe/Ihrem Kanal an den Bot weiter
- Er zeigt die Chat-ID an (wie `-1001234567890`)

### Benötige ich ein Bot-Token?

**Kein Bot-Token erforderlich** für öffentliche Gruppen und Kanäle bei Verwendung des gehosteten Dienstes unter `telegram-badge.vercel.app`.

**Bot-Token erforderlich** nur für:
- Private Gruppen/Kanäle
- Selbst gehostete Bereitstellungen

## Mitwirken

1. Repository forken
2. Feature-Branch erstellen (`git checkout -b feature/amazing-feature`)
3. Änderungen committen (`git commit -m 'Add some amazing feature'`)
4. Branch pushen (`git push origin feature/amazing-feature`)
5. Pull Request öffnen

## Abonnieren

[![Stack Overflow profile](https://stackoverflow-readme-profile.johannchopin.fr/profile/724036?theme=dark)](https://stackoverflow.com/users/724036/alexander-kireyev)

[![GitHub Followers](https://img.shields.io/github/followers/chatman-media?style=social)](https://github.com/chatman-media)
[![TikTok](https://img.shields.io/badge/TikTok-000000?logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## Unterstützung 💝🚀

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

## Star History

<a href="https://www.star-history.com/#chatman-media/telegram-badge&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chatman-media/telegram-badge&type=Date" />
 </picture>
</a>

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/74975e0da934ce1756e69f04fe68f2b026a77aee.svg "Repobeats analytics image")

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE)-Datei für Details.

---

Mit ❤️ erstellt von [Chatman Media](https://github.com/chatman-media)
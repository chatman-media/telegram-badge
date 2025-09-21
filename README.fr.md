# Générateur de Badge Telegram

**Langues :** [🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇩🇪 Deutsch](README.de.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇹🇭 ไทย](README.th.md) | [🇨🇳 中文](README.zh.md)

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

Ce projet génère des badges SVG avec le nombre actuel de membres de vos groupes et chaînes Telegram. Parfait pour afficher l'activité de la communauté dans les fichiers README GitHub ou sur les sites web.

**Prend en charge les deux :**
- 👥 **Groupes Telegram** - Communautés interactives où tous les membres peuvent envoyer des messages
- 📢 **Chaînes Telegram** - Chaînes de diffusion où seuls les administrateurs peuvent publier des messages

Les groupes et les chaînes utilisent le même point de terminaison API et fonctionnent de manière identique avec ce générateur de badges.

## Démarrage Rapide

Utilisez simplement les paramètres d'URL pour générer des badges pour n'importe quel groupe ou chaîne Telegram :

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@votre_chaine_ou_groupe
```

![Membres Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## Stack Technologique

- **Node.js / TypeScript** pour un développement robuste
- **API Bot Telegram** pour des données en temps réel
- **Vercel (API Serverless)** pour une disponibilité mondiale
- **Jest** pour les tests
- **Biome** pour le linting et le formatage

## 📖 Utilisation

### Méthode Principale : Paramètres d'URL (Aucune Configuration Requise !)

Ajoutez simplement votre ID de groupe ou chaîne Telegram à l'URL :

```markdown
![Badge Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@votre_chaine_ou_groupe)
```

**Fonctionne avec :**
- Chaînes publiques : `@votre_chaine`
- Groupes publics : `@votre_groupe` 
- Groupes/chaînes privés : `-1001234567890` (ID de chat numérique)

C'est tout ! Aucun déploiement, aucun token de bot nécessaire pour les groupes et chaînes publics.

### Méthode Alternative : Déploiement Auto-Hébergé

Pour les chaînes privées ou les déploiements personnalisés :

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/chatman-media/telegram-badge.git
   cd telegram-badge
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement :**
   ```bash
   cp .env.example .env
   # Modifiez .env avec votre BOT_TOKEN
   ```

4. **Déployer sur Vercel :**
   ```bash
   npm run deploy
   ```

## Paramètres de Style

Personnalisez l'apparence de votre badge :

| Paramètre | Description | Défaut | Exemple |
|-----------|-------------|--------|---------|
| `style` | Style du badge | `flat` | `flat`, `plastic`, `flat-square`, `for-the-badge`, `social` |
| `label` | Texte de gauche | `Members` | `Membres`, `Abonnés` |
| `color` | Couleur de droite | `2AABEE` | `brightgreen`, `red`, `blue` |
| `labelColor` | Couleur de gauche | `555555` | `orange`, `lightgrey` |
| `logo` | Ajouter un logo | `telegram` | `telegram`, `discord` |
| `logoColor` | Couleur du logo | `white` | `white`, `black` |

### Styles de Badge

| Style | Exemple |
|-------|---------|
| `flat` | ![flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat) |
| `plastic` | ![plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic) |
| `flat-square` | ![flat-square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square) |
| `for-the-badge` | ![for-the-badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge) |
| `social` | ![social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social) |

### Exemples d'Utilisation

```markdown
<!-- Badge basique -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@votre_chaine)

<!-- Style personnalisé -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@votre_chaine&style=for-the-badge&label=Communauté&color=blue)

<!-- Avec logo -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@votre_chaine&logo=telegram&logoColor=white)
```

## Fonctionnalités

- 🔄 **Nombre de membres en temps réel** - Données toujours à jour
- 🎨 **Entièrement personnalisable** - Couleurs, styles, étiquettes
- 🚀 **Auto-hébergeable** - Déployez sur votre propre infrastructure
- 📦 **Package NPM disponible** - Intégration facile dans vos projets
- 🌐 **CDN Global** - Temps de réponse rapides dans le monde entier
- 🔒 **API Sécurisée** - Aucun stockage de données sensibles
- 📱 **Design Responsive** - Fonctionne sur tous les appareils
- 🎯 **Configuration Zéro** - Fonctionne immédiatement

## Utilisation de l'API

### En tant que package NPM :

```bash
npm install @chatman-media/telegram-badge
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Utilisez dans votre fonction serverless
export default badgeHandler;
```

### En tant que package Deno/JSR :

```bash
# Avec JSR
deno add @chatman-media/telegram-badge

# Ou importez directement
import badgeHandler from "jsr:@chatman-media/telegram-badge";
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Utilisez dans votre fonction serverless Deno
export default badgeHandler;
```

### Appels API directs :

```typescript
GET /api/telegram-badge?channelId=@votre_chaine&style=flat&label=Membres&color=2AABEE&labelColor=555555
```

## 🧪 Tests

Exécuter la suite de tests :

```bash
npm test
```

Exécuter la vérification de type :

```bash
npm run type-check
```

Construire le projet :

```bash
npm run build
```

## ❓ FAQ

### Quelle est la différence entre les groupes et chaînes Telegram ?

**Groupes Telegram :**
- 👥 Communautés interactives où tous les membres peuvent envoyer des messages
- Les membres peuvent se voir et interagir entre eux
- Peuvent avoir jusqu'à 200 000 membres
- Exemple : `@votre_groupe`

**Chaînes Telegram :**
- 📢 Chaînes de diffusion où seuls les administrateurs peuvent publier des messages
- Les abonnés ne peuvent pas se voir entre eux
- Peuvent avoir un nombre illimité d'abonnés
- Exemple : `@votre_chaine`

**Pour ce générateur de badges :** Les groupes et chaînes fonctionnent exactement de la même manière ! L'API Bot Telegram les traite de manière identique pour obtenir le nombre de membres/abonnés.

### Comment trouver mon ID de groupe/chaîne ?

**Pour les groupes/chaînes publics :**
- Utilisez le nom d'utilisateur : `@votre_chaine` ou `@votre_groupe`

**Pour les groupes/chaînes privés :**
- Utilisez un bot comme [@userinfobot](https://t.me/userinfobot)
- Transférez n'importe quel message de votre groupe/chaîne au bot
- Il affichera l'ID du chat (comme `-1001234567890`)

### Ai-je besoin d'un token de bot ?

**Aucun token de bot nécessaire** pour les groupes et chaînes publics lors de l'utilisation du service hébergé sur `telegram-badge.vercel.app`.

**Token de bot requis** uniquement pour :
- Les groupes/chaînes privés
- Les déploiements auto-hébergés

## Contribution

1. Forkez le dépôt
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Commitez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## S'abonner

[![Stack Overflow profile](https://stackoverflow-readme-profile.johannchopin.fr/profile/724036?theme=dark)](https://stackoverflow.com/users/724036/alexander-kireyev)

[![GitHub Followers](https://img.shields.io/github/followers/chatman-media?style=social)](https://github.com/chatman-media)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

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

## 📜 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Fait avec ❤️ par [Chatman Media](https://github.com/chatman-media)
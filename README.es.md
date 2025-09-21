# Generador de Insignias de Telegram

**Idiomas:** [🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇩🇪 Deutsch](README.de.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇵🇹 Português](README.pt.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇹🇭 ไทย](README.th.md) | [🇨🇳 中文](README.zh.md)

[![Build Status](https://github.com/chatman-media/telegram-badge/actions/workflows/ci.yml/badge.svg)](https://github.com/chatman-media/telegram-badge/actions/workflows/ci.yml)
[![npm version](https://badge.fury.io/js/@chatman-media%2Ftelegram-badge.svg)](https://badge.fury.io/js/@chatman-media%2Ftelegram-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
<a href="https://biomejs.dev"><img src="https://img.shields.io/badge/Biome-60A5FA?style=flat&logo=biome&logoColor=white" alt="Biome"></a>
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![X (Twitter)](https://img.shields.io/badge/Tweet-1DA1F2.svg?style=flat&logo=x&logoColor=white)](https://x.com/chatman_media/status/1947399700795244694)

Este proyecto genera insignias SVG con el número actual de miembros de tus grupos y canales de Telegram. Perfecto para mostrar la actividad de la comunidad en archivos README de GitHub o en sitios web.

**Soporta ambos:**
- 👥 **Grupos de Telegram** - Comunidades interactivas donde todos los miembros pueden enviar mensajes
- 📢 **Canales de Telegram** - Canales de difusión donde solo los administradores pueden publicar mensajes

Tanto los grupos como los canales usan el mismo endpoint de API y funcionan de manera idéntica con este generador de insignias.

## 🚀 Inicio Rápido

Simplemente usa parámetros de URL para generar insignias para cualquier grupo o canal de Telegram:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@tu_canal_o_grupo
```

![Miembros de Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 🛠️ Stack Tecnológico

- **Node.js / TypeScript** para desarrollo robusto
- **API Bot de Telegram** para datos en tiempo real
- **Vercel (API Serverless)** para disponibilidad global
- **Jest** para pruebas
- **Biome** para linting y formateo

## 📖 Uso

### Método Principal: Parámetros de URL (¡Sin Configuración Requerida!)

Simplemente agrega tu ID de grupo o canal de Telegram a la URL:

```markdown
![Insignia de Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@tu_canal_o_grupo)
```

**Funciona con:**
- Canales públicos: `@tu_canal`
- Grupos públicos: `@tu_grupo` 
- Grupos/canales privados: `-1001234567890` (ID de chat numérico)

¡Eso es todo! No se necesita despliegue ni token de bot para grupos y canales públicos.

### Método Alternativo: Despliegue Auto-Hospedado

Para canales privados o despliegues personalizados:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/chatman-media/telegram-badge.git
   cd telegram-badge
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env
   # Edita .env con tu BOT_TOKEN
   ```

4. **Desplegar en Vercel:**
   ```bash
   npm run deploy
   ```

## 🎨 Parámetros de Estilo

Personaliza la apariencia de tu insignia:

| Parámetro | Descripción | Por defecto | Ejemplo |
|-----------|-------------|-------------|---------|
| `style` | Estilo de insignia | `flat` | `flat`, `plastic`, `flat-square`, `for-the-badge`, `social` |
| `label` | Texto izquierdo | `Members` | `Miembros`, `Suscriptores` |
| `color` | Color derecho | `2AABEE` | `brightgreen`, `red`, `blue` |
| `labelColor` | Color izquierdo | `555555` | `orange`, `lightgrey` |
| `logo` | Agregar logo | `telegram` | `telegram`, `discord` |
| `logoColor` | Color del logo | `white` | `white`, `black` |

### Estilos de Insignia

| Estilo | Ejemplo |
|--------|---------|
| `flat` | ![flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat) |
| `plastic` | ![plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic) |
| `flat-square` | ![flat-square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square) |
| `for-the-badge` | ![for-the-badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge) |
| `social` | ![social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social) |

### Ejemplos de Uso

```markdown
<!-- Insignia básica -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@tu_canal)

<!-- Estilo personalizado -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@tu_canal&style=for-the-badge&label=Comunidad&color=blue)

<!-- Con logo -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@tu_canal&logo=telegram&logoColor=white)
```

## ✨ Características

- 🔄 **Número de miembros en tiempo real** - Datos siempre actualizados
- 🎨 **Completamente personalizable** - Colores, estilos, etiquetas
- 🚀 **Auto-hospedable** - Despliega en tu propia infraestructura
- 📦 **Paquete NPM disponible** - Fácil integración en tus proyectos
- 🌐 **CDN Global** - Tiempos de respuesta rápidos en todo el mundo
- 🔒 **API Segura** - Sin almacenamiento de datos sensibles
- 📱 **Diseño Responsivo** - Funciona en todos los dispositivos
- 🎯 **Configuración Cero** - Funciona inmediatamente

## 🔧 Uso de la API

### Como paquete NPM:

```bash
npm install @chatman-media/telegram-badge
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Usa en tu función serverless
export default badgeHandler;
```

### Como paquete Deno/JSR:

```bash
# Usando JSR
deno add @chatman-media/telegram-badge

# O importa directamente
import badgeHandler from "jsr:@chatman-media/telegram-badge";
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Usa en tu función serverless de Deno
export default badgeHandler;
```

### Llamadas directas a la API:

```typescript
GET /api/telegram-badge?channelId=@tu_canal&style=flat&label=Miembros&color=2AABEE&labelColor=555555
```

## 🧪 Pruebas

Ejecutar la suite de pruebas:

```bash
npm test
```

Ejecutar verificación de tipos:

```bash
npm run type-check
```

Construir el proyecto:

```bash
npm run build
```

## ❓ FAQ

### ¿Cuál es la diferencia entre grupos y canales de Telegram?

**Grupos de Telegram:**
- 👥 Comunidades interactivas donde todos los miembros pueden enviar mensajes
- Los miembros pueden verse entre sí e interactuar
- Pueden tener hasta 200,000 miembros
- Ejemplo: `@tu_grupo`

**Canales de Telegram:**
- 📢 Canales de difusión donde solo los administradores pueden publicar mensajes
- Los suscriptores no pueden verse entre sí
- Pueden tener suscriptores ilimitados
- Ejemplo: `@tu_canal`

**Para este generador de insignias:** ¡Tanto los grupos como los canales funcionan exactamente igual! La API Bot de Telegram los trata de manera idéntica para obtener el número de miembros/suscriptores.

### ¿Cómo encuentro mi ID de grupo/canal?

**Para grupos/canales públicos:**
- Usa el nombre de usuario: `@tu_canal` o `@tu_grupo`

**Para grupos/canales privados:**
- Usa un bot como [@userinfobot](https://t.me/userinfobot)
- Reenvía cualquier mensaje de tu grupo/canal al bot
- Mostrará el ID del chat (como `-1001234567890`)

### ¿Necesito un token de bot?

**No se necesita token de bot** para grupos y canales públicos cuando usas el servicio hospedado en `telegram-badge.vercel.app`.

**Token de bot requerido** solo para:
- Grupos/canales privados
- Despliegues auto-hospedados

## 🤝 Contribuir

1. Haz fork del repositorio
2. Crea tu rama de característica (`git checkout -b feature/amazing-feature`)
3. Confirma tus cambios (`git commit -m 'Add some amazing feature'`)
4. Empuja a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Suscribirse

[![Stack Overflow profile](https://stackoverflow-readme-profile.johannchopin.fr/profile/724036?theme=dark)](https://stackoverflow.com/users/724036/alexander-kireyev)

[![GitHub Followers](https://img.shields.io/github/followers/chatman-media?style=social)](https://github.com/chatman-media)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## Soporte 💝🚀

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

## 📜 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ por [Chatman Media](https://github.com/chatman-media)
# Gerador de Emblemas do Telegram

**Idiomas:** [🇺🇸 English](README.md) | [🇷🇺 Русский](README.ru.md) | [🇩🇪 Deutsch](README.de.md) | [🇫🇷 Français](README.fr.md) | [🇪🇸 Español](README.es.md) | [🇸🇦 العربية](README.ar.md) | [🇯🇵 日本語](README.ja.md) | [🇰🇷 한국어](README.ko.md) | [🇹🇭 ไทย](README.th.md) | [🇨🇳 中文](README.zh.md)

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

Este projeto gera emblemas SVG com o número atual de membros dos seus grupos e canais do Telegram. Perfeito para exibir atividade da comunidade em arquivos README do GitHub ou em sites.

**Suporta ambos:**
- 👥 **Grupos do Telegram** - Comunidades interativas onde todos os membros podem enviar mensagens
- 📢 **Canais do Telegram** - Canais de transmissão onde apenas administradores podem postar mensagens

Tanto grupos quanto canais usam o mesmo endpoint da API e funcionam de forma idêntica com este gerador de emblemas.

## Início Rápido

Simplesmente use parâmetros de URL para gerar emblemas para qualquer grupo ou canal do Telegram:

```
https://telegram-badge.vercel.app/api/telegram-badge?channelId=@seu_canal_ou_grupo
```

![Membros do Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat)

---

## 🛠️ Stack Tecnológico

- **Node.js / TypeScript** para desenvolvimento robusto
- **API Bot do Telegram** para dados em tempo real
- **Vercel (API Serverless)** para disponibilidade global
- **Jest** para testes
- **Biome** para linting e formatação

## Uso

### Método Principal: Parâmetros de URL (Nenhuma Configuração Necessária!)

Simplesmente adicione seu ID de grupo ou canal do Telegram à URL:

```markdown
![Emblema do Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@seu_canal_ou_grupo)
```

**Funciona com:**
- Canais públicos: `@seu_canal`
- Grupos públicos: `@seu_grupo` 
- Grupos/canais privados: `-1001234567890` (ID de chat numérico)

É isso! Nenhuma implantação, nenhum token de bot necessário para grupos e canais públicos.

### Método Alternativo: Implantação Auto-Hospedada

Para canais privados ou implantações personalizadas:

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/chatman-media/telegram-badge.git
   cd telegram-badge
   ```

2. **Instalar dependências:**
   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente:**
   ```bash
   cp .env.example .env
   # Edite .env com seu BOT_TOKEN
   ```

4. **Implantar no Vercel:**
   ```bash
   npm run deploy
   ```

## Parâmetros de Estilo

Personalize a aparência do seu emblema:

| Parâmetro | Descrição | Padrão | Exemplo |
|-----------|-----------|--------|---------|
| `style` | Estilo do emblema | `flat` | `flat`, `plastic`, `flat-square`, `for-the-badge`, `social` |
| `label` | Texto esquerdo | `Members` | `Membros`, `Inscritos` |
| `color` | Cor direita | `2AABEE` | `brightgreen`, `red`, `blue` |
| `labelColor` | Cor esquerda | `555555` | `orange`, `lightgrey` |
| `logo` | Adicionar logo | `telegram` | `telegram`, `discord` |
| `logoColor` | Cor do logo | `white` | `white`, `black` |

### Estilos de Emblema

| Estilo | Exemplo |
|--------|---------|
| `flat` | ![flat](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat) |
| `plastic` | ![plastic](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=plastic) |
| `flat-square` | ![flat-square](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=flat-square) |
| `for-the-badge` | ![for-the-badge](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=for-the-badge) |
| `social` | ![social](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@timelinestudiochat&style=social) |

### Exemplos de Uso

```markdown
<!-- Emblema básico -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@seu_canal)

<!-- Estilo personalizado -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@seu_canal&style=for-the-badge&label=Comunidade&color=blue)

<!-- Com logo -->
![Telegram](https://telegram-badge.vercel.app/api/telegram-badge?channelId=@seu_canal&logo=telegram&logoColor=white)
```

## Recursos

- 🔄 **Número de membros em tempo real** - Dados sempre atualizados
- 🎨 **Totalmente personalizável** - Cores, estilos, rótulos
- 🚀 **Auto-hospedável** - Implante em sua própria infraestrutura
- 📦 **Pacote NPM disponível** - Fácil integração em seus projetos
- 🌐 **CDN Global** - Tempos de resposta rápidos em todo o mundo
- 🔒 **API Segura** - Nenhum armazenamento de dados sensíveis
- 📱 **Design Responsivo** - Funciona em todos os dispositivos
- 🎯 **Configuração Zero** - Funciona imediatamente

## Uso da API

### Como pacote NPM:

```bash
npm install @chatman-media/telegram-badge
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Use em sua função serverless
export default badgeHandler;
```

### Como pacote Deno/JSR:

```bash
# Usando JSR
deno add @chatman-media/telegram-badge

# Ou importe diretamente
import badgeHandler from "jsr:@chatman-media/telegram-badge";
```

```typescript
import badgeHandler from "@chatman-media/telegram-badge";

// Use em sua função serverless do Deno
export default badgeHandler;
```

### Chamadas diretas da API:

```typescript
GET /api/telegram-badge?channelId=@seu_canal&style=flat&label=Membros&color=2AABEE&labelColor=555555
```

## Testes

Executar a suíte de testes:

```bash
npm test
```

Executar verificação de tipos:

```bash
npm run type-check
```

Construir o projeto:

```bash
npm run build
```

## FAQ

### Qual é a diferença entre grupos e canais do Telegram?

**Grupos do Telegram:**
- 👥 Comunidades interativas onde todos os membros podem enviar mensagens
- Membros podem se ver e interagir entre si
- Podem ter até 200.000 membros
- Exemplo: `@seu_grupo`

**Canais do Telegram:**
- 📢 Canais de transmissão onde apenas administradores podem postar mensagens
- Inscritos não podem se ver entre si
- Podem ter inscritos ilimitados
- Exemplo: `@seu_canal`

**Para este gerador de emblemas:** Tanto grupos quanto canais funcionam exatamente da mesma forma! A API Bot do Telegram os trata de forma idêntica para obter contagens de membros/inscritos.

### Como encontro meu ID de grupo/canal?

**Para grupos/canais públicos:**
- Use o nome de usuário: `@seu_canal` ou `@seu_grupo`

**Para grupos/canais privados:**
- Use um bot como [@userinfobot](https://t.me/userinfobot)
- Encaminhe qualquer mensagem do seu grupo/canal para o bot
- Ele mostrará o ID do chat (como `-1001234567890`)

### Preciso de um token de bot?

**Nenhum token de bot necessário** para grupos e canais públicos ao usar o serviço hospedado em `telegram-badge.vercel.app`.

**Token de bot necessário** apenas para:
- Grupos/canais privados
- Implantações auto-hospedadas

## Contribuindo

1. Faça fork do repositório
2. Crie sua branch de recurso (`git checkout -b feature/amazing-feature`)
3. Confirme suas alterações (`git commit -m 'Add some amazing feature'`)
4. Envie para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Inscrever-se

[![Stack Overflow profile](https://stackoverflow-readme-profile.johannchopin.fr/profile/724036?theme=dark)](https://stackoverflow.com/users/724036/alexander-kireyev)

[![GitHub Followers](https://img.shields.io/github/followers/chatman-media?style=social)](https://github.com/chatman-media)
[![TikTok](https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=1c1917)](https://www.tiktok.com/@chatman.media)
[![twitch](https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white&labelColor=1c1917)](https://www.twitch.tv/chatman1984)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=1c1917)](https://www.youtube.com/@chatman-media)
[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white&labelColor=1c1917)](https://t.me/alexanderkireyev)
[![X](https://img.shields.io/badge/Twitter-000000?style=for-the-badge&logo=x&logoColor=white&labelColor=1c1917)](https://x.com/chatman_media)

## Suporte 💝🚀

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

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Feito com ❤️ por [Chatman Media](https://github.com/chatman-media)
export interface BadgeFormat {
  label: string;
  message: string;
  color: string;
  labelColor: string;
  style: string;
  logo?: boolean;
}

// Telegram logo as base64 encoded SVG
const TELEGRAM_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="14" height="14">
  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
</svg>`;

export function generateBadgeSVG(format: BadgeFormat): string {
  const { label, message, color, labelColor, style, logo } = format;
  
  const logoSpace = logo ? 15 : 0;
  
  // Better text width calculation
  // Always add logoSpace to width calculation
  const labelWidth = label.length * 6.5 + 10 + logoSpace;
  const messageWidth = message.length * 6.5 + 10;
  const totalWidth = labelWidth + messageWidth;
  
  // Calculate proper text length for label
  // When logo is present, we have less space for text
  const labelTextLength = logo ? (labelWidth - logoSpace - 5) * 10 : (labelWidth - 10) * 10;
  
  // Create logo element
  const logoElement = logo ? `<image x="5" y="3" width="14" height="14" href="data:image/svg+xml;base64,${Buffer.from(TELEGRAM_LOGO).toString('base64')}"/>` : '';
  
  // For-the-badge style
  if (style === 'for-the-badge') {
    const logoForBadge = logo ? `<image x="5" y="7" width="14" height="14" href="data:image/svg+xml;base64,${Buffer.from(TELEGRAM_LOGO).toString('base64')}"/>` : '';
    // For-the-badge uses slightly different text length calculation
    const labelTextLengthForBadge = logo ? (labelWidth - logoSpace - 10) * 10 : (labelWidth - 10) * 10;
    
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="28" role="img" aria-label="${label}: ${message}">
      <title>${label}: ${message}</title>
      <g shape-rendering="crispEdges">
        <rect width="${labelWidth}" height="28" fill="${labelColor}"/>
        <rect x="${labelWidth}" width="${messageWidth}" height="28" fill="${color}"/>
      </g>
      ${logoForBadge}
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100">
        <text x="${(labelWidth / 2) * 10}" y="175" transform="scale(.1)" fill="#fff" textLength="${labelTextLengthForBadge}">${label.toUpperCase()}</text>
        <text x="${(labelWidth + messageWidth / 2) * 10}" y="175" font-weight="bold" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message.toUpperCase()}</text>
      </g>
    </svg>`;
  }
  
  // Flat-square style
  if (style === 'flat-square') {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${message}">
      <title>${label}: ${message}</title>
      <g shape-rendering="crispEdges">
        <rect width="${labelWidth}" height="20" fill="${labelColor}"/>
        <rect x="${labelWidth}" width="${messageWidth}" height="20" fill="${color}"/>
      </g>
      ${logoElement}
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
        <text x="${(labelWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${labelTextLength}">${label}</text>
        <text x="${(labelWidth + messageWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message}</text>
      </g>
    </svg>`;
  }
  
  // Social style
  if (style === 'social') {
    const socialLogoElement = logo ? `<image x="7" y="3" width="14" height="14" href="data:image/svg+xml;base64,${Buffer.from(TELEGRAM_LOGO).toString('base64')}"/>` : '';
    
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth + 4}" height="20" style="border-radius: 3px" role="img" aria-label="${label}: ${message}">
      <title>${label}: ${message}</title>
      <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
        <stop offset="1" stop-opacity=".1"/>
      </linearGradient>
      <clipPath id="r">
        <rect width="${totalWidth + 4}" height="20" rx="3" fill="#fff"/>
      </clipPath>
      <g clip-path="url(#r)">
        <rect width="${labelWidth + 2}" height="20" fill="${labelColor}"/>
        <rect x="${labelWidth + 2}" width="${messageWidth + 2}" height="20" fill="${color}"/>
        <rect width="${totalWidth + 4}" height="20" fill="url(#s)"/>
      </g>
      ${socialLogoElement}
      <g fill="#333" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="110">
        <text x="${(labelWidth / 2 + 1) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${labelTextLength}">${label}</text>
        <text x="${(labelWidth + messageWidth / 2 + 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message}</text>
      </g>
    </svg>`;
  }
  
  // Plastic style
  if (style === 'plastic') {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${message}">
      <title>${label}: ${message}</title>
      <linearGradient id="s" x2="0" y2="100%">
        <stop offset="0" stop-color="#fff" stop-opacity=".7"/>
        <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
        <stop offset=".9" stop-color="#000" stop-opacity=".3"/>
        <stop offset="1" stop-color="#000" stop-opacity=".5"/>
      </linearGradient>
      <clipPath id="r">
        <rect width="${totalWidth}" height="20" rx="4" fill="#fff"/>
      </clipPath>
      <g clip-path="url(#r)">
        <rect width="${labelWidth}" height="20" fill="${labelColor}"/>
        <rect x="${labelWidth}" width="${messageWidth}" height="20" fill="${color}"/>
        <rect width="${totalWidth}" height="20" fill="url(#s)"/>
      </g>
      ${logoElement}
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
        <text x="${(labelWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${labelTextLength}">${label}</text>
        <text x="${(labelWidth + messageWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message}</text>
      </g>
    </svg>`;
  }
  
  // Default flat style
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="20" role="img" aria-label="${label}: ${message}">
    <title>${label}: ${message}</title>
    <linearGradient id="s" x2="0" y2="100%">
      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
      <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
      <rect width="${totalWidth}" height="20" rx="3" fill="#fff"/>
    </clipPath>
    <g clip-path="url(#r)">
      <rect width="${labelWidth}" height="20" fill="${labelColor}"/>
      <rect x="${labelWidth}" width="${messageWidth}" height="20" fill="${color}"/>
      <rect width="${totalWidth}" height="20" fill="url(#s)"/>
    </g>
    ${logoElement}
    <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
      <text aria-hidden="true" x="${(labelWidth / 2) * 10}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${labelTextLength}">${label}</text>
      <text x="${(labelWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${labelTextLength}">${label}</text>
      <text aria-hidden="true" x="${(labelWidth + messageWidth / 2) * 10}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${(messageWidth - 10) * 10}">${message}</text>
      <text x="${(labelWidth + messageWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message}</text>
    </g>
  </svg>`;
}
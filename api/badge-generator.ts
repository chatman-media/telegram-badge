export interface BadgeFormat {
  label: string;
  message: string;
  color: string;
  labelColor: string;
  style: string;
}

export function generateBadgeSVG(format: BadgeFormat): string {
  const { label, message, color, labelColor, style } = format;
  
  // Better text width calculation
  const labelWidth = label.length * 6.5 + 20;
  const messageWidth = message.length * 6.5 + 20;
  const totalWidth = labelWidth + messageWidth;
  
  // For-the-badge style
  if (style === 'for-the-badge') {
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${totalWidth}" height="28" role="img" aria-label="${label}: ${message}">
      <title>${label}: ${message}</title>
      <g shape-rendering="crispEdges">
        <rect width="${labelWidth}" height="28" fill="${labelColor}"/>
        <rect x="${labelWidth}" width="${messageWidth}" height="28" fill="${color}"/>
      </g>
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100">
        <text x="${labelWidth / 2 * 10}" y="200" transform="scale(.1)" fill="#fff" textLength="${(labelWidth - 20) * 10}">${label.toUpperCase()}</text>
        <text x="${(labelWidth + messageWidth / 2) * 10}" y="200" font-weight="bold" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 20) * 10}">${message.toUpperCase()}</text>
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
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
        <text x="${labelWidth / 2 * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(labelWidth - 10) * 10}">${label}</text>
        <text x="${(labelWidth + messageWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message}</text>
      </g>
    </svg>`;
  }
  
  // Social style
  if (style === 'social') {
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
      <g fill="#333" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-weight="700" font-size="110">
        <text x="${(labelWidth / 2 + 1) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(labelWidth - 10) * 10}">${label}</text>
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
      <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
        <text x="${labelWidth / 2 * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(labelWidth - 10) * 10}">${label}</text>
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
    <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
      <text aria-hidden="true" x="${labelWidth * 5}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${(labelWidth - 10) * 10}">${label}</text>
      <text x="${labelWidth * 5}" y="140" transform="scale(.1)" fill="#fff" textLength="${(labelWidth - 10) * 10}">${label}</text>
      <text aria-hidden="true" x="${(labelWidth + messageWidth / 2) * 10}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${(messageWidth - 10) * 10}">${message}</text>
      <text x="${(labelWidth + messageWidth / 2) * 10}" y="140" transform="scale(.1)" fill="#fff" textLength="${(messageWidth - 10) * 10}">${message}</text>
    </g>
  </svg>`;
}
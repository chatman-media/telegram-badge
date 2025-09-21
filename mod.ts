/**
 * @fileoverview Telegram Badge Generator - JSR Export
 * @module telegram-badge
 */

import { generateBadgeSVG } from './api/badge-generator.ts';

export { type BadgeFormat, generateBadgeSVG } from './api/badge-generator.ts';

// Re-export types
export type {
  BadgeOptions,
  Environment,
  Logger,
  RequestQuery,
  TelegramApiResponse,
} from './types/index.ts';

/**
 * Generate a Telegram group member count badge
 * @param memberCount - Number of members in the group
 * @param options - Badge styling options
 * @returns SVG string for the badge
 */
export function createTelegramBadge(
  memberCount: number,
  options: {
    style?: 'flat' | 'plastic' | 'flat-square' | 'for-the-badge' | 'social';
    label?: string;
    color?: string;
    labelColor?: string;
    logo?: boolean;
  } = {}
): string {
  const {
    style = 'flat',
    label = 'Telegram',
    color = '#0088cc',
    labelColor = '#555',
    logo = true,
  } = options;

  return generateBadgeSVG({
    label,
    message: memberCount.toLocaleString(),
    color,
    labelColor,
    style,
    logo: logo,
  });
}

/**
 * Validate Telegram channel ID format
 * @param channelId - Channel ID to validate (with or without @)
 * @returns Normalized channel ID
 */
export function validateChannelId(channelId: string): string {
  if (!channelId) {
    throw new Error('Channel ID is required');
  }

  // Remove @ if present and validate format
  const normalized = channelId.startsWith('@') ? channelId.slice(1) : channelId;

  if (!/^[a-zA-Z0-9_]{5,32}$/.test(normalized)) {
    throw new Error('Invalid channel ID format');
  }

  return `@${normalized}`;
}

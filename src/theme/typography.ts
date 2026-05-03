// src/theme/typography.ts
import { Platform, TextStyle } from 'react-native';

// ─── Font families ────────────────────────────────────────────────────────────
export const FontFamily = {
  secondaryFont: 'BBHBogle-Regular',
  primaryFont: 'Inter',

  systemSans: Platform.select({
    ios: 'System',
    android: 'sans-serif',
    default: 'System',
  })!,
} as const;

// ─── Scale ────────────────────────────────────────────────────────────────────
export const FontSize = {
  '2xs': 11,
  xs: 13,
  sm: 15,
  md: 17, // base
  lg: 19,
  xl: 21,
  '2xl': 24,
  '3xl': 32,
} as const;

// ─── Line heights ─────────────────────────────────────────────────────────────
export const LineHeightMultiplier = {
  tight: 1.15,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
} as const;

function lh(size: number, multiplier: number): number {
  return Math.round(size * multiplier);
}

// ─── Letter spacing ───────────────────────────────────────────────────────────
export const LetterSpacing = {
  tight: -0.2,
  normal: 0,
  caps: 2.4,
} as const;

// ─── Ready-made text styles ───────────────────────────────────────────────────

export const TextStyles = {
  // ── Headings (Bogle) ───────────────────────────────────────────────────────
  h1: {
    fontFamily: FontFamily.secondaryFont,
    fontSize: FontSize['3xl'],
    lineHeight: lh(FontSize['3xl'], LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
  } satisfies TextStyle,

  h2Secondary: {
    fontFamily: FontFamily.secondaryFont,
    fontSize: FontSize['2xl'],
    lineHeight: lh(FontSize['2xl'], LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
  } satisfies TextStyle,

  // ── Headings (Inter) ───────────────────────────────────────────────────────
  h2: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize.xl,
    lineHeight: lh(FontSize.xl, LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
    fontWeight: 600,
  } satisfies TextStyle,

  h3: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize.md,
    lineHeight: lh(FontSize.md, LineHeightMultiplier.snug),
    fontWeight: 600,
  } satisfies TextStyle,

  // ── Body (Inter) ──────────────────────────────────────────────────────────
  bodyL: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize.md,
    lineHeight: lh(FontSize.md, LineHeightMultiplier.relaxed),
  } satisfies TextStyle,

  bodyM: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize.sm,
    lineHeight: lh(FontSize.sm, LineHeightMultiplier.normal),
  } satisfies TextStyle,

  bodyS: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize.xs,
    lineHeight: lh(FontSize.xs, LineHeightMultiplier.normal),
  } satisfies TextStyle,

  // ── Actions / Buttons (Inter Semibold) ─────────────────────────────────────
  actionM: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize.sm,
    lineHeight: lh(FontSize.sm, LineHeightMultiplier.normal),
    fontWeight: 600,
  } satisfies TextStyle,

  caption: {
    fontFamily: FontFamily.primaryFont,
    fontSize: FontSize['2xs'],
    lineHeight: lh(FontSize['2xs'], LineHeightMultiplier.normal),
    color: '#666',
    fontWeight: 600,
  } satisfies TextStyle,
};

export type TextStyleToken = keyof typeof TextStyles;

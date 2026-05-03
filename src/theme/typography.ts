/**
 * typography.ts
 * Typography design tokens for Expo app.
 * Covers font families, sizes, line heights, letter spacing, and ready-made text styles.
 *
 * Fonts used:
 *   - Display / headings : "BBH_Bogle"  (Local)
 *   - Body / UI          : "Inter"   (Google Fonts)
 *
 * Load all three with expo-google-fonts or @expo-google-fonts/* packages.
 */

import { Platform, TextStyle } from "react-native";

// ─── Font families ────────────────────────────────────────────────────────────

export const FontFamily = {
  // Expressive serif – titles, display copy
  secondaryFont: "Bogle-Regular",

  // Geometric sans – body, UI labels, captions
  primaryFontRegular: "Inter-Regular",
  primaryFontSemibold: "Inter-Semibold",

  // System fallbacks (always safe)
  systemSans: Platform.select({
    ios: "San Francisco",
    android: "Roboto",
    default: "System",
  })!,
  systemMono: Platform.select({
    ios: "Menlo",
    android: "monospace",
    default: "monospace",
  })!,
} as const;

// ─── Scale ────────────────────────────────────────────────────────────────────

/** Raw numeric size steps (sp / pt) */
export const FontSize = {
  "2xs": 11,
  xs: 13,
  sm: 15,
  md: 17, // base
  lg: 19,
  xl: 21,
  "2xl": 24,
  "3xl": 32,
} as const;

export type FontSizeToken = keyof typeof FontSize;

// ─── Line heights ─────────────────────────────────────────────────────────────

/** Unitless multipliers × fontSize → absolute value for React Native */
export const LineHeightMultiplier = {
  tight: 1.15,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2.0,
} as const;

/** Pre-computed absolute line heights paired with their font size */
function lh(size: number, multiplier: number): number {
  return Math.round(size * multiplier);
}

// ─── Letter spacing ───────────────────────────────────────────────────────────

export const LetterSpacing = {
  tightest: -0.8,
  tighter: -0.4,
  tight: -0.2,
  normal: 0,
  wide: 0.4,
  wider: 0.8,
  widest: 1.6,
  caps: 2.4, // for all-caps labels
} as const;

// ─── Font weights ─────────────────────────────────────────────────────────────

export const FontWeight = {
  thin: "100",
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  black: "900",
} as const;

// ─── Ready-made text styles ───────────────────────────────────────────────────
// Each style is a plain TextStyle object — spread it onto your <Text> or StyleSheet.

export const TextStyles = {
  // ── Display (BBH_Bogle) ──────────────────────────────────────────────────────
  displayHero: {
    fontFamily: FontFamily.displayBold,
    fontSize: FontSize["7xl"],
    lineHeight: lh(FontSize["7xl"], LineHeightMultiplier.tight),
    letterSpacing: LetterSpacing.tightest,
    fontWeight: FontWeight.bold,
  } satisfies TextStyle,

  displayXl: {
    fontFamily: FontFamily.displayBold,
    fontSize: FontSize["6xl"],
    lineHeight: lh(FontSize["6xl"], LineHeightMultiplier.tight),
    letterSpacing: LetterSpacing.tighter,
    fontWeight: FontWeight.bold,
  } satisfies TextStyle,

  displayLg: {
    fontFamily: FontFamily.displaySemiBold,
    fontSize: FontSize["5xl"],
    lineHeight: lh(FontSize["5xl"], LineHeightMultiplier.tight),
    letterSpacing: LetterSpacing.tight,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  // ── Headings (BBH_Bogle) ─────────────────────────────────────────────────────
  h1Secondary: {
    fontFamily: FontFamily.secondaryFont,
    fontSize: FontSize["3xl"],
    lineHeight: lh(FontSize["3xl"], LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
    fontWeight: FontWeight.regular,
  } satisfies TextStyle,

  h2Secondary: {
    fontFamily: FontFamily.secondaryFont,
    fontSize: FontSize["2xl"],
    lineHeight: lh(FontSize["2xl"], LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
    fontWeight: FontWeight.regular,
  } satisfies TextStyle,

  h2: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.xl,
    lineHeight: lh(FontSize.xl, LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  h3: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.md,
    lineHeight: lh(FontSize.md, LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.tight,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  h4: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.sm,
    lineHeight: lh(FontSize.sm, LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  h5: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.xs,
    lineHeight: lh(FontSize.xs, LineHeightMultiplier.snug),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  // ── Body (DM Sans) ──────────────────────────────────────────────────────────
  bodyL: {
    fontFamily: FontFamily.primaryFontRegular,
    fontSize: FontSize.md,
    lineHeight: lh(FontSize.md, LineHeightMultiplier.relaxed),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.regular,
  } satisfies TextStyle,

  bodyM: {
    fontFamily: FontFamily.primaryFontRegular,
    fontSize: FontSize.sm,
    lineHeight: lh(FontSize.sm, LineHeightMultiplier.normal),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.regular,
  } satisfies TextStyle,

  bodyS: {
    fontFamily: FontFamily.primaryFontRegular,
    fontSize: FontSize.xs,
    lineHeight: lh(FontSize.xs, LineHeightMultiplier.normal),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.regular,
  } satisfies TextStyle,

  actionL: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.md,
    lineHeight: lh(FontSize.md, LineHeightMultiplier.normal),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  actionM: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.sm,
    lineHeight: lh(FontSize.sm, LineHeightMultiplier.normal),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

  actionS: {
    fontFamily: FontFamily.primaryFontSemibold,
    fontSize: FontSize.xs,
    lineHeight: lh(FontSize.xs, LineHeightMultiplier.normal),
    letterSpacing: LetterSpacing.normal,
    fontWeight: FontWeight.semiBold,
  } satisfies TextStyle,

}


export type TextStyleToken = keyof typeof TextStyles;

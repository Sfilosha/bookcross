/**
 * colors.ts
 * Design token palette for Expo app — light & dark themes.
 * Usage: import { Colors } from '@/constants/colors';
 */

export const palette = {
  //
  highlight: {
    darkest: '#145344',
    dark: '#3C7568',
    medium: '#67978B',
    light: '#7F9E96',
    lightest: '#EBEFEE',
  },

  black: {
    darkest: '#1F2024',
    dark: '#2F3036',
    medium: '#494A50',
    light: '#71727A',
    lightest: '#8F9098',
  },

  white: {
    darkest: '#C5C6CC',
    dark: '#D4D6DD',
    medium: '#E8E9F1',
    light: '#F8F9FE',
    lightest: '#FFFFFF',
  },

  error: {
    dark: '#5D0B00',
    medium: '#C53106',
    light: '#F1D3C8',
  },

  warning: {
    dark: '#E86339',
    medium: '#FFB37C',
    light: '#FFF4E4',
  },

  success: {
    dark: '#298267',
    medium: '#3AC0A0',
    light: '#E7F4E8',
  },
} as const;

export type ColorToken = keyof typeof palette;

// ─── Semantic token maps ──────────────────────────────────────────────────────

interface ThemeColors {
  // Backgrounds
  background: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  surface: string;
  surfaceRaised: string;
  overlay: string;

  // Foregrounds
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  textInverse: string;
  textOnAccent: string;

  // Brand / interactive
  primary: string;
  primaryHover: string;
  primaryActive: string;
  primarySubtle: string;

  // Status
  success: string;
  warning: string;
  error: string;
  info: string;

  // Borders & dividers
  border: string;
  borderStrong: string;
  divider: string;

  // Misc
  shadow: string;
  scrim: string;
  highlight: string;
}

export const light: ThemeColors = {
  background: palette.white.lightest,
  backgroundSecondary: palette.white.light,
  backgroundTertiary: palette.white.medium,
  surface: palette.white.light,
  surfaceRaised: palette.white.light,
  overlay: palette.white.light,

  textPrimary: palette.black.dark,
  textSecondary: palette.black.medium,
  textDisabled: palette.black.light,
  textInverse: palette.white.lightest,
  textOnAccent: palette.white.lightest,

  primary: palette.highlight.darkest,
  primaryHover: palette.highlight.darkest,
  primaryActive: palette.highlight.darkest,
  primarySubtle: palette.highlight.darkest,

  success: palette.success.dark,
  warning: palette.warning.dark,
  error: palette.error.dark,
  info: palette.white.dark,

  border: palette.white.light,
  borderStrong: palette.white.medium,
  divider: palette.white.dark,

  shadow: palette.black.dark,
  scrim: 'rgba(0,0,0,0.40)',
  highlight: palette.highlight.medium,
};

export const dark: ThemeColors = {
  background: palette.black.lightest,
  backgroundSecondary: palette.black.light,
  backgroundTertiary: palette.black.medium,
  surface: palette.black.light,
  surfaceRaised: palette.black.light,
  overlay: palette.black.light,

  textPrimary: palette.white.darkest,
  textSecondary: palette.white.medium,
  textDisabled: palette.white.light,
  textInverse: palette.black.lightest,
  textOnAccent: palette.black.lightest,

  primary: palette.highlight.darkest,
  primaryHover: palette.highlight.darkest,
  primaryActive: palette.highlight.darkest,
  primarySubtle: palette.highlight.darkest,

  success: palette.success.light,
  warning: palette.warning.light,
  error: palette.error.light,
  info: palette.white.light,

  border: palette.black.light,
  borderStrong: palette.black.medium,
  divider: palette.black.dark,

  shadow: palette.white.dark,
  scrim: 'rgba(0,0,0,0.65)',
  highlight: palette.highlight.medium,
};

// ─── Public API ───────────────────────────────────────────────────────────────

export const Colors = {
  light,
  dark,
  palette,
} as const;

export type { ThemeColors };

/**
 * Contract every variant in The Collective Style Guide Library implements.
 *
 * A Theme is a complete visual identity: tokens for two color modes and one
 * or two densities, fonts (with locale-aware fallbacks and a pluggable
 * provider), motion personality, and i18n/RTL stance. The ThemeProvider
 * consumes this and applies it.
 */

export type CarbonBaseTheme = "white" | "g10" | "g90" | "g100";
export type ColorMode = "light" | "dark";
export type Density = "comfortable" | "compact";

/**
 * Font-loading strategy. Library consumers can override the provider on a
 * per-app basis to use their own typography source — Adobe Fonts, Google
 * Fonts, self-hosted, or system fallbacks.
 */
export type FontProvider =
  | { type: "adobe"; kitId: string }
  | { type: "google"; families: string[]; display?: "auto" | "block" | "swap" | "fallback" | "optional" }
  | { type: "self-hosted"; cssUrl: string }
  | { type: "system" };

export interface ModeTokens {
  cssVariables: Record<string, string>;
  carbonBase: CarbonBaseTheme;
}

export interface DensityTokens {
  cssVariables: Record<string, string>;
}

export interface ThemeFonts {
  /**
   * The font-loading strategy. Defaults to Adobe Fonts when authored against
   * variant defaults but can be overridden by the consuming app.
   */
  provider: FontProvider;
  /** Primary font-family stacks. */
  family: {
    sans: string;
    serif?: string;
    mono?: string;
    display?: string;
  };
  /** Locale-aware fallback stacks, applied when document `lang` matches. */
  fallbacks?: Partial<Record<"cjk" | "arabic" | "cyrillic" | "devanagari", string>>;
}

export interface ThemeI18n {
  rtl: { supported: boolean; notes?: string };
  recommendedLocales: string[];
}

export interface ThemeMotion {
  character: string;
  honorReducedMotion: boolean;
}

export interface ThemeMeta {
  id: string;
  name: string;
  tagline: string;
  inspiration: string;
  version: string;
}

export interface Theme {
  meta: ThemeMeta;
  fonts: ThemeFonts;
  modes: { light: ModeTokens; dark: ModeTokens };
  densities: { comfortable: DensityTokens; compact?: DensityTokens };
  i18n: ThemeI18n;
  motion: ThemeMotion;
}

/**
 * Convenience helper for consumers who want to override a variant's font
 * provider without re-authoring the rest of the theme.
 *
 * @example
 *   const customTheme = withFontProvider(foundryTheme, {
 *     type: "google",
 *     families: ["Inter:wght@400..700", "JetBrains Mono"],
 *   });
 */
export function withFontProvider(theme: Theme, provider: FontProvider): Theme {
  return { ...theme, fonts: { ...theme.fonts, provider } };
}

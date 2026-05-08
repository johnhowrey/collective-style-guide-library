import { useEffect, type ReactNode } from "react";
import { Theme as CarbonTheme } from "@carbon/react";
import type { Theme, ColorMode, Density, FontProvider } from "./theme";
import { loadFontProvider } from "./fonts";

interface ThemeProviderProps {
  theme: Theme;
  mode?: ColorMode;
  density?: Density;
  /** Locale code (e.g. "en", "ar", "ja"). Drives font fallback selection. */
  lang?: string;
  /** When true, sets dir="rtl" on documentElement. */
  rtl?: boolean;
  /**
   * Override the variant's declared font provider — useful when a consuming
   * app uses Google Fonts or self-hosted fonts instead of Adobe Fonts.
   */
  fontProvider?: FontProvider;
  children: ReactNode;
}

/**
 * Applies a variant's theme:
 *  1. Loads the active font provider (Adobe / Google / self-hosted / system).
 *  2. Sets the Carbon base theme attribute that pairs with the mode.
 *  3. Layers the mode's + density's CSS custom properties onto :root.
 *  4. Sets data-variant / data-mode / data-density attributes.
 *  5. Sets dir/lang attributes for i18n.
 */
export function ThemeProvider({
  theme,
  mode = "light",
  density = "comfortable",
  lang,
  rtl = false,
  fontProvider,
  children,
}: ThemeProviderProps) {
  const modeTokens = theme.modes[mode];
  const densityTokens =
    density === "compact" && theme.densities.compact
      ? theme.densities.compact
      : theme.densities.comfortable;
  const provider = fontProvider ?? theme.fonts.provider;

  useEffect(() => {
    loadFontProvider(provider);

    const root = document.documentElement;
    root.dataset.variant = theme.meta.id;
    root.dataset.mode = mode;
    root.dataset.density = density;
    if (lang) root.lang = lang;
    if (rtl) root.dir = "rtl";

    const applied: string[] = [];
    const apply = (vars: Record<string, string>) => {
      for (const [key, value] of Object.entries(vars)) {
        root.style.setProperty(key, value);
        applied.push(key);
      }
    };
    apply(modeTokens.cssVariables);
    apply(densityTokens.cssVariables);

    return () => {
      for (const key of applied) root.style.removeProperty(key);
      delete root.dataset.variant;
      delete root.dataset.mode;
      delete root.dataset.density;
      if (rtl) root.removeAttribute("dir");
    };
  }, [theme, mode, density, lang, rtl, modeTokens, densityTokens, provider]);

  return <CarbonTheme theme={modeTokens.carbonBase}>{children}</CarbonTheme>;
}

import type { Theme } from "@collective/foundation";

const fontStack = {
  serif: "bembo-book, 'Adobe Garamond Pro', 'ITC New Baskerville', 'Hoefler Text', Georgia, serif",
  sans: "gill-sans-nova, 'Gill Sans', 'Helvetica Neue', helvetica, sans-serif",
  display: "gill-sans-nova, 'Gill Sans', 'Helvetica Neue', sans-serif",
  mono: "ibm-plex-mono, 'JetBrains Mono', monospace",
};

export const theme: Theme = {
  meta: {
    id: "marginalia",
    name: "Marginalia",
    tagline: "Bookish, literary, intimate. The page is a paperback.",
    inspiration: "Penguin Books",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "mru0igx" },
    family: fontStack,
    fallbacks: {
      cjk: "'Noto Serif JP', 'YuMincho', 'Hiragino Mincho ProN', serif",
      arabic: "'Adobe Arabic', 'Noto Naskh Arabic', serif",
      cyrillic: "'PT Serif', Georgia, serif",
    },
  },
  modes: {
    light: {
      carbonBase: "white",
      cssVariables: {
        "--cds-background": "#F4ECD8",
        "--cds-layer": "#F8F1DF",
        "--cds-layer-accent": "#EAE0C7",
        "--cds-text-primary": "#1A1612",
        "--cds-text-secondary": "#5A4F45",
        "--cds-border-subtle": "#C9BFA8",
        "--cds-border-strong": "#1A1612",
        "--cds-link-primary": "#E96528",
        "--cds-focus": "#E96528",
        "--cds-interactive": "#1A1612",
        "--collective-accent-primary": "#E96528",
        "--collective-radius-sm": "0",
        "--collective-radius-md": "0",
        "--collective-radius-lg": "0",
        "--collective-font-serif": fontStack.serif,
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
        "--collective-body-family": "var(--collective-font-serif)",
      },
    },
    dark: {
      carbonBase: "g100",
      cssVariables: {
        "--cds-background": "#1A1612",
        "--cds-layer": "#26201A",
        "--cds-layer-accent": "#332B22",
        "--cds-text-primary": "#F4ECD8",
        "--cds-text-secondary": "#B8AC93",
        "--cds-border-subtle": "#3D352B",
        "--cds-border-strong": "#F4ECD8",
        "--cds-link-primary": "#FF8854",
        "--cds-focus": "#FF8854",
        "--cds-interactive": "#F4ECD8",
        "--collective-accent-primary": "#FF8854",
        "--collective-radius-sm": "0",
        "--collective-radius-md": "0",
        "--collective-radius-lg": "0",
        "--collective-font-serif": fontStack.serif,
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
        "--collective-body-family": "var(--collective-font-serif)",
      },
    },
  },
  densities: {
    comfortable: { cssVariables: { "--collective-spacing-step": "8px", "--collective-control-height": "40px" } },
    compact: { cssVariables: { "--collective-spacing-step": "6px", "--collective-control-height": "34px" } },
  },
  i18n: {
    rtl: {
      supported: true,
      notes: "Bookish typography pairs naturally with Naskh Arabic and Mincho CJK serifs. Maintain serif body even in non-Latin scripts where possible.",
    },
    recommendedLocales: ["en", "fr", "es", "it", "de", "ja", "zh", "ar"],
  },
  motion: {
    character: "Page-turn rhythm. Longer durations, ease-in-out curves. Motion as paginal continuity, not signal.",
    honorReducedMotion: true,
  },
};

import type { Theme } from "@collective/foundation";

const fontStack = {
  sans: "trade-gothic-next-lt-pro, 'Trade Gothic Next', 'Helvetica Neue', helvetica, sans-serif",
  display: "trade-gothic-next-condensed, 'Trade Gothic Next Condensed', 'Helvetica Neue Condensed', sans-serif",
  mono: "ibm-plex-mono, 'JetBrains Mono', monospace",
};

export const theme: Theme = {
  meta: {
    id: "proscenium",
    name: "Proscenium",
    tagline: "Theatrical, bold, layered. Loud on purpose.",
    inspiration: "The Public Theater",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "mru0igx" },
    family: fontStack,
    fallbacks: {
      cjk: "'Noto Sans JP Black', 'Noto Sans SC Black', sans-serif",
      arabic: "'Noto Sans Arabic', sans-serif",
      cyrillic: "'Inter', system-ui, sans-serif",
    },
  },
  modes: {
    light: {
      carbonBase: "white",
      cssVariables: {
        "--cds-background": "#FAF8F0",
        "--cds-layer": "#FFFFFF",
        "--cds-layer-accent": "#F0EBDD",
        "--cds-text-primary": "#0A0A0A",
        "--cds-text-secondary": "#3A3A3A",
        "--cds-border-subtle": "#0A0A0A",
        "--cds-border-strong": "#0A0A0A",
        "--cds-link-primary": "#FF1F8F",
        "--cds-focus": "#FF1F8F",
        "--cds-interactive": "#0A0A0A",
        "--collective-accent-primary": "#FF1F8F",
        "--collective-accent-secondary": "#FFD400",
        "--collective-accent-on-primary": "#FFFFFF",
        "--collective-radius-sm": "0",
        "--collective-radius-md": "0",
        "--collective-radius-lg": "0",
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
      },
    },
    dark: {
      carbonBase: "g100",
      cssVariables: {
        "--cds-background": "#0A0A0A",
        "--cds-layer": "#1A1A1A",
        "--cds-layer-accent": "#262626",
        "--cds-text-primary": "#FAFAFA",
        "--cds-text-secondary": "#A0A0A0",
        "--cds-border-subtle": "#FAFAFA",
        "--cds-border-strong": "#FFFFFF",
        "--cds-link-primary": "#FF3A9F",
        "--cds-focus": "#FF3A9F",
        "--cds-interactive": "#FAFAFA",
        "--collective-accent-primary": "#FF3A9F",
        "--collective-accent-secondary": "#FFE500",
        "--collective-accent-on-primary": "#0A0A0A",
        "--collective-radius-sm": "0",
        "--collective-radius-md": "0",
        "--collective-radius-lg": "0",
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
      },
    },
  },
  densities: {
    comfortable: { cssVariables: { "--collective-spacing-step": "8px", "--collective-control-height": "44px" } },
    compact: { cssVariables: { "--collective-spacing-step": "6px", "--collective-control-height": "36px" } },
  },
  i18n: {
    rtl: {
      supported: true,
      notes: "Knockout-style condensed display only ships with Latin coverage. For Arabic and CJK, swap to a heavy condensed locale-specific face. Theatrical impact relies on weight; weight must be preserved.",
    },
    recommendedLocales: ["en", "es", "fr", "de"],
  },
  motion: {
    character: "Staged and choreographed. Longer durations, dramatic ease curves, sequential reveals. Motion as performance.",
    honorReducedMotion: true,
  },
};

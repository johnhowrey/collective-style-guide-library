import type { Theme } from "@collective/foundation";

const fontStack = {
  sans: "neue-frutiger-world, 'Frutiger LT W01', 'source-sans-3-variable', 'Helvetica Neue', sans-serif",
  display: "neue-frutiger-world, 'Frutiger LT W01 Bold', 'source-sans-3-variable', sans-serif",
  mono: "ibm-plex-mono, 'JetBrains Mono', monospace",
};

export const theme: Theme = {
  meta: {
    id: "beacon",
    name: "Beacon",
    tagline: "Wayfinding clarity. Signage yellow. Hierarchy as design.",
    inspiration: "Schiphol wayfinding",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "mru0igx" },
    family: fontStack,
    fallbacks: {
      cjk: "'Noto Sans JP', 'Hiragino Sans', sans-serif",
      arabic: "'Frutiger Arabic', 'Noto Sans Arabic', sans-serif",
      cyrillic: "'Inter', system-ui, sans-serif",
    },
  },
  modes: {
    light: {
      carbonBase: "white",
      cssVariables: {
        "--cds-background": "#FFFFFF",
        "--cds-layer": "#FFFFFF",
        "--cds-layer-accent": "#F5F5F5",
        "--cds-text-primary": "#1B1B1B",
        "--cds-text-secondary": "#5A5A5A",
        "--cds-border-subtle": "#1B1B1B",
        "--cds-border-strong": "#000000",
        "--cds-link-primary": "#1B1B1B",
        "--cds-focus": "#FFCC00",
        "--cds-interactive": "#1B1B1B",
        "--collective-accent-primary": "#FFCC00",
        "--collective-accent-on-primary": "#000000",
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
        "--cds-background": "#000000",
        "--cds-layer": "#0F0F0F",
        "--cds-layer-accent": "#1B1B1B",
        "--cds-text-primary": "#FFFFFF",
        "--cds-text-secondary": "#A8A8A8",
        "--cds-border-subtle": "#FFFFFF",
        "--cds-border-strong": "#FFFFFF",
        "--cds-link-primary": "#FFFFFF",
        "--cds-focus": "#FFCC00",
        "--cds-interactive": "#FFFFFF",
        "--collective-accent-primary": "#FFCC00",
        "--collective-accent-on-primary": "#000000",
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
      notes: "Wayfinding works in any direction. Frutiger pairs well with Frutiger Arabic. Mirror directional arrows; numerals and time indicators use locale-appropriate forms.",
    },
    recommendedLocales: ["en", "nl", "de", "fr", "es", "ja", "zh", "ar"],
  },
  motion: {
    character: "Signal motion only. Instant or near-instant. Animate only what changes state — never decoration.",
    honorReducedMotion: true,
  },
};

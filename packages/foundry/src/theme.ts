import type { Theme } from "@collective/foundation";

const fontStack = {
  sans: "futura-pt, futura, 'Helvetica Neue', helvetica, arial, sans-serif",
  display: "futura-pt, futura, 'Helvetica Neue', sans-serif",
  mono: "iosevka, 'JetBrains Mono', 'SF Mono', monospace",
};

export const theme: Theme = {
  meta: {
    id: "foundry",
    name: "Foundry",
    tagline: "Geometric sans, primary palette, sharp corners, grid-forward.",
    inspiration: "Neo Bauhaus",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "mru0igx" },
    family: fontStack,
    fallbacks: {
      cjk: "'Noto Sans JP', 'Noto Sans SC', 'Hiragino Sans', sans-serif",
      arabic: "'Noto Sans Arabic', 'Geeza Pro', sans-serif",
      cyrillic: "'Inter', system-ui, sans-serif",
    },
  },
  modes: {
    light: {
      carbonBase: "white",
      cssVariables: {
        "--cds-background": "#FAFAFA",
        "--cds-layer": "#FFFFFF",
        "--cds-layer-accent": "#F0F0F0",
        "--cds-text-primary": "#0A0A0A",
        "--cds-text-secondary": "#4A4A4A",
        "--cds-border-subtle": "#1A1A1A",
        "--cds-border-strong": "#0A0A0A",
        "--cds-link-primary": "#1A4FAD",
        "--cds-focus": "#ED1C24",
        "--cds-interactive": "#0A0A0A",
        "--collective-accent-primary": "#ED1C24",
        "--collective-accent-secondary": "#FCD300",
        "--collective-accent-tertiary": "#1A4FAD",
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
        "--cds-link-primary": "#4D7DD9",
        "--cds-focus": "#FF2A33",
        "--cds-interactive": "#FAFAFA",
        "--collective-accent-primary": "#FF2A33",
        "--collective-accent-secondary": "#FFE500",
        "--collective-accent-tertiary": "#4D7DD9",
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
    comfortable: {
      cssVariables: {
        "--collective-spacing-step": "8px",
        "--collective-control-height": "40px",
      },
    },
    compact: {
      cssVariables: {
        "--collective-spacing-step": "6px",
        "--collective-control-height": "32px",
      },
    },
  },
  i18n: {
    rtl: {
      supported: true,
      notes:
        "Foundry's geometric sans + primary blocks translate well to RTL. Mirror directional icons (chevrons, arrows). Display weight should drop one step in Arabic to compensate for denser glyph forms.",
    },
    recommendedLocales: ["en", "de", "fr", "es", "ja", "ar"],
  },
  motion: {
    character:
      "Snappy and structural. Linear or near-linear easing. No bounces, no decorative motion. Movement signals state change, never decoration.",
    honorReducedMotion: true,
  },
};

import type { Theme } from "@collective/foundation";

const fontStack = {
  sans: "neue-haas-grotesk-text, 'Helvetica Neue', helvetica, arial, sans-serif",
  display: "neue-haas-grotesk-display, 'Helvetica Neue', sans-serif",
  mono: "ibm-plex-mono, 'JetBrains Mono', monospace",
};

export const theme: Theme = {
  meta: {
    id: "vellum",
    name: "Vellum",
    tagline: "Swiss grid, restrained palette, paper-cool clarity.",
    inspiration: "International Style",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "scl4zaa" },
    family: fontStack,
    fallbacks: {
      cjk: "'Noto Sans JP', 'Hiragino Sans', sans-serif",
      arabic: "'Noto Sans Arabic', sans-serif",
      cyrillic: "'Inter', system-ui, sans-serif",
    },
  },
  modes: {
    light: {
      carbonBase: "white",
      cssVariables: {
        "--cds-background": "#F8F7F4",
        "--cds-layer": "#FFFFFF",
        "--cds-layer-accent": "#ECEAE5",
        "--cds-text-primary": "#1A1A1A",
        "--cds-text-secondary": "#6B6B6B",
        "--cds-border-subtle": "#D6D3CC",
        "--cds-border-strong": "#1A1A1A",
        "--cds-link-primary": "#B8442C",
        "--cds-focus": "#B8442C",
        "--cds-interactive": "#1A1A1A",
        "--collective-accent-primary": "#B8442C",
        "--collective-radius-sm": "2px",
        "--collective-radius-md": "2px",
        "--collective-radius-lg": "2px",
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
      },
    },
    dark: {
      carbonBase: "g100",
      cssVariables: {
        "--cds-background": "#1A1817",
        "--cds-layer": "#26221F",
        "--cds-layer-accent": "#33302C",
        "--cds-text-primary": "#F8F7F4",
        "--cds-text-secondary": "#B5B0A8",
        "--cds-border-subtle": "#3D3934",
        "--cds-border-strong": "#F8F7F4",
        "--cds-link-primary": "#E07A5F",
        "--cds-focus": "#E07A5F",
        "--cds-interactive": "#F8F7F4",
        "--collective-accent-primary": "#E07A5F",
        "--collective-radius-sm": "2px",
        "--collective-radius-md": "2px",
        "--collective-radius-lg": "2px",
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
      },
    },
  },
  densities: {
    comfortable: { cssVariables: { "--collective-spacing-step": "10px", "--collective-control-height": "44px" } },
    compact: { cssVariables: { "--collective-spacing-step": "8px", "--collective-control-height": "36px" } },
  },
  i18n: {
    rtl: {
      supported: true,
      notes: "Vellum's grid translates cleanly. Helvetica-lineage Latin pairs with Arabic Frutiger / Noto Arabic for visual sympathy.",
    },
    recommendedLocales: ["en", "de", "fr", "es", "it", "ja", "ar"],
  },
  motion: {
    character: "Calm and measured. Gentle ease-out curves. Motion as breath, not signal. Nothing rushes.",
    honorReducedMotion: true,
  },
};

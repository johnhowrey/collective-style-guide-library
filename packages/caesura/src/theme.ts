import type { Theme } from "@collective/foundation";

const fontStack = {
  serif: "minion-3, 'Adobe Caslon Pro', 'Garamond Premier Pro', 'Hoefler Text', Georgia, serif",
  sans: "myriad-pro, 'Source Sans 3', 'Helvetica Neue', helvetica, sans-serif",
  display: "minion-3, 'Adobe Caslon Pro', serif",
  mono: "ibm-plex-mono, 'JetBrains Mono', monospace",
};

export const theme: Theme = {
  meta: {
    id: "caesura",
    name: "Caesura",
    tagline: "Classical book typography. Careful spacing. The pause before the line resumes.",
    inspiration: "Bringhurst — Elements of Typographic Style",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "mru0igx" },
    family: fontStack,
    fallbacks: {
      cjk: "'Noto Serif JP', 'YuMincho', 'Hiragino Mincho ProN', serif",
      arabic: "'Adobe Naskh', 'Noto Naskh Arabic', serif",
      cyrillic: "'PT Serif', Georgia, serif",
    },
  },
  modes: {
    light: {
      carbonBase: "white",
      cssVariables: {
        "--cds-background": "#FBF8F2",
        "--cds-layer": "#FFFFFF",
        "--cds-layer-accent": "#EFEAE0",
        "--cds-text-primary": "#1A1817",
        "--cds-text-secondary": "#5C544C",
        "--cds-border-subtle": "#C9C0B0",
        "--cds-border-strong": "#1A1817",
        "--cds-link-primary": "#6B1F1F",
        "--cds-focus": "#6B1F1F",
        "--cds-interactive": "#1A1817",
        "--collective-accent-primary": "#6B1F1F",
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
        "--cds-background": "#1A1817",
        "--cds-layer": "#26221F",
        "--cds-layer-accent": "#33302C",
        "--cds-text-primary": "#FBF8F2",
        "--cds-text-secondary": "#B5AC9F",
        "--cds-border-subtle": "#3D3934",
        "--cds-border-strong": "#FBF8F2",
        "--cds-link-primary": "#B85050",
        "--cds-focus": "#B85050",
        "--cds-interactive": "#FBF8F2",
        "--collective-accent-primary": "#B85050",
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
    comfortable: { cssVariables: { "--collective-spacing-step": "10px", "--collective-control-height": "44px" } },
    compact: { cssVariables: { "--collective-spacing-step": "8px", "--collective-control-height": "36px" } },
  },
  i18n: {
    rtl: {
      supported: true,
      notes: "Caesura prizes typographic craft. Maintain serif body in non-Latin scripts where possible — Naskh Arabic and Mincho CJK pair well. Hanging punctuation and optical alignment require care in localized contexts.",
    },
    recommendedLocales: ["en", "fr", "es", "it", "de", "ja", "ar"],
  },
  motion: {
    character: "Contemplative. Slow ease curves. Motion reserved for the few moments that warrant it. Mostly, things appear and disappear without ceremony.",
    honorReducedMotion: true,
  },
};

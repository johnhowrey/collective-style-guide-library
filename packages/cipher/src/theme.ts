import type { Theme } from "@collective/foundation";

const fontStack = {
  sans: "inter, 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  display: "inter-display, 'Inter Display', 'Inter', system-ui, sans-serif",
  mono: "jetbrains-mono, 'JetBrains Mono', 'Fira Code', 'SF Mono', Menlo, monospace",
};

export const theme: Theme = {
  meta: {
    id: "cipher",
    name: "Cipher",
    tagline: "Terse, technical, dark-first. The terminal as design language.",
    inspiration: "Engineering tooling",
    version: "0.0.0",
  },
  fonts: {
    provider: { type: "adobe", kitId: "mru0igx" },
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
        "--cds-background": "#FAFAFA",
        "--cds-layer": "#FFFFFF",
        "--cds-layer-accent": "#F0F0F0",
        "--cds-text-primary": "#1F2328",
        "--cds-text-secondary": "#656D76",
        "--cds-border-subtle": "#D1D9E0",
        "--cds-border-strong": "#1F2328",
        "--cds-link-primary": "#0969DA",
        "--cds-focus": "#0969DA",
        "--cds-interactive": "#1F2328",
        "--collective-accent-primary": "#0969DA",
        "--collective-accent-success": "#1A7F37",
        "--collective-accent-warning": "#9A6700",
        "--collective-accent-danger": "#CF222E",
        "--collective-radius-sm": "4px",
        "--collective-radius-md": "6px",
        "--collective-radius-lg": "8px",
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
      },
    },
    dark: {
      carbonBase: "g100",
      cssVariables: {
        "--cds-background": "#0D1117",
        "--cds-layer": "#161B22",
        "--cds-layer-accent": "#21262D",
        "--cds-text-primary": "#E6EDF3",
        "--cds-text-secondary": "#7D8590",
        "--cds-border-subtle": "#30363D",
        "--cds-border-strong": "#E6EDF3",
        "--cds-link-primary": "#2F81F7",
        "--cds-focus": "#2F81F7",
        "--cds-interactive": "#E6EDF3",
        "--collective-accent-primary": "#2F81F7",
        "--collective-accent-success": "#3FB950",
        "--collective-accent-warning": "#D29922",
        "--collective-accent-danger": "#F85149",
        "--collective-radius-sm": "4px",
        "--collective-radius-md": "6px",
        "--collective-radius-lg": "8px",
        "--collective-font-sans": fontStack.sans,
        "--collective-font-display": fontStack.display,
        "--collective-font-mono": fontStack.mono,
      },
    },
  },
  densities: {
    comfortable: { cssVariables: { "--collective-spacing-step": "6px", "--collective-control-height": "32px" } },
    compact: { cssVariables: { "--collective-spacing-step": "4px", "--collective-control-height": "26px" } },
  },
  i18n: {
    rtl: {
      supported: true,
      notes: "Code blocks and terminals stay LTR regardless of document direction. Inter has wide locale coverage; JetBrains Mono is Latin/Cyrillic-only — code in non-Latin scripts falls back to system mono.",
    },
    recommendedLocales: ["en", "de", "fr", "es", "ja", "zh", "ru"],
  },
  motion: {
    character: "Instant or near-instant. Engineers measure latency; motion never adds it. Hover states change color/border without transition.",
    honorReducedMotion: true,
  },
};

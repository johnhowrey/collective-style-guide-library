# The Collective Style Guide Library

> Enterprise- and SaaS-ready visual identities. Seven variants on one accessible foundation.

[![Showcase](https://img.shields.io/badge/showcase-live-22c55e)](https://collective-style-guide-library.vercel.app)
[![License](https://img.shields.io/badge/license-Apache_2.0-blue)](LICENSE)
[![GitHub](https://img.shields.io/badge/github-johnhowrey/collective--style--guide--library-181717)](https://github.com/johnhowrey/collective-style-guide-library)

Each variant is a complete design system — typography, color, motion, density, voice — sitting on IBM Carbon's accessible component foundation. Pick one, plug it in, ship a product that doesn't look like everyone else's.

- **Showcase**: <https://collective-style-guide-library.vercel.app>
- **Agent index**: <https://collective-style-guide-library.vercel.app/llms.txt>
- **Repo**: <https://github.com/johnhowrey/collective-style-guide-library>

## The variants

| Name | Inspiration | Mood |
|---|---|---|
| **Foundry** | Neo Bauhaus | Geometric, primary, type-forward |
| **Vellum** | International Style | Swiss grid, restrained, paper-cool |
| **Beacon** | Schiphol wayfinding | Signal, clarity, hierarchy-as-design |
| **Marginalia** | Penguin Books | Bookish, literary, intimate |
| **Proscenium** | The Public Theater | Theatrical, bold, performative |
| **Caesura** | Bringhurst's *Elements* | Typographic rhythm, classical book |
| **Cipher** | Engineering tooling | Monospace-leaning, terse, dense |

## What ships in every variant

- **Tokens** in DTCG format (`packages/<variant>/llm/tokens.json`) — the source of truth for runtime CSS variables and any Figma export
- **Two color modes** (light + dark) and **two densities** (comfortable + compact)
- **Per-token a11y metadata** — color tokens declare WCAG contrast pairs they're tested against
- **Pluggable font provider** — Adobe Fonts, Google Fonts, self-hosted, or system. Override per-app.
- **i18n / RTL stance** — recommended locales, font fallback chains for CJK / Arabic / Cyrillic
- **Voice & content guide** — microcopy patterns, button labels, error tone, empty states
- **Motion principles** — duration, easing, what animates and what doesn't, reduced-motion behavior
- **LLM-ready artifacts** — tokens.json, principles.md, content.md, motion.md, i18n.md, starter-prompt.md, components.json, llms.txt
- **Per-variant CHANGELOG**

## Repo layout

```
.
├── apps/
│   └── showcase/          # Next.js showcase site (Vercel)
├── packages/
│   ├── foundation/        # Shared plumbing — Theme contract, ThemeProvider, font loader
│   ├── foundry/           # Variant: Neo Bauhaus
│   ├── vellum/            # Variant: International Style
│   ├── beacon/            # Variant: Schiphol wayfinding
│   ├── marginalia/        # Variant: Penguin Books
│   ├── proscenium/        # Variant: The Public Theater
│   ├── caesura/           # Variant: Bringhurst
│   ├── cipher/            # Variant: Engineering tooling
│   └── mcp/               # MCP server (stdio + HTTP)
├── figma/                 # Figma Code Connect mappings (deferred — populates as components ship)
├── .github/workflows/     # CI: typecheck, build, token-JSON validation
├── llms.txt               # Repo-level agent index
├── LICENSE / NOTICE       # Apache 2.0
└── CONTRIBUTING.md        # Variant proposal template
```

## Getting started

```bash
git clone https://github.com/johnhowrey/collective-style-guide-library
cd collective-style-guide-library
corepack enable             # if pnpm isn't installed
pnpm install
pnpm showcase               # http://localhost:3000
```

## Using a variant in your own product

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/foundry";

<ThemeProvider theme={theme} mode="light" density="comfortable">
  <YourApp />
</ThemeProvider>
```

Carbon components inside the provider pick up the variant's tokens automatically. See [Getting started → Install](https://collective-style-guide-library.vercel.app/getting-started/install).

## Design-to-code (AI)

Every variant is built to be pointed at by Claude, Cursor, or Figma:

- Per-variant artifacts at `/api/llm/[variant]/[doc]` (tokens, principles, content, motion, i18n, starter-prompt)
- Repo-level [`llms.txt`](https://collective-style-guide-library.vercel.app/llms.txt) for agent discovery
- MCP server (`@collective/mcp`) — local stdio + remote HTTP transports with tools `list_variants`, `get_tokens`, `get_principles`, `search`, etc.
- Figma Code Connect scaffolding at `figma/code-connect/` (mappings populate as variant components ship)

See the [AI section](https://collective-style-guide-library.vercel.app/ai) of the showcase.

## Status

- **Done**: foundation contract, seven variants with full LLM-readable docs, showcase Next.js site (variants × subpages × templates × AI guides × support), MCP server, root LLM index, Apache 2.0 + NOTICE, GitHub repo + Vercel deploy, CI workflow.
- **Deferred (next)**: DTCG-to-SCSS token build pipeline, Storybook secondary app for component-isolation work, Figma Code Connect mapping content (scaffolded; fills in as variant components mature), per-variant Adobe Fonts kits (currently all share one placeholder).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — includes the variant-proposal template.

## License

Apache 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).

Built on [IBM Carbon Design System](https://carbondesignsystem.com).

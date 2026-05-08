# The Collective Style Guide Library

A library of opinionated, enterprise- and SaaS-ready style guides. Each one is a complete visual identity — typography, color, motion, density, character — sitting on a shared accessible foundation.

The foundation is IBM Carbon's component architecture and design tokens. The personality is whatever the variant decides. You get Carbon's WCAG AA compliance, RTL support, motion system, and component coverage; you don't get Carbon's blue.

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

More variants will join over time.

## Repo layout

```
.
├── apps/
│   └── showcase/          # Storybook hosting all variants with a switcher
├── packages/
│   ├── foundation/        # Shared plumbing (internal, not user-facing)
│   ├── foundry/
│   ├── vellum/
│   ├── beacon/
│   ├── marginalia/
│   ├── proscenium/
│   ├── caesura/
│   └── cipher/
└── figma/                 # Matching Figma library references (TBD)
```

## Getting started

```bash
pnpm install
pnpm showcase
```

The showcase opens at `http://localhost:6006` with a variant switcher in the toolbar.

## Working on a variant

Each variant lives in `packages/<name>/`. The design direction is captured in its README; the visual decisions live in `src/tokens/`. See [packages/foundry/README.md](./packages/foundry/README.md) for the template.

## Adding a new variant

1. Copy `packages/foundry/` to `packages/<new-name>/`
2. Update the package's `name`, `README.md` design brief, and `src/tokens/`
3. Register it in `apps/showcase/.storybook/preview.tsx` (variants array)
4. Add it to the table above

## Built on

[IBM Carbon Design System](https://carbondesignsystem.com) — Apache 2.0. Carbon provides the accessible component foundation; this library provides the visual variants.

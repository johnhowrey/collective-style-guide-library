# Foundry

> Geometric sans, primary palette, sharp corners, grid-forward.

A Neo Bauhaus visual identity for enterprise and SaaS interfaces. Foundry treats the screen like a constructivist poster: primary color blocks, geometric type, square corners, structural use of whitespace. It feels purposeful and a little severe — the right register for serious tools that don't want to be cute.

## Design direction

| Aspect | Direction |
|---|---|
| **Mood** | Industrial, type-forward, primary, structural |
| **Typography** | Geometric sans (Futura-lineage). Display weight runs heavy. |
| **Color** | Primary RYB — true red, yellow, blue — on near-white paper |
| **Corners** | Sharp (0 radius everywhere) |
| **Density** | Medium-tight; structural whitespace, not airy |
| **Voice** | Direct, declarative, no hedging |

## Adobe Fonts (placeholder)

Recommended Typekit families: **Futura PT**, **Brown**, **Neue Haas Grotesk Display**.
Currently using system geometric-sans fallbacks. Set the `typekitId` in `src/theme.ts` to activate.

## Files of interest

- `src/theme.ts` — the runtime `Theme` object the showcase consumes
- `llm/tokens.json` — DTCG-format tokens (source of truth for agents and Figma)
- `llm/principles.md` — voice and do/don't, written for both designers and LLMs
- `llm/llms.txt` — concise machine-readable summary

## Built on

[IBM Carbon Design System](https://carbondesignsystem.com) — Apache 2.0. Foundry uses Carbon's component foundation and overrides its tokens.

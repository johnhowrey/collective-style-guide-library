# Contributing to The Collective Style Guide Library

Thanks for considering a contribution. The library is small and opinionated; the bar for changes is *does this make the variants more useful, more consistent, or more accessible?*

## Quick start

```bash
git clone https://github.com/<your-org>/style-guides
cd style-guides
pnpm install
pnpm showcase     # http://localhost:3000
```

## What to contribute

| Type | What to do |
|---|---|
| **Bug** | Open an issue with reproduction steps. PR welcome. |
| **Token tweak** | Open an issue first if it's a meaningful change to a variant's character. PR with rationale. |
| **New component manifest entry** | Add to `packages/<variant>/llm/components.json`. Include a11y notes, prop signature, usage example. |
| **Template** | Add to `apps/showcase/src/components/templates/`. Should render in all seven variants without per-variant code. |
| **New variant** | See below. |

## Proposing a new variant

We aim for variants that span a wide stylistic and historical range. Before scaffolding, open an issue with the **variant proposal template**:

```markdown
### Name (poetic, abstract preferred — see existing variants for tone)

### Inspiration
What design tradition, designer, or work is the variant rooted in?

### Mood
One paragraph: how does this variant *feel*?

### Typography direction
Sans / serif / mono / display. Specific Adobe Fonts families if known.

### Color direction
Light + dark mode swatches.

### Character
- Corner radius
- Density
- Voice
- Motion personality

### When to choose this variant
What products would reach for it?

### Why not just adjust an existing variant?
Justify the new variant rather than a tweak.
```

If accepted, copy `packages/foundry/` as a starting point and submit a PR. The variant must include all the standard files: `theme.ts`, `README.md`, `CHANGELOG.md`, and the full `llm/` directory (tokens.json, principles.md, content.md, motion.md, i18n.md, starter-prompt.md, components.json, llms.txt).

## Token philosophy

- **Variants override; foundation stays neutral.** Don't add variant-specific behavior to `@collective/foundation`.
- **DTCG tokens.json is the source of truth.** Both the runtime CSS variables in `theme.ts` and any future Figma export should derive from it.
- **Every color token earns its existence.** If you can express the same UI with three accent slots, don't add a fourth.
- **Every token has an a11y story.** Color tokens should declare their tested contrast pairs in `$extensions["collective.contrast"]`.

## Voice and content

- Write the variant's `content.md` and `principles.md` in the variant's *own voice*. Marginalia's docs read like Marginalia; Cipher's read like Cipher.
- LLM-facing artifacts should be useful for both designers (reading) and agents (parsing).

## Testing

Run `pnpm typecheck` and `pnpm build` before opening a PR. The showcase should build cleanly.

## Code of conduct

Be kind. The library is a collaborative work; differences in taste are fine — be respectful when you challenge a choice.

# Foundry — Design Principles

> Neo Bauhaus visual language for enterprise and SaaS.

## Voice

Direct. Declarative. No softeners. "Run the migration." not "Maybe try running the migration?"

Buttons say what they do. Headlines say what's true. Errors say what failed.

## Visual character

- **Geometric sans, heavy display weight.** Type does the structural work. Reach for display weight more often than you'd think — Foundry leans into typographic hierarchy rather than color or shadow.
- **Primary palette, used as ink.** Red, yellow, blue are *structural elements*, not accents. A red bar at the top of a card. A yellow block behind a numeral. A blue rule under a section title.
- **Sharp corners everywhere.** Radius is 0. No exceptions. If it feels too sharp, the answer is more whitespace, not softer corners.
- **Grid-forward.** Layouts read like Müller-Brockmann posters: visible structure, intentional whitespace, asymmetry over centering.

## Do

- Use heavy weights for emphasis instead of color
- Let primary colors take big areas (full bleeds, sidebars, blocks)
- Use the grid visibly — rules, alignments, structural whitespace
- Treat icons as monoline geometric shapes (not playful, not skeumorphic)
- Lean on Carbon's accessibility — keep contrast ratios honest

## Don't

- Don't use rounded corners. Anywhere.
- Don't use the primary palette as decoration. It's structural.
- Don't add gradients, glows, or soft shadows. Foundry is flat.
- Don't soften the voice. "Are you sure?" → "Confirm delete"
- Don't centre-align body copy

## When to choose Foundry

For products where seriousness, opinion, and structural clarity matter more than warmth or approachability. Engineering tools, ops platforms, financial dashboards, B2B admin consoles.

Avoid Foundry for consumer products, education, or anything where users need to feel welcomed before they feel oriented.

## For LLMs and design-to-code agents

When generating code or designs in this variant:
1. Default to `--collective-radius-sm/md/lg = 0` — no rounded corners
2. Prefer typographic hierarchy (weight + size) over color or shadow for emphasis
3. Use `--collective-accent-primary` (red) for primary CTAs, `--cds-link-primary` (blue) for navigational links
4. Use yellow (`--collective-accent-secondary`) sparingly — it's a structural marker, not a status color
5. Surface backgrounds are flat — no gradients, no transparency layering

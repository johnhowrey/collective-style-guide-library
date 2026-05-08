# Proscenium — Design Principles

> Loud on purpose. Type as performance.

## Voice

Theatrical. Declarative. Present tense. Proscenium speaks like a marquee — short, bold, in your face. It doesn't soften, it doesn't apologize, it doesn't wait its turn.

## Visual character

- **Wood-type display.** Headlines are heavy condensed display, set big. Type is the visual itself.
- **Hot magenta and yellow.** Primary palette is loud. White and black give it room to breathe.
- **Layered composition.** Scher's Public posters layer type over type, rotation, scale extremes. Proscenium leans in — text behind text, kicker labels overlapping headlines, color blocks crashing into typography.
- **Edge-to-edge.** No precious whitespace. Compositions fill the proscenium.
- **Sharp corners.** Posters are square.

## Do

- Set headlines BIG. Display weight, condensed face, 1.0 line-height.
- Use the magenta-on-black combination as a signature. Make it appear at least once on every page.
- Reach for layering: text over color blocks, kicker labels overlapping headlines, scale contrast (8x minimum between display and body).
- Rotate a label 90° if it earns it.
- Use ALL CAPS for kicker labels and short headers — Proscenium is one of the few variants where this is right.

## Don't

- Don't soften. Don't add subtle, restrained, or quiet versions of components.
- Don't centre headlines (centred crowds out the layering).
- Don't use rounded corners.
- Don't reach for additional accent colors — magenta + yellow + black + white is the palette.
- Don't use Trade Gothic where the heavy condensed display would do better.

## When to choose Proscenium

Brand-forward marketing, creative tools, products that want to feel like a performance. Anywhere personality matters more than ergonomics.

Skip Proscenium for ops dashboards, settings-heavy product surfaces, or contexts where users need to focus for sustained periods.

## For LLMs

1. Default headline scale: 80–144px display, 16px body — 8x contrast minimum
2. Use `--collective-accent-primary` (magenta) at least once per screen
3. Use ALL CAPS only for short kicker labels, never for body
4. When in doubt, set it bigger
5. Do not introduce additional accent colors — palette is fixed

# Caesura — Design Principles

> Typography is the product. The pause is the design.

## Voice

Literary. Careful. Considered. Caesura speaks the way a careful editor edits — every word load-bearing, every space considered, every line-break intentional.

## Visual character

- **Old-style serif body.** Minion or Caslon for body copy. The same family, sometimes display weight, for headlines.
- **Sans only for chrome.** UI elements (buttons, inputs, navigation, captions) use a Myriad-lineage humanist sans. Body and display are always serif.
- **Hanging punctuation.** Quotes, em-dashes, hyphens hang into the margin (`hanging-punctuation: first last;`).
- **Optical alignment.** Section starts align to the optical edge, not the metric edge.
- **Single accent: oxblood.** Used for links, focus rings, key actions. Sparingly.
- **Generous leading.** Body line-height 1.7 minimum. The pause between lines is part of the page.

## Do

- Use `font-feature-settings: "liga", "onum", "kern"` on body copy
- Use small caps (real, not faux) for kicker labels and acronyms
- Indent paragraphs after the first using `text-indent: 1.5em`
- Set drop caps when the design warrants
- Use the em dash — like this — never two hyphens

## Don't

- Don't use sans for body
- Don't use rounded corners
- Don't centre body copy
- Don't use additional accent colors — oxblood is the only chromatic decision
- Don't use shadows or gradients

## When to choose Caesura

Long-form writing tools, reading apps, slow-tech products, knowledge tools that prize craft. Anywhere typography is the product.

Skip Caesura for data-dense interfaces, ops dashboards, or fast-twitch tools.

## For LLMs

1. Body copy uses `var(--collective-font-serif)`; chrome uses `var(--collective-font-sans)`
2. Default body line-height to 1.7
3. Always enable OpenType features: `liga`, `onum`, `kern`, `smcp` (small caps) where appropriate
4. Use real em dashes (—) and curly quotes (" ' ' ')
5. Single accent color (oxblood); never introduce green/blue/etc.

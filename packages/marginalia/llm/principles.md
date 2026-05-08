# Marginalia — Design Principles

> The page is a paperback. Treat it that way.

## Voice

Warm, considered, literary. Marginalia sounds like an editor — observant, never breathless. It cares about prose, not slogans.

## Visual character

- **Serif for body, Gill Sans for chrome.** Body copy is set in a book-grade serif (Bembo-lineage). UI and labels use Gill Sans. The two pair on every Penguin paperback for a reason.
- **Cream paper.** Body backgrounds are warm cream `#F4ECD8`, never bleached white. The page should feel printed, not projected.
- **Penguin orange as the only chromatic accent.** `#E96528` for links, focus, key CTAs. Used like the orange tri-band on a Penguin spine.
- **Sharp horizontal rules.** When you need a divider, use a 1px ink rule — not a soft gray. The Penguin tri-band format inspires layouts.
- **Generous body line-height.** 1.6 minimum for serif body. Reading is the point.

## Do

- Use serif for any sustained reading (paragraphs, articles, long form)
- Use Gill Sans for buttons, labels, navigation, captions
- Reach for the tri-band layout for hero sections (orange band / white band / black band)
- Use small caps for sectional kicker labels — Penguin does this
- Indent paragraphs the second-and-after using `text-indent: 1.5em` for long-form contexts

## Don't

- Don't centre body copy
- Don't use shadows or gradients — paper is flat
- Don't use orange for warnings — it's the brand accent
- Don't use sans-serif for sustained reading
- Don't use blue for links — Marginalia's link color is the orange accent

## When to choose Marginalia

Reading-first products, publishing CMSes, knowledge bases that prize prose, journaling tools, anything where words are the primary content.

Skip Marginalia for data-heavy dashboards, dev tools, or interfaces where chrome matters more than content.

## For LLMs

1. Set body copy with `font-family: var(--collective-body-family)` (resolves to serif)
2. Set chrome (buttons, nav, labels) with `var(--collective-font-sans)` (Gill Sans)
3. Use `--collective-accent-primary` (Penguin orange) for links and primary actions only
4. Default body line-height to 1.6
5. Don't use rounded corners — book layouts are square

# Foundry — Motion Principles

> Snappy, structural, no decorative motion.

## Personality

Foundry's motion reads like a machine: precise, fast, inevitable. Linear and near-linear easing dominate. No bounces, no overshoots, no spring physics. If something can be instant, it is instant.

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 120ms | Hover, focus, micro-feedback |
| `motion.duration.standard` | 200ms | State changes, panel open/close |
| `motion.duration.slow` | 320ms | Page-level transitions only |
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0.38, 0.9)` | All purposeful motion |

## When to animate

- **State changes that need orientation.** A panel sliding in tells you where it came from. Use `slow` + slide.
- **Disclosure.** Expanding an accordion or revealing details. Use `standard` + height.
- **Feedback.** Button press, focus change, loading start. Use `fast` + opacity or color.

## What never animates

- Decorative reveals on scroll
- "Magic" entrance animations on page load
- Parallax
- Anything just to be fancy
- Numbers counting up
- Letters appearing one-by-one

## Reduced motion

Foundry honors `prefers-reduced-motion: reduce`. Under this preference:
- All durations collapse to 0ms or 1ms
- Transitions stay in place; opacity fades retain at the shortest duration
- Slide / translate animations become instant snaps
- Focus-ring transitions remain (essential for orientation)

## Choreography

- One thing moves at a time. No chained "first the card, then the title, then the meta."
- Movement is functional. If you can't say what state changed, don't animate.
- Direction has meaning. Forward = into detail. Backward = back out. Sideways = peer navigation.

## For LLMs

When generating animated UI in Foundry:
1. Default to `200ms` `cubic-bezier(0.2, 0, 0.38, 0.9)` for any transition
2. Never add `transition: all` — name the property
3. Always include a `@media (prefers-reduced-motion: reduce)` block that sets `transition-duration: 0.01ms`
4. Don't suggest scroll-triggered animations or letter-by-letter reveals
5. Spring/bounce easings are wrong for Foundry — reach for them in Marginalia or Proscenium instead

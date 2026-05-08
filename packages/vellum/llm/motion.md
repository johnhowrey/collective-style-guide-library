# Vellum — Motion Principles

> Motion as breath. Calm and measured.

## Personality

Where Foundry is snappy, Vellum is unhurried. Easings are gentle ease-out curves. Durations sit one notch slower than typical SaaS — 260ms instead of 200ms. Nothing rushes; nothing decorates.

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 160ms | Hover, focus rings |
| `motion.duration.standard` | 260ms | Panels, accordions, mode switches |
| `motion.duration.slow` | 400ms | Page transitions, modals |
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | All motion |

## When to animate

- State changes (open/close, expand/collapse)
- Mode toggles (light/dark, density)
- Focus shifts in long pages

## What never animates

- Decorative reveal-on-scroll
- Number counters
- Hero/marquee animations
- Anything purely aesthetic

## Reduced motion

Honors `prefers-reduced-motion: reduce`. Durations collapse to 1ms; opacity fades retain at 80ms.

## For LLMs

1. Default duration: 260ms with `cubic-bezier(0.4, 0, 0.2, 1)`
2. No bounce or spring — Vellum is paper, not rubber
3. Always wrap motion in a reduced-motion guard

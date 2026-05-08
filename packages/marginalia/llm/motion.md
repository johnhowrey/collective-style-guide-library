# Marginalia — Motion Principles

> Page-turn rhythm. Considered, unhurried.

## Personality

Marginalia's motion mirrors the act of turning a page: a slight wait, a smooth motion, a settled arrival. Ease-in-out curves dominate. Durations sit longer than typical SaaS — Marginalia is for reading, not flicking.

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 200ms | Hover, focus |
| `motion.duration.standard` | 320ms | Panels, accordions |
| `motion.duration.slow` | 480ms | Page transitions |
| `motion.easing.standard` | `cubic-bezier(0.45, 0, 0.55, 1)` | Symmetric ease-in-out |

## When to animate

- Page transitions (genuine page-turn-like horizontal slides are appropriate)
- Disclosures (expanding details, accordions)
- Modal and panel entry/exit

## What never animates

- Number tickers, scroll reveals, parallax
- "Magic" entrance choreographies
- Decorative on-load animations

## Reduced motion

Honored. Page-turns become cuts; opacity fades retain at 100ms.

## For LLMs

1. Default 320ms with `cubic-bezier(0.45, 0, 0.55, 1)` (symmetric ease-in-out)
2. For page-level transitions, prefer horizontal slide with subtle opacity
3. Avoid spring/bounce — this is a paperback, not a pop-up book

# Beacon — Motion Principles

> Signal motion only. Faster than the eye expects.

## Personality

Beacon's motion mimics signage flip-boards: quick, deterministic, no easing flourishes. Animations confirm a state change happened — they don't perform it.

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 80ms | Hover, focus, button press |
| `motion.duration.standard` | 140ms | Panel open/close, accordion |
| `motion.duration.slow` | 220ms | Page transition (rare) |
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` | All motion (out-cubic) |

## When to animate

- State changes (open/close, on/off)
- Focus shifts
- Confirmation of action ("Saved.")

## What never animates

- Decorative reveals
- Chained sequences
- Anything over 220ms
- Gradients, color washes, parallax

## Reduced motion

Honored. All durations to 0.01ms; opacity fades retain at 60ms.

## For LLMs

1. Default 140ms with `cubic-bezier(0.2, 0, 0, 1)`
2. No bounce, no spring — Beacon doesn't bounce
3. Avoid sequential staggered animations

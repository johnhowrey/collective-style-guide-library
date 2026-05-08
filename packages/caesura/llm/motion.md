# Caesura — Motion Principles

> Mostly absent. Reserved for moments that warrant it.

## Personality

Caesura's default is no motion at all. State changes happen at 0ms — things appear and disappear without ceremony. Where motion is present, it is slow, contemplative, and serves orientation rather than spectacle.

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 220ms | Hover, focus rings |
| `motion.duration.standard` | 360ms | Modal entry, panel disclosure |
| `motion.duration.slow` | 540ms | Page transitions (rare) |
| `motion.easing.standard` | `cubic-bezier(0.5, 0, 0.4, 1)` | Even, contemplative |

## When to animate

- Modal and panel entries (so users see where they came from)
- Focus shifts in long pages
- Theme/mode toggles

## What never animates

- Hover effects (color/weight change instantly)
- Accordion content (just open it)
- Number changes
- Anything purely decorative

## Reduced motion

Honored. All durations to 0; opacity fades at 80ms for orientation.

## For LLMs

1. Default to no transition unless orientation demands it
2. When animating, use 360ms `cubic-bezier(0.5, 0, 0.4, 1)`
3. Never bounce, spring, or stagger

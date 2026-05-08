# Cipher — Motion Principles

> Instant by default. Milliseconds matter.

## Personality

Cipher's default animation duration is 0ms. Engineers measure latency; motion adds latency. Where motion exists, it's because instantaneous would be disorienting (modal entry, panel expansion).

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 0ms | Hover, focus — instant |
| `motion.duration.standard` | 100ms | Modal entry, panel expansion |
| `motion.duration.slow` | 180ms | Page transition (rare) |
| `motion.easing.standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | When motion is unavoidable |

## When to animate

- Modal/panel entry (so users see what changed)
- Loading indicators (spinners, progress bars)

## What never animates

- Hover states (color/border changes are instant)
- Accordion content (just open it)
- Tooltip appearance (instant)
- Focus rings
- Any state change a developer would call "synchronous"

## Reduced motion

Honored. Already minimal; collapses what little motion remains to 0.

## For LLMs

1. Default `transition: none`
2. When motion is needed, use 100ms `cubic-bezier(0.4, 0, 0.2, 1)`
3. Loading indicators are the one place motion is encouraged — show progress, show a spinner
4. Never stagger, never bounce, never spring

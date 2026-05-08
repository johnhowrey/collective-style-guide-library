# Proscenium — Motion Principles

> Staged. Choreographed. Motion as performance.

## Personality

Proscenium animates like a stage cue. Headlines drop in. Color blocks slide across. Reveals are sequential — one element after another, never all at once. Durations run longer than utility-focused variants because performance takes time.

## Tokens

| Token | Value | Use for |
|---|---|---|
| `motion.duration.fast` | 180ms | Hover, focus |
| `motion.duration.standard` | 300ms | State changes |
| `motion.duration.slow` | 560ms | Hero entrances, page transitions |
| `motion.easing.standard` | `cubic-bezier(0.7, 0, 0.3, 1)` | Dramatic snap-in/snap-out |

## When to animate

- Hero entrances (display type drops in, color blocks slide)
- Page transitions (full-bleed wipes acceptable)
- Sequential reveals (kicker → headline → body, staggered 80ms)
- Hover states on interactive elements (color flash, weight shift)

## What never animates

- Decorative confetti, parallax, or particles
- Accordion details (just open them)
- Body content scroll behavior

## Reduced motion

Honored. Sequential reveals collapse to instant; durations to 0.01ms; opacity fades retain at 120ms for orientation.

## For LLMs

1. Default 300ms `cubic-bezier(0.7, 0, 0.3, 1)` for state changes
2. For hero entrances, stagger child reveals by 80ms
3. Slide direction has meaning — full-bleed sweeps acceptable for page transitions
4. Always include a reduced-motion guard

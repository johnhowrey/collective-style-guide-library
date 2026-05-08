# Beacon — Starter Prompt

You are designing in **Beacon**, a Schiphol-inspired wayfinding visual identity from The Collective Style Guide Library. Built on IBM Carbon's accessible foundation; override visuals using Beacon's tokens.

## Identity

- **Yellow as signal.** `#FFCC00` reserved for one element per screen.
- **Near-black ink, white paper.** No competing middle grays.
- **Sharp corners.** Radius is 0.
- **Hierarchy as design.** Display weight one full step above body.
- **Directional language everywhere.** Arrows, breadcrumbs, "next/back".

## Tokens

Light: bg `#FFFFFF`, text `#1B1B1B`, border `#1B1B1B`, accent `#FFCC00` (with `#000000` text on it)
Dark: bg `#000000`, text `#FFFFFF`, accent `#FFCC00`
Type: `frutiger` body, `frutiger-bold` display, `ibm-plex-mono` mono
Radius: `0`. Motion: 80/140/220ms, `cubic-bezier(0.2, 0, 0, 1)`.

## Voice

Instructive, directional, hierarchical. Page titles read as breadcrumbs. CTAs include direction: "Continue to billing →".

## Code shape

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/beacon";

<ThemeProvider theme={theme}><YourApp /></ThemeProvider>
```

## Don't

- Use yellow as a warning color (it's *signal*, not status)
- Use middle grays for body text
- Centre headings
- Add bouncy motion
- Use color alone for active states — also bold the weight

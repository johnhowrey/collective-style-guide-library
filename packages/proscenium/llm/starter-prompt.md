# Proscenium — Starter Prompt

You are designing in **Proscenium**, a Public Theater-inspired theatrical visual identity from The Collective Style Guide Library. Built on IBM Carbon's accessible foundation; override visuals with Proscenium's tokens.

## Identity

- **Loud on purpose.** Type is the visual.
- **Wood-type display, hot palette.** Knockout-lineage condensed display, magenta/yellow on black/cream.
- **Layered composition.** Text over color blocks, kicker labels overlapping headlines.
- **Sharp corners. Edge-to-edge. No precious whitespace.**

## Tokens

Light: bg `#FAF8F0` (playbill cream), text `#0A0A0A`, accent `#FF1F8F` (magenta), secondary `#FFD400` (yellow)
Dark: bg `#0A0A0A`, text `#FAFAFA`, accent `#FF3A9F`, secondary `#FFE500`
Type: `trade-gothic-next` (sans), `knockout` / `druk` (display), `ibm-plex-mono`
Radius: `0`. Motion: 180/300/560ms with `cubic-bezier(0.7, 0, 0.3, 1)`.

## Voice

Theatrical, present tense, declarative. Short headlines. ALL CAPS for kicker labels and primary CTAs. "BUILD FAILED. LOGS BELOW." not "An error has occurred."

## Code shape

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/proscenium";

<ThemeProvider theme={theme} mode="dark"><YourApp /></ThemeProvider>
```

Display type should run 80–144px; body 16px. 8x scale contrast minimum.

## Don't

- Soften — no quiet, restrained variants of components
- Centre headlines
- Add accent colors beyond magenta/yellow
- Use rounded corners
- Apologize in error copy

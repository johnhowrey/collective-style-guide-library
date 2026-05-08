# Marginalia — Starter Prompt

You are designing in **Marginalia**, a Penguin Books-inspired bookish visual identity from The Collective Style Guide Library. Built on IBM Carbon's accessible foundation; override visuals with Marginalia's tokens.

## Identity

- **The page is a paperback.** Cream paper, deep ink, Penguin orange accent.
- **Serif for body, Gill Sans for chrome.** Body sets in book-grade serif; UI sets in Gill Sans.
- **Tri-band layouts.** Reach for horizontal banding (orange / white / black) in heroes.
- **Sharp corners.** Book covers don't round.
- **Generous line-height.** 1.6 minimum for body.

## Tokens

Light: bg `#F4ECD8` (cream), text `#1A1612`, accent `#E96528` (Penguin orange), border `#C9BFA8`
Dark: bg `#1A1612`, text `#F4ECD8`, accent `#FF8854`
Type: `bembo-book` (serif body), `gill-sans-nova` (sans chrome), `ibm-plex-mono`
Radius: `0`. Motion: 200/320/480ms with `cubic-bezier(0.45, 0, 0.55, 1)`.

## Voice

Warm, considered, editorial. Curly quotes, em dashes, Oxford commas. No marketing hyperbole. Sentences vary in length.

## Code shape

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/marginalia";

<ThemeProvider theme={theme}><YourApp /></ThemeProvider>
```

For body copy: `font-family: var(--collective-body-family)` (resolves to serif).

## Don't

- Use sans for body (Marginalia is serif-bodied)
- Use rounded corners
- Use blue for links — links are Penguin orange
- Use exclamation in error/notification copy
- Use bouncy motion easings

# Caesura — Starter Prompt

You are designing in **Caesura**, a Bringhurst-inspired classical book typography variant from The Collective Style Guide Library. Built on IBM Carbon's accessible foundation; override visuals with Caesura's tokens.

## Identity

- **Typography is the product.** Old-style serif body, Myriad-lineage sans for chrome only.
- **Hanging punctuation, optical alignment, OpenType features.**
- **Single accent: oxblood.** Used sparingly.
- **Sharp corners. Generous leading.** Body line-height 1.7.
- **Mostly no motion.** Things appear and disappear without ceremony.

## Tokens

Light: bg `#FBF8F2`, text `#1A1817`, accent `#6B1F1F` (oxblood), border `#C9C0B0`
Dark: bg `#1A1817`, text `#FBF8F2`, accent `#B85050`
Type: `minion-pro` (serif body), `myriad-pro` (sans chrome), `ibm-plex-mono`
Radius: `0`. Motion: 220/360/540ms `cubic-bezier(0.5, 0, 0.4, 1)`.

## Voice

Literary, careful, considered. Curly quotes, em dashes, real ellipses. Active voice. Specific over generic.

## Code shape

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/caesura";

<ThemeProvider theme={theme}><YourApp /></ThemeProvider>
```

For body copy: `font-family: var(--collective-body-family);` + `font-feature-settings: "liga", "onum", "kern";` + `line-height: 1.7;`.

## Don't

- Use sans for body
- Use straight quotes or two-hyphen em dashes
- Add accent colors beyond oxblood
- Animate hovers
- Centre body copy

# Cipher — Starter Prompt

You are designing in **Cipher**, an engineering-tool visual identity from The Collective Style Guide Library. Built on IBM Carbon's accessible foundation; override visuals using Cipher's tokens.

## Identity

- **Dark-first.** Canonical mode is dark, `#0D1117` canvas (gh-dark style).
- **Inter UI / JetBrains Mono accents.** Mono everywhere precision matters.
- **Syntax-highlighting palette.** Semantic accents: blue/green/yellow/red.
- **6px radius. Tight density. Tabular numerals.**
- **No motion.** Instant by default.

## Tokens

Dark (canonical): bg `#0D1117`, surface `#161B22`, text `#E6EDF3`, border `#30363D`
Accents: primary `#2F81F7` / success `#3FB950` / warning `#D29922` / danger `#F85149`
Light: bg `#FAFAFA`, text `#1F2328`, accent primary `#0969DA`
Type: `inter` (UI), `jetbrains-mono` (mono accents)
Radius: 4/6/8px. Motion: 0/100/180ms.

## Voice

Terse, technical, specific. Show timestamps, IDs, latencies, version numbers. Lowercase by default. Errors include cause and next move.

## Code shape

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/cipher";

<ThemeProvider theme={theme} mode="dark" density="compact">
  <YourApp />
</ThemeProvider>
```

Always: `font-feature-settings: "tnum"` on numeric containers; `font-family: var(--collective-font-mono)` for IDs, paths, hashes.

## Don't

- Soften: no "friendly" copy
- Pad: tighter is better
- Use color as decoration: colors are semantic
- Animate: instant by default
- Use sans where mono is more correct

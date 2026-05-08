# Vellum — Starter Prompt

You are designing in **Vellum**, an International Style visual identity from The Collective Style Guide Library. Built on IBM Carbon's accessible foundation; you may use any `@carbon/react` component overridden with Vellum's tokens.

## Identity

- **Single accent (terracotta).** Everything else is grays of paper and ink.
- **Helvetica-lineage neogrotesque.** One family across body and display.
- **Generous whitespace.** Whitespace is structural, not decorative.
- **Subtle 2px radius.** Soft, not friendly.
- **The grid is visible.** Alignments and baselines do the work.

## Tokens

Light: bg `#F8F7F4`, surface `#FFFFFF`, text `#1A1A1A`, accent `#B8442C`, border `#D6D3CC`
Dark: bg `#1A1817`, surface `#26221F`, text `#F8F7F4`, accent `#E07A5F`
Type: `neue-haas-grotesk-text` (body), `neue-haas-grotesk-display` (display), `ibm-plex-mono`
Radius: `2px`. Motion: 160/260/400ms with `cubic-bezier(0.4, 0, 0.2, 1)`.

## Voice

Precise, factual, neutral. No marketing register. Period punctuation. Single accent used sparingly.

## Code shape

```tsx
import { ThemeProvider } from "@collective/foundation";
import { theme } from "@collective/vellum";

<ThemeProvider theme={theme} mode="light">
  <YourApp />
</ThemeProvider>
```

## Don't

- Add a second accent color
- Centre body copy
- Use marketing adjectives
- Add shadows or elevation
- Use bouncy motion easings

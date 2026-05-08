# @collective/foundation

Internal package. Not user-facing. Provides the shared plumbing that every variant in The Collective Style Guide Library implements.

## What lives here

- **`Theme` contract** (`src/theme.ts`) — the shape every variant exports: tokens, font kit, metadata.
- **`ThemeProvider`** (`src/ThemeProvider.tsx`) — applies a variant's tokens to the DOM, loads its Adobe Fonts kit, and sets the Carbon theme attribute.
- **Font loader** (`src/fonts.ts`) — Adobe Fonts (Typekit) loader. Each variant declares its kit ID; the loader injects the stylesheet at runtime.
- **Foundation styles** (`src/styles/foundation.scss`) — imports Carbon's reset, grid, motion, and component styles. Variant SCSS layers on top.

## Why a separate package

Variants should not import Carbon directly. They import `@collective/foundation`, which:

- Pins Carbon versions in one place
- Defines the *contract* (what tokens a variant must supply)
- Hides Carbon-specific wiring (theme attribute names, CSS variable namespaces)
- Lets us swap or upgrade Carbon without touching variants

## Built on

[IBM Carbon Design System](https://carbondesignsystem.com) — Apache 2.0.

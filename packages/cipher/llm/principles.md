# Cipher — Design Principles

> The terminal as design language. Density and milliseconds.

## Voice

Terse. Technical. Specific. Cipher speaks in status codes, exit codes, and timestamps. It assumes the user knows what `2xx` means.

## Visual character

- **Dark-first.** Cipher's canonical mode is dark — `#0D1117` canvas. Light mode is provided but the variant feels most itself in dark.
- **Inter for UI, JetBrains Mono for accents.** Mono shows up everywhere — IDs, timestamps, file paths, command output, IP addresses, version numbers. Anywhere precision matters.
- **Syntax-highlighting palette.** Blue / green / yellow / red as semantic accents. Not as brand color.
- **6px radius.** Dev-tool default. Sharp enough to feel engineered, soft enough to read as modern.
- **Tight density.** Engineers want information density. Don't pad cells; show more rows.
- **Tabular numerals.** Always. `font-feature-settings: "tnum";`

## Do

- Show technical specifics: timestamps in ISO-8601, IDs in mono, file sizes in mono with units
- Use mono for any data that has a "right" form (hashes, IDs, paths, IPs)
- Reach for syntax-highlighting accents semantically: green = success, yellow = warning, red = error/destructive, blue = informational/active
- Keep tables tight (32px row height in comfortable, 26px in compact)
- Use the dark mode default — cipher loses character in light

## Don't

- Don't use sans where mono is more correct
- Don't pad UI to feel friendly; it should feel efficient
- Don't use color as decoration — colors are semantic
- Don't add motion — engineers measure milliseconds, motion adds them

## When to choose Cipher

Developer tools, CI/CD UIs, monitoring dashboards, deployment platforms, internal engineering tools, observability products, terminal-adjacent SaaS.

Skip Cipher for consumer products, content-first apps, or anywhere a non-technical audience needs to feel welcomed.

## For LLMs

1. Use mono (`var(--collective-font-mono)`) for IDs, timestamps, paths, hashes, IP addresses, version numbers
2. Use semantic accents: success/warning/danger from `--collective-accent-*`
3. Default dark mode for new screens
4. Set `font-feature-settings: "tnum"` on any container with numeric data
5. Avoid transitions and animations

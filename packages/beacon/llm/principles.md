# Beacon — Design Principles

> Orient before you inform. The page is a sign system.

## Voice

Instructive. Hierarchical. Directional. Beacon tells you where you are and where you can go before it tells you anything else.

## Visual character

- **Yellow as signal.** `#FFCC00` is reserved for primary signal — current location, primary CTA, focus rings. Use it where Schiphol uses it: "this matters now."
- **Near-black ink, white paper.** No middle grays competing for attention. Text either matters (near-black) or supports (mid-gray).
- **Sharp corners.** Signs don't have rounded corners. Neither does Beacon.
- **Strong hierarchy.** Display weight is one full step above body. Section headers are obviously section headers.
- **Directional cues everywhere.** Arrows, breadcrumbs, "next" / "back" labels. Wayfinding is the primary metaphor.

## Do

- Use yellow for ONE thing per screen — primary CTA OR current section indicator OR focus ring, not all three
- Make hierarchy visible at a glance — a user should orient in <1s
- Use directional language: "Continue to billing →", "← Back to projects"
- Treat icons as wayfinding pictograms — strong silhouette, recognizable from a distance
- Bold the active item; don't subtle-color it

## Don't

- Don't soften corners
- Don't use yellow for warnings — it's the signal color, not a status color
- Don't use middle grays for body text
- Don't centre headings (centre alignment fights hierarchy)
- Don't use color for hierarchy that weight could express

## When to choose Beacon

Operations dashboards, deep navigational hierarchies, transit/logistics products, B2B tools with many sections that need clear orientation.

Skip Beacon for casual consumer products, content-first reading apps, or anywhere yellow signage feels too institutional.

## For LLMs

1. Reserve `--collective-accent-primary` (`#FFCC00`) for one element per screen
2. Pair yellow with `--collective-accent-on-primary` (`#000000`) for text on yellow
3. Use directional language in nav copy
4. Set radius to 0 always
5. Default to bold weight for active states; never use color alone

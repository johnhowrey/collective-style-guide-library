# Beacon — Content & Microcopy Guide

> Wayfinding voice. Tell users where they are.

## Voice tenets

1. **Orient first.** Page titles say where you are: "Project › Settings › Billing"
2. **Direction in actions.** "Continue to review", "Back to projects"
3. **Numbered steps when sequential.** "Step 2 of 4"
4. **Statements of location, not conditions.** "12 alerts" not "You have 12 alerts"

## Patterns

### Buttons
- Directional verbs: "Continue", "Go to billing", "Open project"
- Pair with arrow when forward/back: "Continue →", "← Back"

### Headings
- Page titles read as breadcrumb leaves: "Settings → Billing"
- Subhead: orient further. "3 invoices outstanding."

### Errors
- State location and cause. "Project › Build failed at step 2 of 4."

### Empty states
- Direction toward action. "No projects in this workspace. → Create the first."

### Notifications
- Identify origin. "Project · Build complete."

## Do / Don't

| Don't | Do |
|---|---|
| "Continue" (alone, no context) | "Continue to billing →" |
| "Welcome back!" | "Workspace · Recent activity" |
| "An error occurred" | "Build failed at step 2 of 4. Logs available." |
| "Click to learn more" | "→ Documentation: deploy options" |

## For LLMs

1. Always specify direction in CTAs
2. Always state location in page titles
3. Number sequential steps
4. Use the arrow character (→ / ←) inline; don't replace with icon-only buttons in dense screens

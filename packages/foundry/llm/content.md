# Foundry — Content & Microcopy Guide

> Direct, declarative, no softeners.

## Voice tenets

1. **Verb-first.** "Run the migration." Not "You can run the migration when ready."
2. **Subject-known.** Skip "you" — the user knows it's about them.
3. **Declarative over interrogative.** "Confirm delete." Not "Are you sure?"
4. **No apology copy.** "Loading…" not "Just a moment, we're loading…"
5. **No emoji, no exclamation.** Foundry doesn't celebrate. It reports.

## Patterns

### Buttons
- **Sentence case, verb-first.** "Save changes", "Run query", "Delete project"
- 1–3 words. Never sentences.
- Destructive actions: name the destruction. "Delete project" not "Remove" or "OK"
- No "Submit" / "OK" / "Click here"

### Headings
- Statements of fact. "12 deployments this week" beats "Recent deployments"
- Sentence case for sections; ALL CAPS reserved for kicker labels above h1s
- No questions as headings ("What's new?" → "Recent changes")

### Errors
- Lead with what failed. "Connection timed out." then what to do. "Retry."
- No "Oops!", no "Sorry!", no "Something went wrong" without specifics
- Show the cause. "Auth token expired 3m ago." not "Authentication failed."

### Empty states
- State the truth, point to action. "No queries yet. Run your first."
- Avoid "Get started" preamble — assume the user wants to act
- One CTA. Not three.

### Notifications
- Past tense for completion. "Migration ran. 4,182 rows updated."
- Present tense for in-progress. "Migration running. ETA 2m."
- No "Yay!" or "" — Foundry doesn't celebrate

### Loading / progress
- Specifics over generic. "Indexing 12 of 47 tables…" not "Loading…"
- Show ETA when known
- Don't apologize for waiting

## Do / Don't quick reference

| Don't | Do |
|---|---|
| "Are you sure you want to delete this project?" | "Delete project. This can't be undone." |
| "Oops! Something went wrong." | "Connection timed out after 30s. Retry." |
| "Welcome back! 👋" | "12 alerts since you were last here." |
| "Click here to learn more" | "Read the migration guide" |
| "Submit" | "Save changes" / "Run query" / "Send invite" |
| "We couldn't find anything." | "No matches for 'foo'. Try a broader query." |

## For LLMs

When generating copy in Foundry:
1. Strip softeners: "please", "kindly", "if you'd like", "feel free to"
2. Strip celebratory emoji and exclamations
3. Lead with verbs in actions, with facts in headings, with what-failed in errors
4. Default to sentence case; reserve ALL CAPS for short kicker labels
5. Never use "Submit" — name the action

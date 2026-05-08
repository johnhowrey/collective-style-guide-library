# Cipher — Content & Microcopy Guide

> Status codes. Exit codes. Timestamps.

## Voice tenets

1. **Specific over reassuring.** "Build #4128 failed at step 2/4 (exit 137 — OOM)" beats "Build failed."
2. **Show numbers.** Latency, count, version — always.
3. **Lowercase by default.** UI labels often lowercase. Sentence case acceptable; never title case.
4. **No marketing register.** No "powerful", "blazing fast", "world-class".

## Patterns

### Buttons
- Single verb where possible. "Run", "Deploy", "Cancel"
- For destructive: include the object. "Delete project", "Remove member"

### Headings
- Lowercase or sentence case. "deployments", "Recent runs"
- Numerical when possible. "12 alerts" beats "Alerts"

### Errors
- Lead with code/cause: `[ECONNREFUSED] connection refused (10.0.0.5:5432)`
- Give the next move: "Check that the database is reachable from this region."

### Empty states
- Status-line style. "No runs yet · ./deploy --first to start"

### Notifications
- Past-tense + count. "Build complete · 4m 12s · 1,832 lines"

## Do / Don't

| Don't | Do |
|---|---|
| "Oops! Build failed." | "Build #4128 failed · step 2/4 · exit 137 · OOM" |
| "Awesome! Project created!" | "Project created · `proj_a3f9c2` · us-east-1" |
| "Deploying your amazing changes!" | "Deploying d29c1a1 → production · ETA 1m 12s" |
| "Click here to learn more" | "→ docs/deploy" |

## For LLMs

1. Default to lowercase or sentence case
2. Show specific values: timestamps, IDs, latencies, counts, versions
3. Errors must include cause and next move
4. Use mono inline for IDs, paths, durations: \`build_a3f9\` \`./run.sh\` \`4m 12s\`

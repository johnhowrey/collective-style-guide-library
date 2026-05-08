# Figma integration

This directory holds Figma Code Connect mappings — files that link Figma library components to React components in each variant package. With these in place, a designer in Figma's Dev Mode hits **Get code** and receives the right import for the variant they're composing.

## Layout

```
figma/
├── code-connect/
│   ├── foundry/
│   ├── vellum/
│   ├── beacon/
│   ├── marginalia/
│   ├── proscenium/
│   ├── caesura/
│   └── cipher/
└── README.md
```

Each `<variant>/` directory will contain `*.figma.tsx` mapping files (one per component). They are pushed to Figma via the Figma MCP `send_code_connect_mappings` tool.

## Status

Mappings are scaffolded but not yet populated. They'll fill in as variant component packages mature — each variant will ship Code Connect mappings alongside its first components.

## Workflow (planned)

1. Designers build a Figma library file per variant (or one file with variants as modes).
2. Engineers author `*.figma.tsx` mapping files referencing Figma node IDs and the corresponding React import.
3. CI runs `pnpm figma:connect` to push the mappings on merge.
4. Designers in Dev Mode get the right code immediately.

## Tokens Studio

The DTCG `tokens.json` files in each variant's `llm/` directory import cleanly into Tokens Studio for Figma. Designers and engineers stay in sync because they read from the same source.

# @collective/mcp

Model Context Protocol server for **The Collective Style Guide Library**.

Connects Claude Code, Cursor, Claude.ai (web MCP), and any other MCP-aware client directly to the library — agents call tools and receive variant tokens, principles, content rules, motion, i18n notes, and starter prompts at runtime.

## Tools

| Tool | Purpose |
|---|---|
| `list_variants` | Slug, name, tagline, inspiration of every variant |
| `get_variant` | Full theme metadata for a variant |
| `get_tokens` | DTCG tokens.json for a variant |
| `get_principles` | principles.md content |
| `get_content_rules` | content.md (voice and microcopy) |
| `get_motion` | motion.md |
| `get_i18n` | i18n.md |
| `get_starter_prompt` | Drop-in starter prompt for the variant |
| `get_component` | Component manifest entry |
| `search` | Full-text search across all variants' LLM artifacts |

## Local (stdio)

Drop this into your tool's MCP config. For Claude Code, edit `~/.claude.json` or per-project `.mcp.json`:

```json
{
  "mcpServers": {
    "collective": {
      "command": "npx",
      "args": ["-y", "@collective/mcp"]
    }
  }
}
```

For Cursor, **Settings → Features → Model Context Protocol** with the same JSON.

## Remote (HTTP)

For Claude.ai web integrations or other remote-MCP-aware tools:

```bash
npx @collective/mcp --transport http --port 3030
```

The Vercel deployment of the showcase serves `/mcp` as the production HTTP endpoint.

## Source

Reads variant artifacts from `packages/<variant>/llm/` at runtime. Adding a new variant automatically extends the tool surface.

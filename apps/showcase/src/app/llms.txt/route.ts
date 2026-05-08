import { VARIANTS } from "@/lib/variants";

/**
 * GET /llms.txt — the public LLM-discoverable index for the library.
 *
 * Follows https://llmstxt.org. Agents fetch this URL to learn what the site
 * is and where to find machine-readable details.
 */
export async function GET() {
  const lines: string[] = [];
  lines.push("# The Collective Style Guide Library");
  lines.push("");
  lines.push("> Enterprise- and SaaS-ready visual identities. Seven variants on one accessible foundation (IBM Carbon, Apache 2.0).");
  lines.push("");
  lines.push("Each variant is a complete design system: tokens, principles, content/voice, motion, i18n stance, and a starter prompt for LLMs. Designed for direct use by Claude, Cursor, Figma, and other agents.");
  lines.push("");
  lines.push("## Variants");
  for (const v of VARIANTS) {
    lines.push(`- [${v.meta.name}](/variants/${v.meta.id}) — ${v.meta.tagline} *(inspiration: ${v.meta.inspiration})*`);
  }
  lines.push("");
  lines.push("## Per-variant LLM artifacts");
  lines.push("");
  for (const v of VARIANTS) {
    const id = v.meta.id;
    lines.push(`### ${v.meta.name}`);
    lines.push(`- DTCG tokens: /api/llm/${id}/tokens`);
    lines.push(`- Principles: /api/llm/${id}/principles`);
    lines.push(`- Content & microcopy: /api/llm/${id}/content`);
    lines.push(`- Motion: /api/llm/${id}/motion`);
    lines.push(`- i18n & RTL: /api/llm/${id}/i18n`);
    lines.push(`- Starter prompt: /api/llm/${id}/starter-prompt`);
    lines.push(`- Concise summary: /api/llm/${id}/llms`);
    lines.push("");
  }
  lines.push("## Tooling");
  lines.push("- MCP server (local + remote): /ai/mcp");
  lines.push("- Figma Code Connect: /ai/figma");
  lines.push("- Claude Code recipes: /ai/claude");
  lines.push("- Cursor recipes: /ai/cursor");
  lines.push("");
  lines.push("## Foundation");
  lines.push("Built on IBM Carbon Design System (Apache 2.0). Variants override Carbon's tokens; component foundations are shared.");

  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

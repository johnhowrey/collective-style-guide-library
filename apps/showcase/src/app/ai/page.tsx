import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "Design-to-code (AI)" };

export default function AiOverviewPage() {
  return (
    <>
      <PageHeader
        kicker="Design-to-code"
        title="Built for designers and engineers using AI."
        lede="Every variant ships an LLM-readable layer: DTCG tokens, principles, content rules, motion, i18n, and a starter prompt. Plus an MCP server so any tool that speaks MCP can use the library directly."
      />
      <Prose>
        <h2>The four channels</h2>
        <ul>
          <li>
            <Link href="/ai/claude"><strong>Claude Code</strong></Link> — Use a variant directly from Claude in your terminal or editor.
          </li>
          <li>
            <Link href="/ai/cursor"><strong>Cursor</strong></Link> — Configure Cursor to author in a variant via .cursorrules or the MCP integration.
          </li>
          <li>
            <Link href="/ai/figma"><strong>Figma</strong></Link> — Code Connect mappings link Figma library components to variant components.
          </li>
          <li>
            <Link href="/ai/mcp"><strong>MCP server</strong></Link> — Local + remote Model Context Protocol server exposing tools for any agent.
          </li>
        </ul>
        <h2>Per-variant LLM artifacts</h2>
        <p>Each variant&rsquo;s <code>llm/</code> directory ships:</p>
        <ul>
          <li><code>tokens.json</code> — DTCG-format design tokens (the source of truth)</li>
          <li><code>principles.md</code> — visual character, do/don&rsquo;t, when to choose</li>
          <li><code>content.md</code> — voice and microcopy patterns</li>
          <li><code>motion.md</code> — motion personality and reduced-motion behavior</li>
          <li><code>i18n.md</code> — locale fitness and RTL guidance</li>
          <li><code>starter-prompt.md</code> — drop-in system prompt for any LLM</li>
          <li><code>components.json</code> — schema-validated component manifest (a11y, props, usage)</li>
          <li><code>llms.txt</code> — concise machine-readable summary</li>
        </ul>
        <p>All accessible at <code>/api/llm/[variant]/[doc]</code>.</p>
        <h2>The /llms.txt index</h2>
        <p>This site&rsquo;s root index for agents lives at <Link href="/llms.txt">/llms.txt</Link>. Tools that follow <a href="https://llmstxt.org" target="_blank" rel="noreferrer noopener">llmstxt.org</a> conventions discover the library from this single URL.</p>
      </Prose>
    </>
  );
}

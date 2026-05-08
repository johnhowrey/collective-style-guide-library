import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "MCP server" };

export default function McpPage() {
  return (
    <>
      <PageHeader
        kicker="Design-to-code · MCP"
        title="Model Context Protocol server"
        lede="Local stdio + remote HTTP transports. The same tool surface in both. Speaks to Claude Code, Cursor, Claude.ai, and any other MCP client."
      />
      <Prose>
        <h2>Tool surface</h2>
        <ul>
          <li><code>list_variants</code> — return the slug, name, tagline, and inspiration of every variant.</li>
          <li><code>get_variant</code> — return the full theme metadata for a variant.</li>
          <li><code>get_tokens</code> — return DTCG tokens.json for a variant.</li>
          <li><code>get_principles</code> — return principles.md content.</li>
          <li><code>get_content_rules</code> — return content.md (voice and microcopy).</li>
          <li><code>get_motion</code> — return motion.md.</li>
          <li><code>get_i18n</code> — return i18n.md.</li>
          <li><code>get_component</code> — return a component manifest entry.</li>
          <li><code>starter_prompt</code> — return the variant&rsquo;s drop-in starter prompt.</li>
          <li><code>search</code> — full-text search across all variants&rsquo; LLM artifacts.</li>
        </ul>
        <h2>Local (stdio)</h2>
        <p>Drop into your tool&rsquo;s MCP config:</p>
      </Prose>
      <CodeBlock language="json">{`{
  "mcpServers": {
    "collective": {
      "command": "npx",
      "args": ["-y", "@collective/mcp"]
    }
  }
}`}</CodeBlock>
      <Prose>
        <h2>Remote (HTTP)</h2>
        <p>For Claude.ai web integrations or other remote-MCP-aware tools, the same server speaks HTTP:</p>
      </Prose>
      <CodeBlock language="bash">{`# Run remotely
npx @collective/mcp --transport http --port 3030`}</CodeBlock>
      <Prose>
        <p>The Vercel deployment of this showcase exposes <code>/mcp</code> as the production HTTP endpoint.</p>
        <h2>Source</h2>
        <p>Server source lives at <code>packages/mcp/</code>. It reads from each variant package&rsquo;s <code>llm/</code> directory at runtime — adding a variant automatically extends the tool surface with no MCP changes.</p>
      </Prose>
    </>
  );
}

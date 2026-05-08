import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Claude Code" };

export default function ClaudePage() {
  return (
    <>
      <PageHeader
        kicker="Design-to-code · Claude"
        title="Use a variant from Claude Code"
        lede="Two paths: drop the variant's starter prompt into a CLAUDE.md, or connect via MCP for live token/component lookups."
      />
      <Prose>
        <h2>Path A — CLAUDE.md (no MCP)</h2>
        <p>The fastest setup. Create a <code>CLAUDE.md</code> in your project root with a variant&rsquo;s starter prompt:</p>
      </Prose>
      <CodeBlock language="bash">{`curl https://collective.style/api/llm/foundry/starter-prompt > CLAUDE.md`}</CodeBlock>
      <Prose>
        <p>Claude reads <code>CLAUDE.md</code> automatically and primes itself for that variant. Replace <code>foundry</code> with any variant slug. Combine with the variant&rsquo;s <code>content.md</code> and <code>motion.md</code> to round out the priming context.</p>
        <h2>Path B — MCP server</h2>
        <p>For live access to tokens, components, and starter prompts at agent runtime, add the Collective MCP server to your <code>.mcp.json</code> or <code>~/.claude.json</code>:</p>
      </Prose>
      <CodeBlock language="json" filename=".mcp.json">{`{
  "mcpServers": {
    "collective": {
      "command": "npx",
      "args": ["-y", "@collective/mcp"]
    }
  }
}`}</CodeBlock>
      <Prose>
        <p>Then, inside Claude:</p>
        <blockquote>
          Use the <code>collective.list_variants</code> tool to see what&rsquo;s available, then call <code>collective.starter_prompt</code> for the one you want and apply it before generating code.
        </blockquote>
        <p>See <a href="/ai/mcp">MCP server →</a> for the full tool surface.</p>
        <h2>Path C — Per-task context</h2>
        <p>For one-off tasks, copy the per-page prompt from any page in this site (the <strong>Copy for LLM</strong> button). The button assembles variant context plus the page being viewed into a ready-to-paste prompt.</p>
      </Prose>
    </>
  );
}

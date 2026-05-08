import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Cursor" };

export default function CursorPage() {
  return (
    <>
      <PageHeader
        kicker="Design-to-code · Cursor"
        title="Configure Cursor to author in a variant"
        lede="Drop the variant's starter prompt into .cursorrules, or use the MCP server for live token lookups."
      />
      <Prose>
        <h2>Path A — .cursorrules</h2>
        <p>Cursor reads <code>.cursorrules</code> on every prompt. Combine the variant&rsquo;s starter prompt with project-specific guidance:</p>
      </Prose>
      <CodeBlock language="bash">{`curl https://collective.style/api/llm/foundry/starter-prompt > .cursorrules
# then append project rules:
echo "\\n## This project\\nWe ship a logistics dashboard..." >> .cursorrules`}</CodeBlock>
      <Prose>
        <h2>Path B — MCP via Cursor settings</h2>
        <p>Cursor supports MCP servers as of late 2025. Add the Collective server in <strong>Settings → Features → Model Context Protocol</strong>:</p>
      </Prose>
      <CodeBlock language="json">{`{
  "mcpServers": {
    "collective": { "command": "npx", "args": ["-y", "@collective/mcp"] }
  }
}`}</CodeBlock>
      <Prose>
        <h2>Inline Composer prompt</h2>
        <p>For ad-hoc generation, paste this into Cursor&rsquo;s Composer:</p>
        <blockquote>
          You&rsquo;re designing in <code>@collective/foundry</code>. Tokens at <code>/api/llm/foundry/tokens</code>. Voice rules at <code>/api/llm/foundry/content</code>. Use <code>@carbon/react</code> components; override visuals via the variant&rsquo;s CSS variables. Now: build a deploy log viewer.
        </blockquote>
      </Prose>
    </>
  );
}

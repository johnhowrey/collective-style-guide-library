import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Figma" };

export default function FigmaPage() {
  return (
    <>
      <PageHeader
        kicker="Design-to-code · Figma"
        title="Code Connect for variants"
        lede="When a designer points at a Figma component, Figma's MCP returns the right variant component import — not generic React."
      />
      <Prose>
        <h2>How Code Connect works for this library</h2>
        <p>Each variant ships a <code>figma/code-connect/&lt;variant&gt;/</code> directory with mapping files that link Figma library components to variant React components. When a designer hits <strong>Get code</strong> in Figma, the Figma MCP server resolves the node ID to:</p>
        <pre><code>{`import { Button } from "@carbon/react";
import { theme } from "@collective/foundry";

<Button kind="primary">Save changes</Button>`}</code></pre>
        <p>...with the right variant import for whichever variant the designer is composing.</p>
        <h2>Setup checklist</h2>
        <ol>
          <li>Create a Figma library file per variant (or one shared file with variant-as-mode).</li>
          <li>Run <code>pnpm figma:connect</code> to push the mapping files (deferred — populated as components ship).</li>
          <li>Designers install Figma&rsquo;s Dev Mode Code Connect plugin.</li>
        </ol>
        <h2>Token sync</h2>
        <p>The DTCG tokens.json file in each variant&rsquo;s <code>llm/</code> directory imports cleanly into <strong>Tokens Studio for Figma</strong> and similar plugins. Designers and engineers stay in sync because they read from the same file.</p>
        <h2>Status</h2>
        <p>Code Connect mappings are scaffolded but not yet populated — they&rsquo;ll fill in as variant component packages mature.</p>
      </Prose>
    </>
  );
}

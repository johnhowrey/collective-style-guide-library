import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Customizing tokens" };

export default function CustomizingPage() {
  return (
    <>
      <PageHeader
        kicker="Get started · 4/4"
        title="Customize without forking"
        lede="Override CSS variables, swap font providers, or compose your own theme on top of a variant — without copying any source."
      />
      <Prose>
        <h2>Override individual tokens</h2>
        <p>Variants apply CSS custom properties to <code>:root</code>. Override them in your own stylesheet to nudge the palette:</p>
      </Prose>
      <CodeBlock language="css" filename="overrides.css">{`:root[data-variant="foundry"] {
  --collective-accent-primary: #FF7A00; /* swap red for orange */
  --collective-radius-sm: 4px;          /* soften corners */
}`}</CodeBlock>
      <Prose>
        <h2>Compose a derived theme in code</h2>
        <p>If you need TypeScript-typed overrides, spread the variant&rsquo;s theme and replace fields:</p>
      </Prose>
      <CodeBlock language="ts">{`import { theme as foundry } from "@collective/foundry";
import type { Theme } from "@collective/foundation";

export const myTheme: Theme = {
  ...foundry,
  meta: { ...foundry.meta, name: "Acme" },
  modes: {
    ...foundry.modes,
    light: {
      ...foundry.modes.light,
      cssVariables: {
        ...foundry.modes.light.cssVariables,
        "--collective-accent-primary": "#FF7A00",
      },
    },
  },
};`}</CodeBlock>
      <Prose>
        <h2>Per-route variants</h2>
        <p>The Collective ships an optional pattern for nesting <code>ThemeProvider</code> per route — useful when one section of your product wants a different variant from the rest (a writing tool inside a developer dashboard, say). See the showcase&rsquo;s <code>ShowcaseShell</code> for a reference implementation.</p>
        <h2>Building a new variant</h2>
        <p>If you want to publish your own variant for an internal team, copy <code>packages/foundry</code> as a starting point. Every variant follows the same shape: <code>theme.ts</code> + <code>llm/</code> directory. The <a href="/ai">AI tools section</a> covers how to make your variant LLM-discoverable.</p>
      </Prose>
    </>
  );
}

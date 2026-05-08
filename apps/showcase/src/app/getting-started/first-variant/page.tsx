import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Your first variant" };

export default function FirstVariantPage() {
  return (
    <>
      <PageHeader kicker="Get started · 2/4" title="Your first variant" lede="Wrap, render, switch modes." />
      <Prose>
        <h2>Render Carbon, get the variant</h2>
        <p>Use any <code>@carbon/react</code> component as you normally would. The variant&rsquo;s tokens take over via CSS custom properties:</p>
      </Prose>
      <CodeBlock language="tsx">{`import { Button, TextInput, DataTable } from "@carbon/react";

export default function Home() {
  return (
    <div>
      <h1>Production overview</h1>
      <Button kind="primary">Deploy</Button>
      <TextInput id="name" labelText="Service" />
    </div>
  );
}`}</CodeBlock>
      <Prose>
        <h2>Switch modes and densities at runtime</h2>
        <p>Both <code>mode</code> and <code>density</code> are <code>ThemeProvider</code> props. Hold them in state to give users a toggle:</p>
      </Prose>
      <CodeBlock language="tsx">{`import { useState } from "react";
import { ThemeProvider, type ColorMode, type Density } from "@collective/foundation";
import { theme } from "@collective/foundry";

export default function App() {
  const [mode, setMode] = useState<ColorMode>("light");
  const [density, setDensity] = useState<Density>("comfortable");
  return (
    <ThemeProvider theme={theme} mode={mode} density={density}>
      {/* your app */}
    </ThemeProvider>
  );
}`}</CodeBlock>
      <Prose>
        <h2>Reach for CSS variables in custom components</h2>
        <p>Variants expose Carbon&rsquo;s CSS variables (<code>--cds-*</code>) plus a small Collective layer (<code>--collective-*</code>). Use them in your own SCSS or styled-components:</p>
      </Prose>
      <CodeBlock language="css">{`.my-card {
  background: var(--cds-layer);
  color: var(--cds-text-primary);
  border: 1px solid var(--cds-border-subtle);
  border-radius: var(--collective-radius-sm);
}

.my-cta {
  background: var(--collective-accent-primary);
  color: var(--collective-accent-on-primary, white);
  font-family: var(--collective-font-display);
}`}</CodeBlock>
      <Prose>
        <p>Continue to <a href="/getting-started/fonts">your own fonts →</a></p>
      </Prose>
    </>
  );
}

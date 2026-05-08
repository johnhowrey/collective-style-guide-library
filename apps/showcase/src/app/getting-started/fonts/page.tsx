import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";

export const metadata = { title: "Your own fonts" };

export default function FontsPage() {
  return (
    <>
      <PageHeader
        kicker="Get started · 3/4"
        title="Bring your own fonts"
        lede="Each variant declares a pluggable font provider. Adobe Fonts is the default; swap to Google Fonts, self-hosted, or system without forking."
      />
      <Prose>
        <h2>The contract</h2>
        <p>Every variant&rsquo;s theme has a <code>fonts.provider</code> field that&rsquo;s one of four shapes:</p>
      </Prose>
      <CodeBlock language="ts">{`type FontProvider =
  | { type: "adobe"; kitId: string }                     // Adobe Fonts (Typekit)
  | { type: "google"; families: string[]; display?: string } // Google Fonts
  | { type: "self-hosted"; cssUrl: string }              // Your own CSS
  | { type: "system" };                                  // Native system fonts`}</CodeBlock>
      <Prose>
        <h2>Adobe Fonts (default)</h2>
        <p>Variants ship with an Adobe Fonts kit ID pre-wired. The runtime loader injects <code>https://use.typekit.net/&lt;kitId&gt;.css</code>. Authors can swap to their own kit per variant by editing <code>theme.ts</code>:</p>
      </Prose>
      <CodeBlock language="ts">{`provider: { type: "adobe", kitId: "your-kit-id" },`}</CodeBlock>
      <Prose>
        <h2>Google Fonts</h2>
        <p>Override at the consumer level using <code>withFontProvider</code>:</p>
      </Prose>
      <CodeBlock language="tsx">{`import { ThemeProvider, withFontProvider } from "@collective/foundation";
import { theme } from "@collective/foundry";

const themeWithGoogle = withFontProvider(theme, {
  type: "google",
  families: ["Inter:wght@400;500;700", "JetBrains+Mono"],
});

<ThemeProvider theme={themeWithGoogle}>
  <App />
</ThemeProvider>`}</CodeBlock>
      <Prose>
        <h2>Self-hosted</h2>
        <p>If you ship fonts yourself, point at any CSS URL that declares <code>@font-face</code> rules:</p>
      </Prose>
      <CodeBlock language="ts">{`{ type: "self-hosted", cssUrl: "/fonts/inter.css" }`}</CodeBlock>
      <Prose>
        <h2>System (no remote load)</h2>
        <p>For products that can&rsquo;t fetch external fonts (air-gapped enterprise, e-readers, kiosks):</p>
      </Prose>
      <CodeBlock language="ts">{`{ type: "system" }`}</CodeBlock>
      <Prose>
        <p>The variant&rsquo;s <code>family</code> stack still lists branded faces, but they fall through to system fallbacks (Helvetica Neue, system-ui, etc.).</p>
        <h2>Swap typography per environment</h2>
        <p>Useful pattern: production uses Adobe Fonts; staging/dev uses Google Fonts to avoid Typekit domain whitelisting friction. The provider is just data; pick it from <code>process.env</code>.</p>
      </Prose>
    </>
  );
}

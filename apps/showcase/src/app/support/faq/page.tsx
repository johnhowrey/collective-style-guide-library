import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHeader kicker="Support · FAQ" title="Frequently asked questions" />
      <Prose>
        <h2>Is this Carbon, or is it something different?</h2>
        <p>It&rsquo;s Carbon underneath — every variant uses <code>@carbon/react</code> for components and inherits Carbon&rsquo;s accessibility, RTL, and i18n machinery. The variants override Carbon&rsquo;s tokens (color, type, motion, density, radius) to express different visual identities. You get Carbon&rsquo;s rigor with a chosen personality.</p>

        <h2>Can I use these variants commercially?</h2>
        <p>Yes. Carbon is Apache 2.0 and so is The Collective Style Guide Library. The Apache 2.0 NOTICE file at the repo root credits Carbon as required.</p>

        <h2>Do I have to use Adobe Fonts?</h2>
        <p>No. Adobe Fonts is the default for the showcase site, but every variant declares a pluggable <code>FontProvider</code> — Adobe, Google, self-hosted, or system. See <a href="/getting-started/fonts">your own fonts</a>.</p>

        <h2>Can I use a variant without React?</h2>
        <p>Each variant&rsquo;s tokens.json is framework-agnostic — pull it into Style Dictionary, generate CSS variables, and use them anywhere. The <code>foundation</code> package&rsquo;s ThemeProvider is React-only, but you can replicate its behavior in 30 lines of vanilla JS.</p>

        <h2>How do I propose a new variant?</h2>
        <p>Open a GitHub issue with the variant-proposal template (mood, typography direction, color direction, when to use). If accepted, copy <code>packages/foundry/</code> as a starting point and submit a PR.</p>

        <h2>Why these seven specifically?</h2>
        <p>They span a wide swath of design history (Bauhaus, Swiss, signage, publishing, theatrical, classical book, engineering) so almost any product can find a starting point. More variants will join over time.</p>

        <h2>Will the variants stay in sync with Carbon updates?</h2>
        <p>Yes — variants only override tokens. As Carbon ships new components or fixes, variants pick them up automatically. Major Carbon version bumps may require token-name migrations, which we manage centrally.</p>

        <h2>Can I mix variants in one product?</h2>
        <p>Yes — the <code>ThemeProvider</code> is composable. You can render one variant at the app root and another within a specific section. The showcase&rsquo;s <code>ShowcaseShell</code> demonstrates URL-driven variant scoping.</p>

        <h2>What happens if I deploy without Adobe Fonts whitelisting?</h2>
        <p>Adobe Fonts requires the consuming domain to be whitelisted on the Typekit kit. Until that&rsquo;s done, the fonts fail to load and the variant&rsquo;s system fallback stack renders instead — visually similar but not exact. For new domains, swap to <code>{`{ type: "system" }`}</code> until whitelisting completes.</p>

        <h2>Is there a paid tier or hosted service?</h2>
        <p>No. The library is fully open source. The MCP server can be self-hosted; no SaaS layer.</p>
      </Prose>
    </>
  );
}

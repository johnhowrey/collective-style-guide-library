import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "Troubleshooting" };

export default function TroubleshootingPage() {
  return (
    <>
      <PageHeader kicker="Support · Troubleshooting" title="Common issues" />
      <Prose>
        <h2>Tokens aren&rsquo;t applying</h2>
        <p>Make sure you&rsquo;ve imported Carbon&rsquo;s base styles globally (the <code>@carbon/styles</code> reset / themes / theme imports) and that <code>ThemeProvider</code> wraps your tree. The provider applies CSS variables to <code>document.documentElement</code> in <code>useEffect</code>, so server-rendered first paint will show the foundation defaults until hydration.</p>

        <h2>Adobe Fonts aren&rsquo;t loading</h2>
        <p>Three checks: (1) the kit ID is correct in the variant&rsquo;s <code>theme.ts</code>; (2) your domain is whitelisted on the Typekit kit; (3) check <code>document.head</code> for <code>&lt;link data-collective-provider="adobe"&gt;</code>. If the link is there but fonts still fail, the kit may have been removed or the kit&rsquo;s plan downgraded.</p>

        <h2>Dark mode flashes light first</h2>
        <p>The <code>ThemeProvider</code> reads stored preferences in <code>useEffect</code> after hydration; the SSR default is the variant&rsquo;s light mode. To prevent the flash, inject a tiny script that reads <code>localStorage</code> and sets <code>data-mode</code> on the <code>html</code> element before the React tree mounts. Carbon&rsquo;s <code>data-carbon-theme</code> attribute pairs cleanly with this approach.</p>

        <h2>Build error: &ldquo;Cannot find module @collective/foundry&rdquo;</h2>
        <p>If you&rsquo;re using Next.js, add the variant package to <code>transpilePackages</code> in <code>next.config.ts</code>. Workspace packages aren&rsquo;t pre-built so Next needs to compile them on demand.</p>

        <h2>Variant doesn&rsquo;t change when I expect it to</h2>
        <p>The Showcase site uses URL slugs as the source of truth on <code>/variants/[slug]/...</code> routes — the variant switcher is disabled there. Outside of variant routes, the switcher writes to <code>localStorage</code>; clear that key (<code>collective.variant</code>) if state seems stuck.</p>

        <h2>Carbon component looks unchanged after switching variants</h2>
        <p>Some Carbon components have hardcoded styles that don&rsquo;t use CSS variables. The variant&rsquo;s SCSS layer intentionally avoids overriding component internals. If a specific component resists theming, file an issue — we may add an override in the foundation&rsquo;s <code>foundation.scss</code>.</p>

        <h2>RTL layout is broken</h2>
        <p>Pass <code>rtl</code> to <code>ThemeProvider</code>; it sets <code>dir="rtl"</code> on <code>document.documentElement</code>. Carbon&rsquo;s components use logical CSS properties so most chrome flips automatically. If a custom component doesn&rsquo;t flip, replace <code>margin-left</code> / <code>padding-right</code> with <code>margin-inline-start</code> / <code>padding-inline-end</code>.</p>
      </Prose>
    </>
  );
}

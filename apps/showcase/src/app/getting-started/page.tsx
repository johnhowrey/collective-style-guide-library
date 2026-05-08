import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "Getting started" };

export default function GettingStartedPage() {
  return (
    <>
      <PageHeader
        kicker="Get started"
        title="From zero to a styled product in five minutes."
        lede="Pick a variant. Wrap your app. Switch modes. Ship a page. The walkthrough below covers the fast path; deeper guides cover fonts, customization, and design-to-code."
      />
      <Prose>
        <ol>
          <li>
            <Link href="/getting-started/install"><strong>Install</strong></Link> — add the foundation and your chosen variant package.
          </li>
          <li>
            <Link href="/getting-started/first-variant"><strong>Your first variant</strong></Link> — wrap your app, set mode and density, render a Carbon component.
          </li>
          <li>
            <Link href="/getting-started/fonts"><strong>Your own fonts</strong></Link> — Adobe Fonts, Google Fonts, self-hosted, or system. Variants are font-provider pluggable.
          </li>
          <li>
            <Link href="/getting-started/customizing"><strong>Customize tokens</strong></Link> — override CSS variables without forking the variant.
          </li>
        </ol>
        <h2>Already in a Carbon app?</h2>
        <p>
          You can drop a variant in alongside Carbon&rsquo;s default theme — the variant&rsquo;s ThemeProvider sets
          its own <code>data-variant</code> attribute and CSS variables, so existing screens keep their look until
          you migrate them region-by-region.
        </p>
        <h2>Already use Tailwind, styled-components, or another system?</h2>
        <p>
          The variants ship CSS custom properties at <code>:root</code>. Reference them from any styling solution:
          <code>var(--collective-accent-primary)</code>, <code>var(--cds-text-primary)</code>, etc. The DTCG
          tokens.json in each variant is the source of truth and is meant to be exported anywhere.
        </p>
      </Prose>
    </>
  );
}

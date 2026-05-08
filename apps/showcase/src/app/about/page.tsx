import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About"
        title="About The Collective Style Guide Library"
        lede="Why these variants exist, what they're for, and what they're not."
      />
      <Prose>
        <h2>The premise</h2>
        <p>Most enterprise design systems converge on a single visual language — usually a neutral, blue-accented, slightly bland one. That language is fine for many products and wrong for many others. The Collective Style Guide Library treats visual identity as a choice, not a default: seven distinct, opinionated style guides, each carefully drawn, each on the same accessible foundation.</p>

        <h2>The foundation</h2>
        <p>IBM Carbon. Carbon ships components, accessibility, RTL, motion, density, and i18n. Variants here only override the visual tokens. This means a variant&rsquo;s WCAG AA compliance, keyboard interactions, and screen-reader support are inherited — not re-litigated.</p>

        <h2>The variants</h2>
        <p>Each variant is rooted in a tradition: Neo Bauhaus (Foundry), International Style (Vellum), Schiphol wayfinding (Beacon), Penguin Books (Marginalia), The Public Theater (Proscenium), Bringhurst&rsquo;s typography (Caesura), and modern engineering tooling (Cipher). The choices aren&rsquo;t arbitrary — they span a wide stylistic range so most products will find a starting point.</p>

        <h2>The AI-readable layer</h2>
        <p>Every variant ships an <code>llm/</code> directory: DTCG tokens, principles, content rules, motion, i18n, components manifest, and a starter prompt. Designers using Claude or Cursor can point an LLM at a variant and get on-brand output immediately. Figma Code Connect mappings tie design library components to React variants. An MCP server exposes the whole library to any compatible agent.</p>

        <h2>What this is not</h2>
        <ul>
          <li><strong>Not a SaaS.</strong> No hosted service, no seat counts, no analytics on your usage.</li>
          <li><strong>Not a styling framework.</strong> Carbon is the framework; variants are visual identities applied to it.</li>
          <li><strong>Not generic templates.</strong> Each variant is opinionated — voice, motion, density, palette. If you want generic, use Carbon directly.</li>
        </ul>

        <h2>License</h2>
        <p>Apache 2.0. See <a href="/license">License & Notice</a>.</p>
      </Prose>
    </>
  );
}

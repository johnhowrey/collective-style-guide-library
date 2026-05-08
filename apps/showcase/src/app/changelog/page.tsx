import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "Changelog" };

export default function ChangelogPage() {
  return (
    <>
      <PageHeader
        kicker="Reference"
        title="Changelog"
        lede="Library-wide changes. Per-variant changelogs live in each package."
      />
      <Prose>
        <h2>0.0.0 — Initial scaffold</h2>
        <ul>
          <li>Seven variants scaffolded: Foundry, Vellum, Beacon, Marginalia, Proscenium, Caesura, Cipher.</li>
          <li>Foundation contract: <code>Theme</code>, <code>FontProvider</code>, <code>ThemeProvider</code>, <code>withFontProvider</code>.</li>
          <li>Per-variant LLM artifacts: tokens (DTCG), principles, content, motion, i18n, starter prompt, components manifest.</li>
          <li>Pluggable font provider: Adobe Fonts, Google Fonts, self-hosted, system.</li>
          <li>Showcase Next.js site: variants, components, templates (8 page templates × 7 variants), AI/MCP guides.</li>
          <li>MCP server scaffolded for local + remote use.</li>
          <li>/llms.txt index and per-variant /api/llm/[slug]/[doc] routes.</li>
        </ul>
      </Prose>
    </>
  );
}

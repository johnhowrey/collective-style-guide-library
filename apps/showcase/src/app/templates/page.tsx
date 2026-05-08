import Link from "next/link";
import { VARIANTS } from "@/lib/variants";
import { TEMPLATES, TEMPLATE_SLUGS } from "@/lib/sitemap";
import { PageHeader } from "@/components/PageHeader/PageHeader";

export const metadata = { title: "Templates" };

export default function TemplatesIndex() {
  return (
    <>
      <PageHeader
        kicker="Templates"
        title="Page templates × seven variants."
        lede="Each template is a complete page composition in Carbon. Render it in any of the seven variants and you get seven visual studies for free. Open a variant's templates section to view rendered output."
      />

      <div style={{ display: "grid", gap: 32 }}>
        {TEMPLATE_SLUGS.map((t) => (
          <section
            key={t}
            style={{
              borderTop: "1px solid var(--cds-border-subtle)",
              paddingTop: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--collective-font-display, var(--collective-font-sans))",
                fontSize: 22,
                fontWeight: 700,
                margin: "0 0 4px",
              }}
            >
              {TEMPLATES[t].label}
            </h2>
            <p style={{ color: "var(--cds-text-secondary)", margin: "0 0 16px", fontSize: 14 }}>
              {TEMPLATES[t].description}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {VARIANTS.map((v) => (
                <Link
                  key={v.meta.id}
                  href={`/variants/${v.meta.id}/templates/${t}`}
                  style={{
                    padding: "8px 12px",
                    border: "1px solid var(--cds-border-subtle)",
                    borderRadius: "var(--collective-radius-sm, 0)",
                    fontFamily: "var(--collective-font-mono, monospace)",
                    fontSize: 12,
                    color: "var(--cds-text-primary)",
                    textDecoration: "none",
                    background: "var(--cds-layer)",
                  }}
                >
                  {v.meta.name} →
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

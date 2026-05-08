import Link from "next/link";
import { VARIANTS } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";

export const metadata = { title: "Components" };

export default function ComponentsIndex() {
  return (
    <>
      <PageHeader
        kicker="Components"
        title="Carbon components, seven ways."
        lede="Every variant inherits the same Carbon component foundation — buttons, forms, tables, tabs, notifications. The visual language is what differs. Pick a variant to see the component exhibit."
      />

      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}>
        {VARIANTS.map((v) => (
          <Link
            key={v.meta.id}
            href={`/variants/${v.meta.id}/components`}
            style={{
              display: "block",
              padding: 20,
              background: "var(--cds-layer)",
              border: "1px solid var(--cds-border-subtle)",
              borderRadius: "var(--collective-radius-sm, 0)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--collective-font-display, var(--collective-font-sans))",
                fontSize: 18,
                fontWeight: 700,
                margin: "0 0 4px",
              }}
            >
              {v.meta.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--collective-font-mono, monospace)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--cds-text-secondary)",
                margin: 0,
              }}
            >
              {v.meta.inspiration}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

import { VARIANTS } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";

export const metadata = { title: "Compare" };

function Swatch({ value }: { value: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span
        aria-hidden="true"
        style={{
          width: 14,
          height: 14,
          background: value,
          border: "1px solid var(--cds-border-subtle)",
          borderRadius: 2,
          display: "inline-block",
        }}
      />
      <code style={{ fontSize: 11 }}>{value}</code>
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <PageHeader
        kicker="Reference"
        title="Compare variants"
        lede="Side-by-side comparison of every variant: palette, type, radius, density, motion personality, i18n stance."
      />

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 13,
            fontFamily: "var(--collective-font-mono, monospace)",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid var(--cds-border-strong)" }}>
              <th style={th()}>Variant</th>
              <th style={th()}>Inspiration</th>
              <th style={th()}>Light bg</th>
              <th style={th()}>Dark bg</th>
              <th style={th()}>Accent</th>
              <th style={th()}>Radius</th>
              <th style={th()}>Body type</th>
              <th style={th()}>Motion</th>
              <th style={th()}>RTL</th>
            </tr>
          </thead>
          <tbody>
            {VARIANTS.map((v) => (
              <tr key={v.meta.id} style={{ borderBottom: "1px solid var(--cds-border-subtle)" }}>
                <td style={td()}>
                  <strong>{v.meta.name}</strong>
                </td>
                <td style={td()}>{v.meta.inspiration}</td>
                <td style={td()}>
                  <Swatch value={v.modes.light.cssVariables["--cds-background"] ?? ""} />
                </td>
                <td style={td()}>
                  <Swatch value={v.modes.dark.cssVariables["--cds-background"] ?? ""} />
                </td>
                <td style={td()}>
                  <Swatch value={v.modes.light.cssVariables["--collective-accent-primary"] ?? ""} />
                </td>
                <td style={td()}>{v.modes.light.cssVariables["--collective-radius-md"] ?? "—"}</td>
                <td style={td()}>{v.fonts.family.serif ? "serif" : "sans"}</td>
                <td style={td(280)}>{v.motion.character}</td>
                <td style={td()}>{v.i18n.rtl.supported ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function th(): React.CSSProperties {
  return {
    textAlign: "left",
    padding: "10px 12px",
    fontSize: 11,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--cds-text-secondary)",
    fontWeight: 500,
  };
}

function td(maxWidth = 0): React.CSSProperties {
  return {
    padding: "12px",
    color: "var(--cds-text-primary)",
    verticalAlign: "top",
    maxWidth: maxWidth || undefined,
  };
}

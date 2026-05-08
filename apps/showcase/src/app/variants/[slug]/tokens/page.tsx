import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { readVariantText } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { TokenSwatch } from "@/components/TokenSwatch/TokenSwatch";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import { CopyForLLM } from "@/components/CopyForLLM/CopyForLLM";
import styles from "./tokens.module.scss";

interface ColorToken {
  $value?: string;
  $type?: string;
  $description?: string;
  $extensions?: { "collective.contrast"?: { vs: string; ratio: number; wcag: string } };
}

function flattenColors(
  obj: Record<string, unknown>,
  prefix = "",
): Array<{ name: string; token: ColorToken }> {
  const out: Array<{ name: string; token: ColorToken }> = [];
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith("$")) continue;
    const name = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && "$value" in value) {
      out.push({ name, token: value as ColorToken });
    } else if (value && typeof value === "object") {
      out.push(...flattenColors(value as Record<string, unknown>, name));
    }
  }
  return out;
}

export default async function TokensPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  const json = await readVariantText(slug, "tokens.json");
  if (!v || !json) notFound();

  const tokens = JSON.parse(json) as { color?: { light?: Record<string, unknown>; dark?: Record<string, unknown> } };
  const lightColors = flattenColors(tokens.color?.light ?? {});
  const darkColors = flattenColors(tokens.color?.dark ?? {});

  return (
    <>
      <PageHeader
        kicker={`${v.meta.name} · tokens`}
        title="Design tokens"
        lede="DTCG-format design tokens. The source of truth for both runtime CSS variables and Figma export."
        actions={<CopyForLLM prompt={json} label="Copy tokens.json" />}
      />

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Light mode colors</h2>
        <div className={styles.swatches}>
          {lightColors
            .filter((c) => c.token.$value && (c.token.$type === "color" || !c.token.$type))
            .map((c) => (
              <TokenSwatch
                key={c.name}
                name={c.name}
                value={String(c.token.$value)}
                description={c.token.$description}
                contrast={c.token.$extensions?.["collective.contrast"] as { vs: string; ratio: number; wcag: string } | undefined}
              />
            ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Dark mode colors</h2>
        <div className={styles.swatches}>
          {darkColors
            .filter((c) => c.token.$value && (c.token.$type === "color" || !c.token.$type))
            .map((c) => (
              <TokenSwatch
                key={c.name}
                name={c.name}
                value={String(c.token.$value)}
                description={c.token.$description}
                contrast={c.token.$extensions?.["collective.contrast"] as { vs: string; ratio: number; wcag: string } | undefined}
              />
            ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Source</h2>
        <p className={styles.note}>
          Token source lives at <code>packages/{slug}/llm/tokens.json</code> and is also served at{" "}
          <code>/api/llm/{slug}/tokens</code> for agent consumption.
        </p>
        <CodeBlock filename="tokens.json (excerpt)" language="JSON">
          {JSON.stringify(tokens, null, 2).slice(0, 1400) + "\n…"}
        </CodeBlock>
      </section>
    </>
  );
}

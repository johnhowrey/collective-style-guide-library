import Link from "next/link";
import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { CopyForLLM } from "@/components/CopyForLLM/CopyForLLM";
import { readVariantText } from "@/lib/markdown";
import styles from "./overview.module.scss";

export default async function VariantOverview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  if (!v) notFound();

  const starterPrompt = (await readVariantText(slug, "starter-prompt.md")) ?? "";

  return (
    <>
      <PageHeader
        kicker={v.meta.inspiration}
        title={v.meta.name}
        lede={v.meta.tagline}
        meta={
          <>
            <span>v{v.meta.version}</span>
            <span>·</span>
            <span>modes: {Object.keys(v.modes).join(", ")}</span>
            <span>·</span>
            <span>RTL: {v.i18n.rtl.supported ? "yes" : "no"}</span>
            <span>·</span>
            <span>{v.i18n.recommendedLocales.length} locales</span>
          </>
        }
        actions={<CopyForLLM prompt={starterPrompt} label="Copy starter prompt" />}
      />

      <section className={styles.grid}>
        <Link href={`/variants/${slug}/tokens`} className={styles.card}>
          <h3>Tokens</h3>
          <p>Light / dark, density, motion, type. DTCG-formatted source.</p>
        </Link>
        <Link href={`/variants/${slug}/principles`} className={styles.card}>
          <h3>Principles</h3>
          <p>How this variant thinks. Do / don&rsquo;t. When to choose.</p>
        </Link>
        <Link href={`/variants/${slug}/voice`} className={styles.card}>
          <h3>Voice & content</h3>
          <p>Microcopy patterns, button labels, error tone, empty states.</p>
        </Link>
        <Link href={`/variants/${slug}/motion`} className={styles.card}>
          <h3>Motion</h3>
          <p>{v.motion.character}</p>
        </Link>
        <Link href={`/variants/${slug}/i18n`} className={styles.card}>
          <h3>i18n & RTL</h3>
          <p>Locale fitness, font fallbacks, RTL stance.</p>
        </Link>
        <Link href={`/variants/${slug}/components`} className={styles.card}>
          <h3>Components</h3>
          <p>Carbon components rendered in {v.meta.name}.</p>
        </Link>
        <Link href={`/variants/${slug}/templates`} className={styles.card}>
          <h3>Templates</h3>
          <p>Page templates ready to copy. Dashboard, settings, listing, more.</p>
        </Link>
      </section>

      <section className={styles.specs}>
        <h2>At a glance</h2>
        <dl>
          <dt>Inspiration</dt>
          <dd>{v.meta.inspiration}</dd>
          <dt>Sans</dt>
          <dd>
            <code>{v.fonts.family.sans}</code>
          </dd>
          {v.fonts.family.serif ? (
            <>
              <dt>Serif</dt>
              <dd>
                <code>{v.fonts.family.serif}</code>
              </dd>
            </>
          ) : null}
          {v.fonts.family.display ? (
            <>
              <dt>Display</dt>
              <dd>
                <code>{v.fonts.family.display}</code>
              </dd>
            </>
          ) : null}
          {v.fonts.family.mono ? (
            <>
              <dt>Mono</dt>
              <dd>
                <code>{v.fonts.family.mono}</code>
              </dd>
            </>
          ) : null}
          <dt>Font provider</dt>
          <dd>
            <code>{v.fonts.provider.type}</code>
            {v.fonts.provider.type === "adobe" ? <> (kit: <code>{v.fonts.provider.kitId}</code>)</> : null}
          </dd>
          <dt>Recommended locales</dt>
          <dd>
            <code>{v.i18n.recommendedLocales.join(", ")}</code>
          </dd>
        </dl>
      </section>
    </>
  );
}

import Link from "next/link";
import { VARIANTS } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <>
      <PageHeader
        kicker="The Collective Style Guide Library"
        title="Seven enterprise-ready style guides on one accessible foundation."
        lede={
          <>
            Each variant is a complete visual identity — typography, color, motion, density, voice. All
            inherit IBM Carbon&rsquo;s WCAG AA component foundation, RTL support, and component coverage.
            Pick one, plug it in, ship a product that doesn&rsquo;t look like everyone else&rsquo;s.
          </>
        }
        meta={
          <>
            <span>v0.0.0</span>
            <span>·</span>
            <span>7 variants</span>
            <span>·</span>
            <span>Apache 2.0</span>
          </>
        }
      />

      <section className={styles.cta}>
        <Link href="/getting-started" className={styles.primaryCta}>
          Get started →
        </Link>
        <Link href="/variants" className={styles.secondaryCta}>
          Browse variants
        </Link>
        <Link href="/ai" className={styles.secondaryCta}>
          For AI tools (Claude / Cursor / Figma)
        </Link>
      </section>

      <section className={styles.gallery}>
        <h2 className={styles.sectionTitle}>The variants</h2>
        <div className={styles.grid}>
          {VARIANTS.map((v) => (
            <Link key={v.meta.id} href={`/variants/${v.meta.id}`} className={styles.card}>
              <span
                className={styles.swatch}
                style={{
                  background: v.modes.light.cssVariables["--collective-accent-primary"] ?? "#000",
                }}
                aria-hidden="true"
              />
              <h3 className={styles.cardTitle}>{v.meta.name}</h3>
              <p className={styles.cardKicker}>{v.meta.inspiration}</p>
              <p className={styles.cardLede}>{v.meta.tagline}</p>
              <span className={styles.cardLink}>Open →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.trio}>
        <article className={styles.feature}>
          <p className={styles.featureKicker}>For designers</p>
          <h3 className={styles.featureTitle}>Pick a variant. Bring your fonts.</h3>
          <p>
            Adobe Fonts, Google Fonts, self-hosted, or system. Every variant declares a pluggable font
            provider — swap typography without forking.
          </p>
          <Link href="/getting-started/fonts" className={styles.featureLink}>
            Configure fonts →
          </Link>
        </article>
        <article className={styles.feature}>
          <p className={styles.featureKicker}>For engineers</p>
          <h3 className={styles.featureTitle}>One ThemeProvider. Carbon underneath.</h3>
          <p>
            Wrap your app, set <code>mode</code> and <code>density</code>, and every Carbon component
            inherits the variant&rsquo;s tokens. RTL, accessibility, motion all included.
          </p>
          <Link href="/getting-started/install" className={styles.featureLink}>
            Install →
          </Link>
        </article>
        <article className={styles.feature}>
          <p className={styles.featureKicker}>For AI tools</p>
          <h3 className={styles.featureTitle}>Point Claude or Cursor at a variant.</h3>
          <p>
            Each variant ships an <code>llms.txt</code>, DTCG tokens, content rules, motion principles,
            i18n notes, and a starter prompt. Plus an MCP server for live-context use.
          </p>
          <Link href="/ai" className={styles.featureLink}>
            Design-to-code workflows →
          </Link>
        </article>
      </section>
    </>
  );
}

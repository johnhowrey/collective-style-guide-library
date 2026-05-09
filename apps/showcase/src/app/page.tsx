import Link from "next/link";
import { VARIANTS } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./home.module.scss";

export const metadata = { title: "Home" };

const FEATURE_TILES = [
  {
    label: "Get started",
    href: "/getting-started",
    blurb: "Install in five minutes. Pick a variant. Wrap your app. Your existing Carbon screens keep working.",
    items: ["Install", "Your first variant", "Bring your own fonts", "Customizing tokens"],
  },
  {
    label: "Components",
    href: "/components",
    blurb: "The same Carbon components — buttons, forms, tables, tabs — rendered in every variant's tokens.",
    items: ["Cross-variant index", "Per-variant exhibits", "Carbon underneath"],
  },
  {
    label: "Templates",
    href: "/templates",
    blurb: "Eight page templates — dashboard, listing, detail, settings, login, marketing, pricing, empty state.",
    items: ["Per-variant rendering", "Copy-and-fork ready", "Same template × 7 visual studies"],
  },
  {
    label: "Design-to-code (AI)",
    href: "/ai",
    blurb: "Designers point Claude, Cursor, or Figma at any variant and get on-brand code.",
    items: ["Per-variant llms.txt", "DTCG token export", "MCP server", "Figma Code Connect"],
  },
  {
    label: "Compare variants",
    href: "/compare",
    blurb: "Side-by-side: palette, type, radius, density, motion personality, i18n stance.",
    items: ["Decision aid", "Token-level diff"],
  },
  {
    label: "Support",
    href: "/support",
    blurb: "FAQ, troubleshooting, changelog. Apache 2.0 — built on IBM Carbon.",
    items: ["FAQ", "Troubleshooting", "Changelog", "License & Notice"],
  },
];

export default function HomePage() {
  return (
    <>
      <PageHeader
        kicker="The Collective Style Guide Library"
        title="Seven enterprise-ready style guides on one accessible foundation."
        lede={
          <>
            Each variant is a complete visual identity — typography, color, motion, density, voice.
            All inherit IBM Carbon&rsquo;s WCAG AA component foundation, RTL support, and component
            coverage. Pick one, plug it in, ship a product that doesn&rsquo;t look like everyone
            else&rsquo;s.
          </>
        }
        meta={
          <>
            <span>v0.0.0</span>
            <span>·</span>
            <span>7 variants</span>
            <span>·</span>
            <span>Apache 2.0</span>
            <span>·</span>
            <span>Built on IBM Carbon</span>
          </>
        }
      />

      <section className={styles.cta}>
        <Link href="/demo" className={styles.primaryCta}>
          Open the live preview →
        </Link>
        <Link href="/variants" className={styles.secondaryCta}>
          Browse variants
        </Link>
        <Link href="/getting-started" className={styles.secondaryCta}>
          Get started
        </Link>
        <Link href="/ai" className={styles.secondaryCta}>
          For Claude / Cursor / Figma
        </Link>
      </section>

      <section className={styles.previewBanner}>
        <div className={styles.previewBannerText}>
          <p className={styles.previewKicker}>Live preview</p>
          <h2 className={styles.previewTitle}>
            See every variant in a real product, not just a swatch.
          </h2>
          <p className={styles.previewLede}>
            <Link href="/demo" className={styles.previewLink}>/demo</Link> runs a complete cloud-platform
            UI — workspace home, project page with investigation blocks, full droplets list, database
            create flow, model playground, notifications center, onboarding, modals. Switch the variant
            in the header and the entire product re-skins.
          </p>
        </div>
        <div className={styles.previewLinks}>
          {[
            { label: "Workspace home", href: "/demo/home" },
            { label: "Project", href: "/demo/project" },
            { label: "Droplets list", href: "/demo/droplets" },
            { label: "Playground", href: "/demo/playground" },
            { label: "Notifications", href: "/demo/notifications" },
            { label: "Onboarding", href: "/demo/onboarding" },
          ].map((p) => (
            <Link key={p.href} href={p.href} className={styles.previewLinkRow}>
              {p.label} →
            </Link>
          ))}
        </div>
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

      <section className={styles.tiles}>
        <h2 className={styles.sectionTitle}>Documentation</h2>
        <div className={styles.tilesGrid}>
          {FEATURE_TILES.map((tile) => (
            <Link key={tile.href} href={tile.href} className={styles.tile}>
              <h3 className={styles.tileTitle}>{tile.label} →</h3>
              <p className={styles.tileBlurb}>{tile.blurb}</p>
              <ul className={styles.tileList}>
                {tile.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

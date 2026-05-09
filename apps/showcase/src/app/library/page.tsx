import Link from "next/link";
import { VARIANTS } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./library.module.scss";

export const metadata = { title: "Style Guide Library" };

const SECTIONS = [
  {
    label: "Get started",
    href: "/getting-started",
    items: [
      { label: "Install", href: "/getting-started/install" },
      { label: "Your first variant", href: "/getting-started/first-variant" },
      { label: "Your own fonts", href: "/getting-started/fonts" },
      { label: "Customizing tokens", href: "/getting-started/customizing" },
    ],
  },
  {
    label: "Reference",
    href: "/components",
    items: [
      { label: "Components", href: "/components" },
      { label: "Templates", href: "/templates" },
      { label: "Compare variants", href: "/compare" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    label: "Design-to-code (AI)",
    href: "/ai",
    items: [
      { label: "Claude Code", href: "/ai/claude" },
      { label: "Cursor", href: "/ai/cursor" },
      { label: "Figma", href: "/ai/figma" },
      { label: "MCP server", href: "/ai/mcp" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    items: [
      { label: "FAQ", href: "/support/faq" },
      { label: "Troubleshooting", href: "/support/troubleshooting" },
      { label: "About", href: "/about" },
      { label: "License & Notice", href: "/license" },
    ],
  },
];

export default function LibraryHomePage() {
  return (
    <>
      <PageHeader
        kicker="The Collective Style Guide Library"
        title="Seven enterprise-ready visual identities."
        lede={
          <>
            The pages you&rsquo;re browsing — Workspace, Project, Droplets, Playground,
            Notifications, Onboarding, modals — render in whichever variant you select. The library
            below documents the variants themselves: tokens, principles, voice, motion, i18n.
          </>
        }
      />

      <section className={styles.variantsBlock}>
        <h2 className={styles.sectionTitle}>The variants</h2>
        <div className={styles.variantsGrid}>
          {VARIANTS.map((v) => (
            <Link key={v.meta.id} href={`/variants/${v.meta.id}`} className={styles.variantCard}>
              <span
                className={styles.variantSwatch}
                style={{
                  background: v.modes.light.cssVariables["--collective-accent-primary"] ?? "#000",
                }}
                aria-hidden="true"
              />
              <div className={styles.variantText}>
                <h3>{v.meta.name}</h3>
                <p className={styles.variantKicker}>{v.meta.inspiration}</p>
                <p className={styles.variantTagline}>{v.meta.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.docsBlock}>
        <h2 className={styles.sectionTitle}>Documentation</h2>
        <div className={styles.docsGrid}>
          {SECTIONS.map((s) => (
            <article key={s.label} className={styles.docCard}>
              <header>
                <Link href={s.href} className={styles.docTitle}>
                  {s.label} →
                </Link>
              </header>
              <ul className={styles.docList}>
                {s.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href}>{it.label}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

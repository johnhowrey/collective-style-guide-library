import Link from "next/link";
import { VARIANTS } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./variants.module.scss";

export const metadata = { title: "Variants" };

export default function VariantsIndex() {
  return (
    <>
      <PageHeader
        kicker="The library"
        title="Seven variants. One foundation."
        lede="Each variant is a complete visual identity — typography, color, motion, density, voice, and an LLM-ready content layer. Pick the one that fits your product; switch later if the product turns out to want a different feeling."
      />

      <div className={styles.grid}>
        {VARIANTS.map((v) => (
          <Link key={v.meta.id} href={`/variants/${v.meta.id}`} className={styles.card}>
            <span
              className={styles.swatch}
              style={{
                background: v.modes.light.cssVariables["--collective-accent-primary"] ?? "#000",
                color: v.modes.light.cssVariables["--collective-accent-on-primary"] ?? "#fff",
              }}
            >
              {v.meta.name.charAt(0)}
            </span>
            <div className={styles.text}>
              <h3 className={styles.cardTitle}>{v.meta.name}</h3>
              <p className={styles.kicker}>{v.meta.inspiration}</p>
              <p className={styles.lede}>{v.meta.tagline}</p>
              <ul className={styles.facts}>
                <li>
                  Modes: <code>{Object.keys(v.modes).join(", ")}</code>
                </li>
                <li>
                  Densities: <code>comfortable{v.densities.compact ? ", compact" : ""}</code>
                </li>
                <li>
                  RTL: <code>{v.i18n.rtl.supported ? "yes" : "no"}</code>
                </li>
                <li>
                  Locales: <code>{v.i18n.recommendedLocales.length}</code>
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

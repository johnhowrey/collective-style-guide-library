import Link from "next/link";
import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { TEMPLATES, TEMPLATE_SLUGS } from "@/lib/sitemap";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./templates-gallery.module.scss";

export default async function VariantTemplates({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  if (!v) notFound();

  return (
    <>
      <PageHeader
        kicker={`${v.meta.name} · templates`}
        title="Page templates"
        lede="Ready-to-copy page templates rendered in this variant. Open any template to see the rendering, copy the source, or fork it as a starting point."
      />

      <div className={styles.grid}>
        {TEMPLATE_SLUGS.map((t) => (
          <Link
            key={t}
            href={`/variants/${slug}/templates/${t}`}
            className={styles.card}
          >
            <h3>{TEMPLATES[t].label}</h3>
            <p>{TEMPLATES[t].description}</p>
            <span className={styles.cardLink}>Open →</span>
          </Link>
        ))}
      </div>
    </>
  );
}

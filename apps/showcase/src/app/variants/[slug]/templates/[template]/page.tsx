import Link from "next/link";
import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { TEMPLATES, TEMPLATE_SLUGS, type TemplateSlug } from "@/lib/sitemap";
import { TEMPLATE_COMPONENTS } from "@/components/templates";
import { PageHeader } from "@/components/PageHeader/PageHeader";

export async function generateStaticParams() {
  const out: Array<{ slug: string; template: string }> = [];
  for (const slug of Object.keys(VARIANTS_BY_ID)) {
    for (const template of TEMPLATE_SLUGS) {
      out.push({ slug, template });
    }
  }
  return out;
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ slug: string; template: string }>;
}) {
  const { slug, template } = await params;
  const v = VARIANTS_BY_ID[slug];
  const isTemplate = (TEMPLATE_SLUGS as ReadonlyArray<string>).includes(template);
  if (!v || !isTemplate) notFound();

  const Component = TEMPLATE_COMPONENTS[template as TemplateSlug];
  const meta = TEMPLATES[template as TemplateSlug];

  return (
    <>
      <PageHeader
        kicker={`${v.meta.name} · ${meta.label}`}
        title={meta.label}
        lede={meta.description}
        actions={
          <Link
            href={`/variants/${slug}/templates`}
            style={{
              fontFamily: "var(--collective-font-mono, monospace)",
              fontSize: 12,
              color: "var(--cds-text-secondary)",
              textDecoration: "none",
            }}
          >
            ← All templates
          </Link>
        }
      />
      <Component />
    </>
  );
}

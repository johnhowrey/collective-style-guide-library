import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { readVariantDoc } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Markdown } from "@/components/Markdown/Markdown";
import { CopyForLLM } from "@/components/CopyForLLM/CopyForLLM";

export default async function PrinciplesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  const doc = await readVariantDoc(slug, "principles.md");
  if (!v || !doc) notFound();

  return (
    <>
      <PageHeader
        kicker={`${v.meta.name} · principles`}
        title="Design principles"
        lede="How this variant thinks. Voice, character, do and don't, when to choose it."
        actions={<CopyForLLM prompt={doc.raw} label="Copy as context" />}
      />
      <Markdown html={doc.html} />
    </>
  );
}

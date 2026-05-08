import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { readVariantDoc } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Markdown } from "@/components/Markdown/Markdown";
import { CopyForLLM } from "@/components/CopyForLLM/CopyForLLM";

export default async function VoicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  const doc = await readVariantDoc(slug, "content.md");
  if (!v || !doc) notFound();

  return (
    <>
      <PageHeader
        kicker={`${v.meta.name} · voice & content`}
        title="Voice & microcopy"
        lede="Patterns for buttons, headings, errors, empty states, notifications. The vocabulary the variant speaks."
        actions={<CopyForLLM prompt={doc.raw} label="Copy as context" />}
      />
      <Markdown html={doc.html} />
    </>
  );
}

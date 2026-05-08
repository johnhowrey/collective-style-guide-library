import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { readVariantDoc } from "@/lib/markdown";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Markdown } from "@/components/Markdown/Markdown";
import { CopyForLLM } from "@/components/CopyForLLM/CopyForLLM";

export default async function MotionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  const doc = await readVariantDoc(slug, "motion.md");
  if (!v || !doc) notFound();

  return (
    <>
      <PageHeader
        kicker={`${v.meta.name} · motion`}
        title="Motion"
        lede={v.motion.character}
        actions={<CopyForLLM prompt={doc.raw} label="Copy as context" />}
      />
      <Markdown html={doc.html} />
    </>
  );
}

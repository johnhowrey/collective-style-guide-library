import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ComponentExhibit } from "@/components/ComponentExhibit/ComponentExhibit";

export default async function ComponentsPage({
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
        kicker={`${v.meta.name} · components`}
        title="Carbon components in this variant"
        lede="The same Carbon component foundation, rendered in this variant's tokens. Switch the variant in the header to see how each component changes character."
      />
      <ComponentExhibit />
    </>
  );
}

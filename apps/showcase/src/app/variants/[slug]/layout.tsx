import { notFound } from "next/navigation";
import { VARIANTS_BY_ID } from "@/lib/variants";
import { VariantSubnav } from "@/components/VariantSubnav/VariantSubnav";

export async function generateStaticParams() {
  return Object.keys(VARIANTS_BY_ID).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = VARIANTS_BY_ID[slug];
  if (!v) return {};
  return {
    title: v.meta.name,
    description: v.meta.tagline,
  };
}

export default async function VariantLayout({
  params,
  children,
}: {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}) {
  const { slug } = await params;
  if (!VARIANTS_BY_ID[slug]) notFound();

  return (
    <>
      <VariantSubnav variantId={slug} />
      {children}
    </>
  );
}

import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "License & Notice" };

export default function LicensePage() {
  return (
    <>
      <PageHeader kicker="Reference" title="License & Notice" />
      <Prose>
        <h2>License</h2>
        <p>The Collective Style Guide Library is licensed under the <strong>Apache License, Version 2.0</strong>. See the <code>LICENSE</code> file at the repository root for the full text.</p>
        <h2>Notice</h2>
        <p>This product includes software developed at IBM Corp. — specifically the <a href="https://carbondesignsystem.com" target="_blank" rel="noreferrer noopener">IBM Carbon Design System</a> (Apache 2.0). Carbon provides the underlying component foundation; this library overrides Carbon&rsquo;s design tokens to express alternative visual identities.</p>
        <h2>Adobe Fonts</h2>
        <p>The showcase site loads typefaces from Adobe Fonts (Typekit). Adobe Fonts terms apply to font use; consult <a href="https://fonts.adobe.com/legal" target="_blank" rel="noreferrer noopener">Adobe&rsquo;s licensing</a> for details. Self-hosting variants can swap providers via the pluggable <code>FontProvider</code> contract.</p>
        <h2>Trademarks</h2>
        <p>Carbon, IBM, and the IBM logo are trademarks of International Business Machines Corp. References to design traditions (Penguin Books, The Public Theater, Schiphol, etc.) are inspirational, not affiliation claims.</p>
      </Prose>
    </>
  );
}

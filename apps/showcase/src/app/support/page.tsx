import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Prose } from "@/components/Prose/Prose";

export const metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <>
      <PageHeader
        kicker="Support"
        title="How to get unstuck."
        lede="The library is open source, Apache 2.0. Most questions resolve via FAQ or troubleshooting; deeper issues open in GitHub."
      />
      <Prose>
        <h2>Self-serve</h2>
        <ul>
          <li><Link href="/support/faq">FAQ</Link> — common questions about variants, licensing, fonts, AI tooling.</li>
          <li><Link href="/support/troubleshooting">Troubleshooting</Link> — common build, runtime, and theme-application issues.</li>
        </ul>
        <h2>GitHub</h2>
        <p>Bug reports, feature requests, and variant proposals belong in GitHub Issues. Pull requests welcome — see <code>CONTRIBUTING.md</code> for the variant proposal template.</p>
        <h2>Direct support</h2>
        <p>This is a community library; there&rsquo;s no commercial support tier. If you need design system help for an enterprise rollout, consult a design system practice.</p>
      </Prose>
    </>
  );
}

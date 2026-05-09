import Link from "next/link";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./demo.module.scss";

export const metadata = { title: "Live preview" };

const PAGES = [
  {
    label: "Workspace home",
    href: "/demo/home",
    blurb:
      "Greeting + agent-pill standup + focus block + four evidenced items + mint confidence pill + collapsed snapshot with KPIs, activity, workspaces, getting-started, spend.",
  },
  {
    label: "Project home",
    href: "/demo/project",
    blurb:
      "Project hero with status pill + investigation block (\"copilot-db-prod will fill in 12 days\") + focus actions + three attention items + tabs + deploy frequency + latency snapshot + team + integrations.",
  },
  {
    label: "Droplets list",
    href: "/demo/droplets",
    blurb:
      "Twelve droplets across six regions. Per-row CPU/memory bars, status pills, IPv4, tags, search, region filter, tag filter chips, pagination.",
  },
  {
    label: "Database create",
    href: "/demo/database/create",
    blurb:
      "Four-step flow — engine (6 options), region (8 with continent + latency), plan (6 in radio table), name + VPC, live summary card with monthly cost.",
  },
  {
    label: "Inference playground",
    href: "/demo/playground",
    blurb:
      "Five models with price + latency + tag, parameter sliders (temperature, max tokens, top-p), system prompt, prompt area, response with token stats and inline-bold formatting.",
  },
  {
    label: "Notifications center",
    href: "/demo/notifications",
    blurb:
      "Eleven notifications grouped Now / Earlier today / Yesterday / Last week. Per-type colored dots (agentic/billing/infra/team/security), category filter, unread indicator, action buttons.",
  },
  {
    label: "Onboarding",
    href: "/demo/onboarding",
    blurb:
      "Six-step first-run with progress bar. Current step (Create workspace) detailed with name input + 6 project templates + bring-your-own-repo tip.",
  },
  {
    label: "Modal — large",
    href: "/demo/modal-large",
    blurb:
      "Migration assistant — four-step timeline, plan diff (current → new), three confirmation checkboxes, schedule CTA.",
  },
  {
    label: "Modal — small",
    href: "/demo/modal-small",
    blurb:
      "Delete confirmation with type-to-confirm pattern and danger button.",
  },
];

export default function DemoIndexPage() {
  return (
    <>
      <PageHeader
        kicker="Live preview"
        title="See every variant in a working product."
        lede={
          <>
            These pages render a complete cloud-platform UI. The chrome around them, the buttons,
            the focus rings, the hierarchy — all read from whichever variant you select in the
            header. Switch variants and the same product re-skins live: Foundry red, Marginalia
            cream and orange, Cipher dark and mono. Status colors (mint for AI-handled, risk red,
            warning yellow) stay constant because they&rsquo;re semantic, not brand.
          </>
        }
        meta={
          <>
            <span>9 pages</span>
            <span>·</span>
            <span>Carbon underneath</span>
            <span>·</span>
            <span>Variant switcher in header</span>
          </>
        }
      />

      <div className={styles.grid}>
        {PAGES.map((p) => (
          <Link key={p.href} href={p.href} className={styles.card}>
            <h2 className={styles.cardTitle}>{p.label} →</h2>
            <p className={styles.cardBlurb}>{p.blurb}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

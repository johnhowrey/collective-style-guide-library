import type { Metadata } from "next";
import { ShowcaseShell } from "@/components/Shell/ShowcaseShell";
import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "The Collective Style Guide Library",
    template: "%s · The Collective Style Guide Library",
  },
  description:
    "Enterprise- and SaaS-ready visual identities. Each variant is a complete design system; all sit on a shared accessible foundation.",
  alternates: {
    types: {
      "text/markdown": "/llms.txt",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ShowcaseShell>{children}</ShowcaseShell>
      </body>
    </html>
  );
}

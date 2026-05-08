/**
 * Single source of truth for the showcase IA.
 *
 * Every page that should appear in nav/sitemap/llms.txt is listed here.
 * Variant-scoped routes are templated and expanded at render time.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavSection {
  label: string;
  items: NavLink[];
}

export const PRIMARY_NAV: NavSection[] = [
  {
    label: "Get started",
    items: [
      { label: "Overview", href: "/getting-started", description: "What this library is and how the variants work" },
      { label: "Install", href: "/getting-started/install", description: "Add the library to a Next.js, Vite, or any React app" },
      { label: "Your first variant", href: "/getting-started/first-variant", description: "Wrap your app, switch modes, ship a page" },
      { label: "Your own fonts", href: "/getting-started/fonts", description: "Adobe Fonts, Google Fonts, self-hosted, or system" },
      { label: "Customizing tokens", href: "/getting-started/customizing", description: "Override variants without forking" },
    ],
  },
  {
    label: "Variants",
    items: [
      { label: "All variants", href: "/variants", description: "The complete library" },
      { label: "Foundry", href: "/variants/foundry", description: "Neo Bauhaus" },
      { label: "Vellum", href: "/variants/vellum", description: "International Style" },
      { label: "Beacon", href: "/variants/beacon", description: "Schiphol wayfinding" },
      { label: "Marginalia", href: "/variants/marginalia", description: "Penguin Books" },
      { label: "Proscenium", href: "/variants/proscenium", description: "The Public Theater" },
      { label: "Caesura", href: "/variants/caesura", description: "Bringhurst" },
      { label: "Cipher", href: "/variants/cipher", description: "Engineering tooling" },
      { label: "Compare", href: "/compare", description: "Side-by-side variant comparison" },
    ],
  },
  {
    label: "Components & templates",
    items: [
      { label: "Components", href: "/components", description: "Cross-variant component reference" },
      { label: "Templates", href: "/templates", description: "Page templates ready to copy into your app" },
    ],
  },
  {
    label: "Design-to-code (AI)",
    items: [
      { label: "Overview", href: "/ai", description: "How designers and engineers point Claude/Cursor/Figma at this library" },
      { label: "Claude Code", href: "/ai/claude", description: "Use a variant directly from Claude" },
      { label: "Cursor", href: "/ai/cursor", description: "Configure Cursor to author in a variant" },
      { label: "Figma", href: "/ai/figma", description: "Code Connect mappings" },
      { label: "MCP server", href: "/ai/mcp", description: "Local + remote MCP server for any tool" },
    ],
  },
  {
    label: "Reference",
    items: [
      { label: "Changelog", href: "/changelog" },
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/support/faq" },
      { label: "Troubleshooting", href: "/support/troubleshooting" },
      { label: "About", href: "/about" },
      { label: "License & Notice", href: "/license" },
    ],
  },
];

export const VARIANT_SUBPAGES: NavLink[] = [
  { label: "Overview", href: "" },
  { label: "Tokens", href: "/tokens" },
  { label: "Principles", href: "/principles" },
  { label: "Voice & content", href: "/voice" },
  { label: "Motion", href: "/motion" },
  { label: "i18n & RTL", href: "/i18n" },
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
];

export const TEMPLATE_SLUGS = [
  "dashboard",
  "listing",
  "detail",
  "settings",
  "login",
  "empty-state",
  "marketing-landing",
  "pricing",
] as const;

export type TemplateSlug = (typeof TEMPLATE_SLUGS)[number];

export const TEMPLATES: Record<TemplateSlug, { label: string; description: string }> = {
  dashboard: { label: "Dashboard", description: "Workspace home with KPIs, charts, and activity feed" },
  listing: { label: "Item listing", description: "Resource list with search, filter, pagination" },
  detail: { label: "Item detail", description: "Record view with tabs, related items, sidebar" },
  settings: { label: "Settings", description: "Forms, sections, tabs — preferences/account" },
  login: { label: "Login & sign-up", description: "Authentication screens" },
  "empty-state": { label: "Empty state / onboarding", description: "First-run experience" },
  "marketing-landing": { label: "Marketing landing", description: "Hero, features, CTA" },
  pricing: { label: "Pricing", description: "Tiered pricing table" },
};

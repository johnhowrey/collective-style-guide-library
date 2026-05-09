/**
 * Single source of truth for the showcase IA.
 *
 * Each top-level entry in NAV_ITEMS maps to a sidebar nav row. When the
 * sidebar is collapsed, hovering a row reveals a flyout with `items` (just
 * like seashell's blue flyout). When the sidebar is expanded, the parent
 * label shows inline; the flyout still appears on hover.
 */

export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  items: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: "sparkle", href: "/", items: [] },
  {
    id: "getting-started",
    label: "Get started",
    icon: "book",
    href: "/getting-started",
    items: [
      { label: "Overview", href: "/getting-started" },
      { label: "Install", href: "/getting-started/install" },
      { label: "Your first variant", href: "/getting-started/first-variant" },
      { label: "Your own fonts", href: "/getting-started/fonts" },
      { label: "Customizing tokens", href: "/getting-started/customizing" },
    ],
  },
  {
    id: "variants",
    label: "Variants",
    icon: "layers",
    href: "/variants",
    items: [
      { label: "All variants", href: "/variants" },
      { label: "Foundry — Neo Bauhaus", href: "/variants/foundry" },
      { label: "Vellum — International Style", href: "/variants/vellum" },
      { label: "Beacon — Schiphol", href: "/variants/beacon" },
      { label: "Marginalia — Penguin Books", href: "/variants/marginalia" },
      { label: "Proscenium — Public Theater", href: "/variants/proscenium" },
      { label: "Caesura — Bringhurst", href: "/variants/caesura" },
      { label: "Cipher — Engineering", href: "/variants/cipher" },
      { label: "Compare variants", href: "/compare" },
    ],
  },
  {
    id: "components",
    label: "Components",
    icon: "grid",
    href: "/components",
    items: [
      { label: "Cross-variant index", href: "/components" },
      { label: "Foundry", href: "/variants/foundry/components" },
      { label: "Vellum", href: "/variants/vellum/components" },
      { label: "Beacon", href: "/variants/beacon/components" },
      { label: "Marginalia", href: "/variants/marginalia/components" },
      { label: "Proscenium", href: "/variants/proscenium/components" },
      { label: "Caesura", href: "/variants/caesura/components" },
      { label: "Cipher", href: "/variants/cipher/components" },
    ],
  },
  {
    id: "templates",
    label: "Templates",
    icon: "template",
    href: "/templates",
    items: [
      { label: "All templates", href: "/templates" },
      { label: "Dashboard", href: "/variants/foundry/templates/dashboard" },
      { label: "Item listing", href: "/variants/foundry/templates/listing" },
      { label: "Item detail", href: "/variants/foundry/templates/detail" },
      { label: "Settings", href: "/variants/foundry/templates/settings" },
      { label: "Login", href: "/variants/foundry/templates/login" },
      { label: "Empty state", href: "/variants/foundry/templates/empty-state" },
      { label: "Marketing landing", href: "/variants/foundry/templates/marketing-landing" },
      { label: "Pricing", href: "/variants/foundry/templates/pricing" },
    ],
  },
  {
    id: "ai",
    label: "Design-to-code",
    icon: "cpu",
    href: "/ai",
    items: [
      { label: "Overview", href: "/ai" },
      { label: "Claude Code", href: "/ai/claude" },
      { label: "Cursor", href: "/ai/cursor" },
      { label: "Figma", href: "/ai/figma" },
      { label: "MCP server", href: "/ai/mcp" },
    ],
  },
  {
    id: "demo",
    label: "Live preview",
    icon: "activity",
    href: "/demo",
    items: [
      { label: "All preview pages", href: "/demo" },
      { label: "Workspace home", href: "/demo/home" },
      { label: "Project home", href: "/demo/project" },
      { label: "Droplets list", href: "/demo/droplets" },
      { label: "Database create", href: "/demo/database/create" },
      { label: "Inference playground", href: "/demo/playground" },
      { label: "Notifications center", href: "/demo/notifications" },
      { label: "Onboarding", href: "/demo/onboarding" },
      { label: "Modal — large", href: "/demo/modal-large" },
      { label: "Modal — small", href: "/demo/modal-small" },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: "question",
    href: "/support",
    items: [
      { label: "Overview", href: "/support" },
      { label: "FAQ", href: "/support/faq" },
      { label: "Troubleshooting", href: "/support/troubleshooting" },
      { label: "Changelog", href: "/changelog" },
      { label: "About", href: "/about" },
      { label: "License & Notice", href: "/license" },
    ],
  },
];

export interface SearchEntry {
  label: string;
  section: string;
  detail?: string;
  href: string;
}

export const SEARCH_INDEX: SearchEntry[] = [
  { label: "Foundry", section: "Variants", detail: "Neo Bauhaus", href: "/variants/foundry" },
  { label: "Vellum", section: "Variants", detail: "International Style", href: "/variants/vellum" },
  { label: "Beacon", section: "Variants", detail: "Schiphol wayfinding", href: "/variants/beacon" },
  { label: "Marginalia", section: "Variants", detail: "Penguin Books", href: "/variants/marginalia" },
  { label: "Proscenium", section: "Variants", detail: "The Public Theater", href: "/variants/proscenium" },
  { label: "Caesura", section: "Variants", detail: "Bringhurst", href: "/variants/caesura" },
  { label: "Cipher", section: "Variants", detail: "Engineering tooling", href: "/variants/cipher" },
  { label: "Get started", section: "Documentation", href: "/getting-started" },
  { label: "Install", section: "Documentation", detail: "Add the library", href: "/getting-started/install" },
  { label: "Your first variant", section: "Documentation", href: "/getting-started/first-variant" },
  { label: "Your own fonts", section: "Documentation", detail: "Adobe / Google / system", href: "/getting-started/fonts" },
  { label: "Customizing tokens", section: "Documentation", href: "/getting-started/customizing" },
  { label: "Compare variants", section: "Reference", detail: "Side-by-side", href: "/compare" },
  { label: "Components", section: "Reference", detail: "Cross-variant index", href: "/components" },
  { label: "Templates", section: "Reference", detail: "All templates", href: "/templates" },
  { label: "Claude Code", section: "Design-to-code", href: "/ai/claude" },
  { label: "Cursor", section: "Design-to-code", href: "/ai/cursor" },
  { label: "Figma", section: "Design-to-code", detail: "Code Connect", href: "/ai/figma" },
  { label: "MCP server", section: "Design-to-code", detail: "Local + remote", href: "/ai/mcp" },
  { label: "FAQ", section: "Support", href: "/support/faq" },
  { label: "Troubleshooting", section: "Support", href: "/support/troubleshooting" },
  { label: "Changelog", section: "Support", href: "/changelog" },
  { label: "About", section: "Support", href: "/about" },
  { label: "License & Notice", section: "Support", href: "/license" },
  { label: "Dashboard template", section: "Templates", href: "/variants/foundry/templates/dashboard" },
  { label: "Listing template", section: "Templates", href: "/variants/foundry/templates/listing" },
  { label: "Settings template", section: "Templates", href: "/variants/foundry/templates/settings" },
  { label: "Login template", section: "Templates", href: "/variants/foundry/templates/login" },
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

export const VARIANT_SUBPAGES = [
  { label: "Overview", href: "" },
  { label: "Tokens", href: "/tokens" },
  { label: "Principles", href: "/principles" },
  { label: "Voice & content", href: "/voice" },
  { label: "Motion", href: "/motion" },
  { label: "i18n & RTL", href: "/i18n" },
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
];

const SEGMENT_LABELS: Record<string, string> = {
  demo: "Live preview",
  home: "Workspace",
  project: "Project",
  droplets: "Droplets",
  database: "Database",
  create: "Create",
  playground: "Playground",
  notifications: "Notifications",
  onboarding: "Onboarding",
  "modal-large": "Modal (large)",
  "modal-small": "Modal (small)",
  variants: "Variants",
  components: "Components",
  templates: "Templates",
  ai: "Design-to-code",
  claude: "Claude Code",
  cursor: "Cursor",
  figma: "Figma",
  mcp: "MCP server",
  support: "Support",
  faq: "FAQ",
  troubleshooting: "Troubleshooting",
  "getting-started": "Get started",
  install: "Install",
  "first-variant": "Your first variant",
  fonts: "Your own fonts",
  customizing: "Customizing tokens",
  changelog: "Changelog",
  about: "About",
  license: "License & Notice",
  compare: "Compare",
  tokens: "Tokens",
  principles: "Principles",
  voice: "Voice & content",
  motion: "Motion",
  i18n: "i18n & RTL",
  foundry: "Foundry",
  vellum: "Vellum",
  beacon: "Beacon",
  marginalia: "Marginalia",
  proscenium: "Proscenium",
  caesura: "Caesura",
  cipher: "Cipher",
  dashboard: "Dashboard",
  listing: "Item listing",
  detail: "Item detail",
  settings: "Settings",
  login: "Login",
  "empty-state": "Empty state",
  "marketing-landing": "Marketing landing",
  pricing: "Pricing",
};

export interface BreadcrumbSegment {
  label: string;
  href: string;
}

export function pathnameToBreadcrumbs(pathname: string): BreadcrumbSegment[] {
  const parts = pathname.split("/").filter(Boolean);
  const out: BreadcrumbSegment[] = [{ label: "Home", href: "/" }];
  let acc = "";
  for (const p of parts) {
    acc += "/" + p;
    out.push({ label: SEGMENT_LABELS[p] ?? p, href: acc });
  }
  return out;
}

/**
 * Legacy export for any pages still importing PRIMARY_NAV.
 * Maps the new NAV_ITEMS to the old shape (label/items[label/href/description]).
 */
export const PRIMARY_NAV: Array<{
  label: string;
  items: Array<{ label: string; href: string; description?: string }>;
}> = NAV_ITEMS.filter((n) => n.items.length > 0).map((n) => ({
  label: n.label,
  items: n.items,
}));

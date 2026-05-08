import type { ComponentType } from "react";
import type { TemplateSlug } from "@/lib/sitemap";
import { DashboardTemplate } from "./DashboardTemplate";
import { ListingTemplate } from "./ListingTemplate";
import { DetailTemplate } from "./DetailTemplate";
import { SettingsTemplate } from "./SettingsTemplate";
import { LoginTemplate } from "./LoginTemplate";
import { EmptyStateTemplate } from "./EmptyStateTemplate";
import { MarketingLandingTemplate } from "./MarketingLandingTemplate";
import { PricingTemplate } from "./PricingTemplate";

export const TEMPLATE_COMPONENTS: Record<TemplateSlug, ComponentType> = {
  dashboard: DashboardTemplate,
  listing: ListingTemplate,
  detail: DetailTemplate,
  settings: SettingsTemplate,
  login: LoginTemplate,
  "empty-state": EmptyStateTemplate,
  "marketing-landing": MarketingLandingTemplate,
  pricing: PricingTemplate,
};

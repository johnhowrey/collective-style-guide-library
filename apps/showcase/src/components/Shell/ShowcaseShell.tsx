"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider, type ColorMode, type Density } from "@collective/foundation";
import { VARIANTS_BY_ID, DEFAULT_VARIANT_ID } from "@/lib/variants";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { AssistantPanel } from "./AssistantPanel";
import { AccessibilityModal } from "./AccessibilityModal";
import styles from "./ShowcaseShell.module.scss";

const STORAGE = {
  variant: "collective.variant",
  mode: "collective.mode",
  density: "collective.density",
  sidebar: "collective.sidebar.expanded",
};

function readPref<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (window.localStorage.getItem(key) as T | null) ?? fallback;
}

export function ShowcaseShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [variantId, setVariantId] = useState(DEFAULT_VARIANT_ID);
  const [mode, setMode] = useState<ColorMode>("light");
  const [density, setDensity] = useState<Density>("comfortable");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [a11yOpen, setA11yOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setVariantId(readPref(STORAGE.variant, DEFAULT_VARIANT_ID));
    setMode(readPref<ColorMode>(STORAGE.mode, "light"));
    setDensity(readPref<Density>(STORAGE.density, "comfortable"));
    setSidebarExpanded(
      (readPref<string>(STORAGE.sidebar, "false") as string) === "true",
    );
    setHydrated(true);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setAssistantOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const urlVariant = useMemo(() => {
    const match = pathname.match(/^\/variants\/([^/]+)/);
    return match && VARIANTS_BY_ID[match[1] ?? ""] ? match[1]! : null;
  }, [pathname]);

  const activeVariantId = urlVariant ?? variantId;
  const theme = VARIANTS_BY_ID[activeVariantId] ?? VARIANTS_BY_ID[DEFAULT_VARIANT_ID]!;
  const brandMarkColor =
    theme.modes[mode].cssVariables["--collective-accent-primary"] ?? "#000";

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE.variant, variantId);
    window.localStorage.setItem(STORAGE.mode, mode);
    window.localStorage.setItem(STORAGE.density, density);
    window.localStorage.setItem(STORAGE.sidebar, String(sidebarExpanded));
  }, [hydrated, variantId, mode, density, sidebarExpanded]);

  useEffect(() => {
    const isSerifBodied =
      activeVariantId === "marginalia" || activeVariantId === "caesura";
    document.body.dataset.bodyFamily = isSerifBodied ? "serif" : "sans";
  }, [activeVariantId]);

  return (
    <ThemeProvider theme={theme} mode={mode} density={density}>
      <div className={styles.shell}>
        <Header
          variant={theme}
          variantId={activeVariantId}
          variantLocked={Boolean(urlVariant)}
          onVariantChange={setVariantId}
          mode={mode}
          onModeChange={setMode}
          density={density}
          onDensityChange={setDensity}
          assistantOpen={assistantOpen}
          onToggleAssistant={() => setAssistantOpen((o) => !o)}
          onOpenMobileNav={() => setMobileNavOpen(true)}
        />
        <div className={styles.body}>
          <Sidebar
            expanded={sidebarExpanded}
            onToggleExpanded={() => setSidebarExpanded((e) => !e)}
            onOpenAccessibility={() => setA11yOpen(true)}
            brandMarkColor={brandMarkColor}
            mobileOpen={mobileNavOpen}
            onMobileClose={() => setMobileNavOpen(false)}
          />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
      <AssistantPanel
        open={assistantOpen}
        onClose={() => setAssistantOpen(false)}
        variantName={theme.meta.name}
      />
      <AccessibilityModal open={a11yOpen} onClose={() => setA11yOpen(false)} />
    </ThemeProvider>
  );
}

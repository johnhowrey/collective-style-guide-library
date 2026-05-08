"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider, type ColorMode, type Density } from "@collective/foundation";
import { VARIANTS_BY_ID, DEFAULT_VARIANT_ID } from "@/lib/variants";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import styles from "./ShowcaseShell.module.scss";

const STORAGE = {
  variant: "collective.variant",
  mode: "collective.mode",
  density: "collective.density",
};

function readPref<T extends string>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  return (window.localStorage.getItem(key) as T | null) ?? fallback;
}

/**
 * The site shell. Holds the active variant / mode / density and applies them
 * via the foundation ThemeProvider. The variant is taken from the URL when on
 * a /variants/[slug]/... route; otherwise from user preference (localStorage).
 */
export function ShowcaseShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [variantId, setVariantId] = useState(DEFAULT_VARIANT_ID);
  const [mode, setMode] = useState<ColorMode>("light");
  const [density, setDensity] = useState<Density>("comfortable");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setVariantId(readPref(STORAGE.variant, DEFAULT_VARIANT_ID));
    setMode(readPref<ColorMode>(STORAGE.mode, "light"));
    setDensity(readPref<Density>(STORAGE.density, "comfortable"));
    setHydrated(true);
  }, []);

  const urlVariant = useMemo(() => {
    const match = pathname.match(/^\/variants\/([^/]+)/);
    return match && VARIANTS_BY_ID[match[1] ?? ""] ? match[1]! : null;
  }, [pathname]);

  const activeVariantId = urlVariant ?? variantId;
  const theme = VARIANTS_BY_ID[activeVariantId] ?? VARIANTS_BY_ID[DEFAULT_VARIANT_ID]!;

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE.variant, variantId);
    window.localStorage.setItem(STORAGE.mode, mode);
    window.localStorage.setItem(STORAGE.density, density);
  }, [hydrated, variantId, mode, density]);

  // Tag <body> so global SCSS can pick the right body family per variant.
  useEffect(() => {
    const isSerifBodied = activeVariantId === "marginalia" || activeVariantId === "caesura";
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
        />
        <div className={styles.body}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}

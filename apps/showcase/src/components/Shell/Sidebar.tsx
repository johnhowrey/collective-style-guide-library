"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/sitemap";
import { icons } from "./icons";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  expanded: boolean;
  onToggleExpanded: () => void;
  onOpenAccessibility: () => void;
  brandMarkColor: string;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

/**
 * Collapsible sidebar modeled on seashell's pattern:
 *   - 52px collapsed, 206px expanded
 *   - hover a nav row → row gets accent background + adjacent flyout opens
 *   - active row → 3px accent stripe on left edge when not hovered
 *   - bottom: accessibility button + collapse toggle
 */
export function Sidebar({
  expanded,
  onToggleExpanded,
  onOpenAccessibility,
  brandMarkColor,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [hoveredTop, setHoveredTop] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const hoveredItem = NAV_ITEMS.find((n) => n.id === hovered);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const onRowEnter = (id: string, e: MouseEvent<HTMLElement>) => {
    setHovered(id);
    setHoveredTop(e.currentTarget.getBoundingClientRect().top);
  };

  return (
    <>
      <button
        type="button"
        className={[styles.backdrop, mobileOpen && styles.backdropOpen]
          .filter(Boolean)
          .join(" ")}
        aria-label="Close navigation"
        onClick={onMobileClose}
      />
      <aside
        className={[
          styles.wrap,
          expanded && styles.expanded,
          mobileOpen && styles.mobileOpen,
        ]
          .filter(Boolean)
          .join(" ")}
        role={mobileOpen ? "dialog" : undefined}
        aria-modal={mobileOpen || undefined}
      >
        <Link
          href="/"
          className={styles.logoBlock}
          style={{ "--brand-mark": brandMarkColor } as CSSProperties}
          onClick={onMobileClose}
          aria-label="Home"
        >
          <span className={styles.logoMark} aria-hidden="true" />
        </Link>

        <nav
          className={styles.navScroll}
          onMouseLeave={() => setHovered(null)}
          aria-label="Sections"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            const hasChildren = item.items.length > 0;
            const isHovered = hovered === item.id;
            const isMobileExpanded = mobileExpanded === item.id;
            const rowClasses = [
              styles.navRow,
              active && styles.active,
              isHovered && styles.hovered,
            ]
              .filter(Boolean)
              .join(" ");

            const Inner = (
              <>
                <span className={styles.iconSlot} aria-hidden="true">
                  {icons[item.icon]}
                </span>
                <span className={styles.label}>{item.label}</span>
              </>
            );

            return (
              <div key={item.id}>
                {hasChildren && mobileOpen ? (
                  <button
                    type="button"
                    className={rowClasses}
                    onMouseEnter={(e) => onRowEnter(item.id, e)}
                    onClick={() =>
                      setMobileExpanded(isMobileExpanded ? null : item.id)
                    }
                    title={item.label}
                    aria-expanded={isMobileExpanded || undefined}
                  >
                    {Inner}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={rowClasses}
                    onMouseEnter={(e) => onRowEnter(item.id, e)}
                    onClick={onMobileClose}
                    title={item.label}
                  >
                    {Inner}
                  </Link>
                )}

                {hasChildren && isMobileExpanded && mobileOpen && (
                  <div className={styles.mobileSubList}>
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={styles.mobileSubRow}
                        onClick={onMobileClose}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {hoveredItem && hoveredItem.items.length > 0 && !mobileOpen && (
            <div
              className={styles.flyout}
              style={{
                top: hoveredTop,
                left: expanded ? "var(--sidebar-open)" : "var(--sidebar-collapsed)",
              }}
              onMouseEnter={() => setHovered(hoveredItem.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {hoveredItem.items.map((sub) => (
                <Link key={sub.href} href={sub.href} className={styles.flyoutItem}>
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </nav>

        <div className={styles.bottomSection}>
          <button
            type="button"
            className={styles.bottomButton}
            aria-label="Accessibility options"
            title="Accessibility"
            onClick={onOpenAccessibility}
          >
            {icons.accessibility}
          </button>
          <button
            type="button"
            className={[styles.bottomButton, styles.desktopOnly]
              .filter(Boolean)
              .join(" ")}
            aria-label={expanded ? "Collapse navigation" : "Expand navigation"}
            title={expanded ? "Collapse" : "Expand"}
            onClick={onToggleExpanded}
            style={{
              transform: expanded ? "scaleX(-1)" : "none",
              transition: "transform 0.15s ease",
            }}
          >
            {icons.collapseLeft}
          </button>
        </div>
      </aside>
    </>
  );
}

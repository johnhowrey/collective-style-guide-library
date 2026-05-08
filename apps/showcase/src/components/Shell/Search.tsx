"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SEARCH_INDEX, type SearchEntry } from "@/lib/sitemap";
import { icons } from "./icons";
import styles from "./Search.module.scss";

export function Search() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const groups = useMemo(() => {
    const q = value.trim().toLowerCase();
    const filtered = q
      ? SEARCH_INDEX.filter(
          (i) =>
            i.label.toLowerCase().includes(q) ||
            (i.detail || "").toLowerCase().includes(q) ||
            i.section.toLowerCase().includes(q),
        )
      : SEARCH_INDEX.slice(0, 8);
    const map = new Map<string, SearchEntry[]>();
    for (const it of filtered) {
      const arr = map.get(it.section) ?? [];
      arr.push(it);
      map.set(it.section, arr);
    }
    return Array.from(map.entries()).map(([section, items]) => ({ section, items }));
  }, [value]);

  const onSelect = (entry: SearchEntry) => {
    setOpen(false);
    setValue("");
    router.push(entry.href);
  };

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <span className={styles.icon} aria-hidden="true">
        {icons.search}
      </span>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search variants, components, docs…"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        aria-label="Search the library"
      />
      <kbd className={styles.kbd} aria-hidden="true">⌘ /</kbd>

      {open && (
        <div className={styles.dropdown} role="listbox">
          {groups.length === 0 ? (
            <div className={styles.noResults}>No matches</div>
          ) : (
            groups.map((g) => (
              <div key={g.section} className={styles.group}>
                <div className={styles.sectionHead}>{g.section}</div>
                {g.items.map((it) => (
                  <button
                    key={it.href}
                    type="button"
                    className={styles.row}
                    onClick={() => onSelect(it)}
                  >
                    <span className={styles.rowLabel}>{it.label}</span>
                    {it.detail && <span className={styles.rowDetail}>{it.detail}</span>}
                  </button>
                ))}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

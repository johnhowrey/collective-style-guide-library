import type { ReactNode } from "react";

const stroke = "1.5";

export const icons: Record<string, ReactNode> = {
  sparkle: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM5 16l.75 2.25L8 19l-2.25.75L5 22l-.75-2.25L2 19l2.25-.75L5 16zM19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" />
    </svg>
  ),
  layers: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth={stroke} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  grid: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth={stroke} />
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth={stroke} />
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth={stroke} />
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  ),
  template: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={stroke} />
      <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth={stroke} />
    </svg>
  ),
  cpu: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="1" stroke="currentColor" strokeWidth={stroke} />
      <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth={stroke} />
      <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" stroke="currentColor" strokeWidth={stroke} />
      <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  question: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={stroke} />
      <path d="M9.5 9.5a2.5 2.5 0 015 0c0 1.5-1.5 2-2.5 3v1M12 17h.01" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  search: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={stroke} />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  sparkles: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3z" stroke="currentColor" strokeWidth={stroke} fill="currentColor" />
      <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" stroke="currentColor" strokeWidth={stroke} fill="currentColor" />
    </svg>
  ),
  collapseLeft: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 6l-6 6 6 6" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
    </svg>
  ),
  accessibility: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5M8 10h8M9 21l3-6 3 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  close: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  ),
  chevronRight: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chevronDown: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 5L7 8.5 10.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hamburger: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  arrowLeft: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/**
 * SePrivee Design Tokens
 * "Lujoso sin gritar lujo"
 */

export const colors = {
  carbon: "#0B0B0B",
  pearl: "#F8F6F3",
  gold: "#C1A47A",
  cream: "#E8E0D2",
  stone: "#B8B8B0",
} as const;

export const spacing = {
  sectionDesktop: "120px",
  sectionMobile: "80px",
  containerMax: "1280px",
  containerNarrow: "960px",
  containerPadding: "24px",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const transitions = {
  fast: "150ms ease-out",
  base: "300ms ease-out",
  slow: "600ms ease-out",
} as const;

export const typography = {
  fontDisplay: "var(--font-playfair)",
  fontTagline: "var(--font-montserrat)",
  fontBody: "var(--font-inter)",
} as const;

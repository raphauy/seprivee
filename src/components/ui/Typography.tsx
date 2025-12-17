import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "tagline"
  | "body"
  | "body-lg"
  | "caption";

interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "font-[family-name:var(--font-playfair)] text-display-1 font-medium tracking-tight",
  h2: "font-[family-name:var(--font-playfair)] text-display-2 font-medium",
  h3: "font-[family-name:var(--font-playfair)] text-display-3 font-medium",
  h4: "font-[family-name:var(--font-playfair)] text-2xl font-medium",
  tagline:
    "font-[family-name:var(--font-montserrat)] text-tagline font-light uppercase tracking-tagline",
  body: "font-[family-name:var(--font-inter)] text-base leading-relaxed",
  "body-lg": "font-[family-name:var(--font-inter)] text-body-lg",
  caption:
    "font-[family-name:var(--font-inter)] text-sm text-[var(--color-stone)]",
};

const defaultElements: Record<TypographyVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  tagline: "span",
  body: "p",
  "body-lg": "p",
  caption: "span",
};

export function Typography({
  variant = "body",
  as,
  className,
  children,
}: TypographyProps) {
  const Component = as || defaultElements[variant];

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}

import React from "react";
import { cn } from "@/lib/utils";

type ContainerVariant = "default" | "narrow" | "full";

interface ContainerProps {
  variant?: ContainerVariant;
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const variantStyles: Record<ContainerVariant, string> = {
  default: "max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]",
  narrow:
    "max-w-[var(--container-narrow)] mx-auto px-[var(--container-padding)]",
  full: "w-full px-[var(--container-padding)]",
};

export function Container({
  variant = "default",
  className,
  children,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}

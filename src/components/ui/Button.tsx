"use client";

import { forwardRef, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-carbon)] disabled:pointer-events-none disabled:opacity-50";

    const variants: Record<ButtonVariant, string> = {
      primary:
        "bg-[var(--color-gold)] text-[var(--color-carbon)] hover:bg-[var(--color-gold)]/90 active:bg-[var(--color-gold)]/80",
      secondary:
        "border border-[var(--color-gold)] bg-transparent text-[var(--color-pearl)] hover:bg-[var(--color-gold)]/10",
      ghost:
        "bg-transparent text-[var(--color-gold)] hover:text-[var(--color-pearl)] underline-offset-4 hover:underline",
    };

    const sizes: Record<ButtonSize, string> = {
      sm: "h-9 px-4 text-sm tracking-wide",
      md: "h-11 px-6 text-sm tracking-wider",
      lg: "h-14 px-8 text-base tracking-wider",
    };

    const buttonClassName = cn(baseStyles, variants[variant], sizes[size], className);

    // When asChild is true, clone the child element with button styles
    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(buttonClassName, (children as React.ReactElement<{ className?: string }>).props.className),
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };

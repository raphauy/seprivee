import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
  withIcon?: boolean;
}

export function Divider({ className, withIcon = false }: DividerProps) {
  if (withIcon) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <div className="flex-1 h-px bg-[var(--color-gold)] opacity-40" />
        <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)] opacity-60" />
        <div className="flex-1 h-px bg-[var(--color-gold)] opacity-40" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "h-px bg-[var(--color-gold)] opacity-40",
        className
      )}
    />
  );
}

"use client";

import { useEffect, useCallback } from "react";
import { useTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({
  message,
  type,
  isVisible,
  onClose,
}: ToastProps) {
  const t = useTranslation();

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVisible, handleKeyDown]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--color-carbon)]/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className={cn(
          "relative w-full max-w-md mx-4 p-8 bg-[var(--color-pearl)] shadow-2xl animate-scale-in",
          "border-t-4",
          type === "success"
            ? "border-t-[var(--color-gold)]"
            : "border-t-red-500"
        )}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center",
              type === "success"
                ? "bg-[var(--color-gold)]/10"
                : "bg-red-500/10"
            )}
          >
            {type === "success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--color-gold)]"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3
            id="dialog-title"
            className={cn(
              "font-[family-name:var(--font-montserrat)] text-sm tracking-wider uppercase mb-3",
              type === "success" ? "text-[var(--color-gold)]" : "text-red-500"
            )}
          >
            {type === "success" ? t.common.toast.success : t.common.toast.error}
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-[var(--color-carbon)]/80 leading-relaxed mb-8">
            {message}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className={cn(
            "w-full py-3 font-[family-name:var(--font-montserrat)] text-sm tracking-wider uppercase transition-colors",
            type === "success"
              ? "bg-[var(--color-gold)] text-[var(--color-carbon)] hover:bg-[var(--color-gold)]/90"
              : "bg-red-500 text-white hover:bg-red-600"
          )}
        >
          {t.common.toast.close}
        </button>

        {/* X button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-carbon)]/40 hover:text-[var(--color-carbon)] transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" x2="6" y1="6" y2="18" />
            <line x1="6" x2="18" y1="6" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

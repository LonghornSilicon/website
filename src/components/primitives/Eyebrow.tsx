import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type EyebrowSurface = "parchment" | "white";

type EyebrowProps = {
  children: ReactNode;
  /** Parchment sections: white pill. White sections: parchment pill. */
  surface?: EyebrowSurface;
  className?: string;
};

export function Eyebrow({
  children,
  surface = "parchment",
  className,
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "border-border text-ink-muted inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase",
        surface === "parchment" && "bg-surface",
        surface === "white" && "bg-bg",
        className,
      )}
    >
      <span
        className="bg-accent h-1.5 w-1.5 shrink-0 rounded-full"
        aria-hidden
      />
      {children}
    </div>
  );
}

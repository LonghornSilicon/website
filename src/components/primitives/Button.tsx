import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

function isNextInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

const base =
  "group/btn inline-flex items-center gap-1 rounded-full border border-transparent px-[22px] py-3 text-[15px] font-normal tracking-[-0.01em] transition-all duration-[250ms] [transition-timing-function:var(--ease-apple)]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:scale-[1.02] hover:bg-accent-hover",
  secondary:
    "border-white/40 bg-transparent text-hero-fg hover:bg-white/10",
};

const arrow = "inline-block transition-transform duration-[250ms] [transition-timing-function:var(--ease-apple)] group-hover/btn:translate-x-[3px]";

export function Button({
  href,
  variant = "primary",
  className,
  children,
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);
  const suffix = <span className={arrow}>›</span>;

  if (isNextInternalHref(href)) {
    return (
      <Link href={href} className={cls}>
        {children}
        {suffix}
      </Link>
    );
  }

  return (
    <a href={href} className={cls}>
      {children}
      {suffix}
    </a>
  );
}

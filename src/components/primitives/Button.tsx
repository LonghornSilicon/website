import Link from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  type Ref,
} from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-button transition-[background,color,border,transform] duration-200 ease-out select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98]";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[54px] px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-ink hover:border-ink/30 hover:bg-bg",
  ghost: "bg-transparent text-ink hover:bg-accent-light",
  inverse:
    "bg-surface text-accent shadow-[0_1px_2px_rgba(0,0,0,0.12)] hover:bg-white/90",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  { variant = "primary", size = "md", className, children, ...rest },
  ref,
) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link
          ref={ref as Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...anchorRest}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        ref={ref as Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

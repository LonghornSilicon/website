import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "mb-5 text-[clamp(36px,5.5vw,64px)] font-semibold leading-[1.08] tracking-[-0.032em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

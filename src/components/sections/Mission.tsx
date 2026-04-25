import type { ReactNode } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

type BentoVariant = "default" | "accent";

type BentoCardProps = {
  variant?: BentoVariant;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  pattern?: boolean;
};

function BentoCard({
  variant = "default",
  eyebrow,
  title,
  description,
  className,
  pattern,
}: BentoCardProps) {
  const isAccent = variant === "accent";

  return (
    <div
      className={cn(
        "rounded-card hover:shadow-elevated relative flex flex-col justify-start overflow-hidden border p-5 text-left transition-all duration-300 hover:-translate-y-[2px]",
        isAccent
          ? "border-accent/20 bg-accent shadow-card hover:border-accent/40 text-white"
          : "border-border bg-bg text-ink shadow-card hover:border-accent/40",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "mb-2 text-[12px] font-medium tracking-[0.06em] uppercase",
            isAccent ? "text-white/80" : "text-accent",
          )}
        >
          {eyebrow}
        </div>
        <div className="font-display mb-2 text-[24px] leading-[1.12] font-semibold tracking-[-0.02em] md:text-[26px]">
          {title}
        </div>
        {description ? (
          <div
            className={cn(
              "max-w-[360px] text-[14px] leading-relaxed",
              isAccent ? "text-white/80" : "text-ink-muted",
            )}
          >
            {description}
          </div>
        ) : null}
      </div>
      {pattern && !isAccent ? (
        <svg
          className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 opacity-15"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g fill="none" stroke="#bf5700" strokeWidth="0.5">
            <rect x="10" y="10" width="80" height="80" />
            <rect x="25" y="25" width="50" height="50" />
            <rect x="40" y="40" width="20" height="20" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="50" y1="0" x2="50" y2="100" />
          </g>
        </svg>
      ) : null}
      {pattern && isAccent ? (
        <svg
          className="pointer-events-none absolute -right-4 -bottom-4 h-32 w-32 opacity-20"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g fill="none" stroke="#ffffff" strokeWidth="0.5">
            <rect x="10" y="10" width="80" height="80" />
            <rect x="25" y="25" width="50" height="50" />
            <rect x="40" y="40" width="20" height="20" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="50" y1="0" x2="50" y2="100" />
          </g>
        </svg>
      ) : null}
    </div>
  );
}

export function Mission() {
  return (
    <section
      className="bg-surface text-ink px-6 py-24 text-center md:py-32"
      id="mission"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[980px] text-center">
          <SectionHeading className="reveal mb-20 text-ink md:mb-24">
            Silicon is the new frontier.{" "}
            <span className="text-ink-muted">
              We&apos;re training people who&apos;ll shape it.
            </span>
          </SectionHeading>
        </div>

        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-3 md:auto-rows-auto md:grid-cols-6 md:gap-4">
          <BentoCard
            variant="accent"
            className="reveal min-h-[140px] md:col-span-3"
            eyebrow="Flagship"
            title={<span className="block">Introducing Lambda.</span>}
            description="Longhorn Accelerator for Matrix-Based Dataflow & Attention. Powering AI models up to 200M parameters"
            pattern
          />
          <BentoCard
            className="reveal min-h-[140px] md:col-span-3 md:col-start-4"
            eyebrow="Tapeout"
            title="Real silicon. Real packages."
            description="Tapeouts via TSMC University FinFET Program with imec."
          />
          <BentoCard
            className="reveal min-h-[140px] md:col-span-2 md:col-start-1 md:row-start-2"
            eyebrow="FRONTEND"
            title="SystemVerilog · UVM"
          />
          <BentoCard
            className="reveal min-h-[140px] md:col-span-2 md:col-start-3 md:row-start-2"
            eyebrow="Backend"
            title="Cadence · Synopsys"
          />
          <BentoCard
            className="reveal min-h-[140px] md:col-span-2 md:col-start-5 md:row-start-2"
            eyebrow="Nodes"
            title="TSMC 16nm"
          />
          <div
            className={cn(
              "reveal rounded-card hover:shadow-elevated border-border bg-bg text-ink shadow-card relative overflow-hidden border p-1 text-left transition-all duration-300 hover:-translate-y-[2px] hover:border-accent/40 md:p-1",
              "md:col-span-6 md:row-start-3",
            )}
          >
            <div className="text-accent mb-0.5 px-0.5 text-[12px] font-medium tracking-[0.06em] uppercase">
              Vision
            </div>
            <div className="bg-bg relative aspect-[1024/310] w-full overflow-hidden rounded-md">
              <Image
                src="/brand/vision.png"
                alt="Longhorn Silicon Lambda M.2 module with silver heat spreader and LPDDR DRAM"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, min(1120px, 100vw)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

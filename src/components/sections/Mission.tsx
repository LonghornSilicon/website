import type { ReactNode } from "react";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

type BentoVariant = "default" | "accent";

type BentoCardProps = {
  variant?: BentoVariant;
  eyebrow: string;
  title: ReactNode;
  description?: string;
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
        "rounded-card hover:shadow-elevated relative flex flex-col justify-between overflow-hidden border p-8 text-left transition-all duration-300 hover:-translate-y-[2px]",
        isAccent
          ? "border-accent/20 bg-accent shadow-card hover:border-accent/40 text-white"
          : "border-border bg-bg text-ink shadow-card hover:border-accent/40",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "mb-2 text-[13px] font-medium tracking-[0.06em] uppercase",
            isAccent ? "text-white/80" : "text-accent",
          )}
        >
          {eyebrow}
        </div>
        <div className="font-display mb-2 text-[28px] leading-[1.15] font-semibold tracking-[-0.02em]">
          {title}
        </div>
        {description ? (
          <div
            className={cn(
              "max-w-[380px] text-[15px] leading-snug",
              isAccent ? "text-white/80" : "text-ink-muted",
            )}
          >
            {description}
          </div>
        ) : null}
      </div>
      {pattern && !isAccent ? (
        <svg
          className="pointer-events-none absolute -right-5 -bottom-5 h-40 w-40 opacity-15"
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
          className="pointer-events-none absolute -right-5 -bottom-5 h-40 w-40 opacity-20"
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
          <SectionHeading className="reveal text-ink">
            Silicon is the new frontier.{" "}
            <span className="text-ink-muted">
              We&apos;re training the people who&apos;ll shape it.
            </span>
          </SectionHeading>
          <p className="reveal text-ink-muted mx-auto mb-14 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed tracking-[-0.012em]">
            Longhorn Silicon is an undergraduate-led chip design laboratory.
            From front-end RTL to back-end physical design, we take real
            projects all the way to fabrication — and the students with them.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:auto-rows-[200px] md:grid-cols-6">
          <BentoCard
            variant="accent"
            className="reveal min-h-[220px] md:col-span-3 md:row-span-2"
            eyebrow="Flagship"
            title={
              <>
                LHS-01.
                <br />A RISC-V SoC, from scratch.
              </>
            }
            description="Our first tapeout. Open ISA, custom cache hierarchy, end-to-end verification, all designed on campus."
            pattern
          />
          <BentoCard
            className="reveal min-h-[220px] md:col-span-3 md:col-start-4 md:row-start-1"
            eyebrow="Open Source"
            title="Built in the open."
            description="RTL, constraints, testbenches — public by default."
          />
          <BentoCard
            className="reveal min-h-[220px] md:col-span-3 md:col-start-4 md:row-start-2"
            eyebrow="Tapeout"
            title="Real silicon. Real packages."
            description="Shuttle runs via Efabless, Tiny Tapeout, and industry partnerships."
          />
          <BentoCard
            className="reveal min-h-[220px] md:col-span-2 md:col-start-1 md:row-start-3"
            eyebrow="RTL"
            title="SystemVerilog."
          />
          <BentoCard
            className="reveal min-h-[220px] md:col-span-2 md:col-start-3 md:row-start-3"
            eyebrow="Backend"
            title="OpenLane · Innovus."
          />
          <BentoCard
            className="reveal min-h-[220px] md:col-span-2 md:col-start-5 md:row-start-3"
            eyebrow="Nodes"
            title="SkyWater · GF · TSMC."
          />
        </div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

type BentoVariant = "default" | "dark" | "orange";

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
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-black/[0.04] p-8 text-left transition-transform duration-[400ms] [transition-timing-function:var(--ease-apple)] hover:-translate-y-1",
        variant === "default" && "bg-white text-ink",
        variant === "dark" && "bg-[#1d1d1f] text-hero-fg",
        variant === "orange" &&
          "bg-gradient-to-br from-accent to-[#7a3900] text-white",
        className,
      )}
    >
      <div>
        <div
          className={cn(
            "mb-2 text-[13px] font-medium uppercase tracking-[0.06em] text-accent",
            variant === "dark" && "text-[#ff8c3f]",
            variant === "orange" && "text-white/80",
          )}
        >
          {eyebrow}
        </div>
        <div className="mb-2 text-[28px] font-semibold leading-[1.15] tracking-[-0.02em]">
          {title}
        </div>
        {description ? (
          <div
            className={cn(
              "max-w-[380px] text-[15px] leading-snug text-ink-secondary",
              (variant === "dark" || variant === "orange") &&
                "text-white/75",
            )}
          >
            {description}
          </div>
        ) : null}
      </div>
      {pattern ? (
        <svg
          className="pointer-events-none absolute -bottom-5 -right-5 h-40 w-40 opacity-15"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g fill="none" stroke="#ff7a1a" strokeWidth="0.5">
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
      className="bg-white px-[22px] py-[120px] text-center text-ink"
      id="mission"
    >
      <div className="mx-auto max-w-[980px]">
        <SectionHeading className="reveal text-ink">
          Silicon is the new frontier.{" "}
          <span className="text-ink-secondary">
            We&apos;re training the people who&apos;ll shape it.
          </span>
        </SectionHeading>
        <p className="reveal mx-auto mb-14 max-w-[640px] text-[clamp(19px,2vw,22px)] leading-snug tracking-[-0.012em] text-ink-secondary">
          Longhorn Silicon is an undergraduate-led chip design laboratory. From
          front-end RTL to back-end physical design, we take real projects all
          the way to fabrication — and the students with them.
        </p>

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:auto-rows-[200px] md:grid-cols-6">
          <BentoCard
            variant="dark"
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
            variant="orange"
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

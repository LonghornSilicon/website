import { roadmap } from "@/data/roadmap";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

export function Roadmap() {
  return (
    <section
      className="bg-black px-[22px] py-[120px] text-center text-hero-fg"
      id="roadmap"
    >
      <div className="mx-auto max-w-[980px]">
        <SectionHeading className="reveal text-white">
          Roadmap. <span className="text-hero-muted">No hype, just milestones.</span>
        </SectionHeading>
        <p className="reveal mx-auto mb-14 max-w-[640px] text-[clamp(19px,2vw,22px)] leading-snug tracking-[-0.012em] text-hero-muted">
          From lab charter to packaged parts — a straight line, even when the
          schedule isn&apos;t.
        </p>
      </div>

      <div className="relative mx-auto max-w-[880px] text-left">
        <div
          className="pointer-events-none absolute bottom-3 left-6 top-3 w-0.5 bg-gradient-to-b from-accent to-white/10"
          aria-hidden
        />
        <ul className="list-none">
          {roadmap.map((m) => (
            <li key={m.id} className="reveal flex gap-8 py-6">
              <div
                className={cn(
                  "relative z-[1] flex size-[50px] shrink-0 items-center justify-center rounded-full border-2 border-accent bg-[#1d1d1f] font-mono text-xs text-accent",
                  m.done && "bg-accent text-black",
                )}
              >
                {m.phase}
              </div>
              <div>
                <div className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-accent">
                  {m.date}
                </div>
                <h4 className="mb-1 text-[22px] font-medium tracking-[-0.02em] text-white">
                  {m.title}
                </h4>
                <p className="text-[15px] leading-normal text-hero-muted">
                  {m.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

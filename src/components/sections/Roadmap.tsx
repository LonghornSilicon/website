import { roadmap } from "@/data/roadmap";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

export function Roadmap() {
  return (
    <section
      className="bg-bg text-ink px-6 py-24 text-center md:py-32"
      id="roadmap"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal">
          Roadmap.{" "}
          <span className="text-ink-muted">No hype, just milestones.</span>
        </SectionHeading>
        <p className="reveal text-ink-muted mx-auto mb-14 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed tracking-[-0.012em]">
          From lab charter to packaged parts — a straight line, even when the
          schedule isn&apos;t.
        </p>
      </div>

      <div className="relative mx-auto max-w-[880px] text-left">
        <div
          className="from-accent to-border pointer-events-none absolute top-3 bottom-3 left-6 w-0.5 bg-gradient-to-b"
          aria-hidden
        />
        <ul className="list-none">
          {roadmap.map((m) => (
            <li key={m.id} className="reveal flex gap-8 py-6">
              <div
                className={cn(
                  "border-accent bg-surface text-accent relative z-[1] flex size-[50px] shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs",
                  m.done && "bg-accent text-white",
                )}
              >
                {m.phase}
              </div>
              <div>
                <div className="text-accent mb-2 font-mono text-xs tracking-[0.08em] uppercase">
                  {m.date}
                </div>
                <h4 className="font-display text-ink mb-1 text-[22px] font-semibold tracking-[-0.02em]">
                  {m.title}
                </h4>
                <p className="text-ink-muted text-[15px] leading-normal">
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

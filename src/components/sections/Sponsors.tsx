import { sponsors } from "@/data/sponsors";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export function Sponsors() {
  return (
    <section
      className="bg-surface text-ink px-6 py-24 text-center md:py-32"
      id="sponsors"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal">
          Partners & platforms.{" "}
          <span className="text-ink-muted">Standing on tall shoulders.</span>
        </SectionHeading>
        <p className="reveal text-ink-muted mx-auto mb-14 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed tracking-[-0.012em]">
          Shuttle programs, PDKs, and university support that make student
          tapeouts possible.
        </p>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {sponsors.map((name) => (
          <span
            key={name}
            className="reveal text-ink-muted hover:text-accent font-mono text-[13px] tracking-[0.1em] uppercase transition-colors"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

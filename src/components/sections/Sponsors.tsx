import { sponsors } from "@/data/sponsors";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export function Sponsors() {
  return (
    <section
      className="bg-bg-gray px-[22px] py-[120px] text-center text-ink"
      id="sponsors"
    >
      <div className="mx-auto max-w-[980px]">
        <SectionHeading className="reveal">
          Partners & platforms.{" "}
          <span className="text-ink-secondary">Standing on tall shoulders.</span>
        </SectionHeading>
        <p className="reveal mx-auto mb-14 max-w-[640px] text-[clamp(19px,2vw,22px)] leading-snug tracking-[-0.012em] text-ink-secondary">
          Shuttle programs, PDKs, and university support that make student
          tapeouts possible.
        </p>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {sponsors.map((name) => (
          <span
            key={name}
            className="reveal font-mono text-[13px] uppercase tracking-[0.1em] text-ink-secondary"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

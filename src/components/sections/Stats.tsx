import { stats } from "@/data/stats";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export function Stats() {
  return (
    <section
      className="bg-white px-[22px] py-[120px] text-center text-ink"
      id="stats"
    >
      <div className="mx-auto max-w-[980px]">
        <SectionHeading className="reveal">
          By the numbers. <span className="text-ink-secondary">(approximate.)</span>
        </SectionHeading>
        <p className="reveal mx-auto mb-14 max-w-[640px] text-[clamp(19px,2vw,22px)] leading-snug tracking-[-0.012em] text-ink-secondary">
          We optimize for learning velocity first — then area, timing, and
          power. Metrics below are placeholders until silicon is back from the
          fab.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center">
            <div className="text-[clamp(56px,7vw,88px)] font-semibold leading-none tracking-[-0.04em] text-transparent [background:linear-gradient(135deg,#ff7a1a_0%,#bf5700_100%)] [-webkit-background-clip:text] [background-clip:text]">
              {s.value}
            </div>
            <div className="mt-2 text-[15px] font-medium uppercase tracking-wide text-ink-secondary">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

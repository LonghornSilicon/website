import { stats } from "@/data/stats";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export function Stats() {
  return (
    <section
      className="bg-surface text-ink px-6 py-24 text-center md:py-32"
      id="stats"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal">
          By the numbers. <span className="text-ink-muted">(approximate.)</span>
        </SectionHeading>
        <p className="reveal text-ink-muted mx-auto mb-14 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed tracking-[-0.012em]">
          We optimize for learning velocity first — then area, timing, and
          power. Metrics below are placeholders until silicon is back from the
          fab.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="reveal text-center">
            <div
              className="text-[clamp(56px,7vw,88px)] leading-none font-semibold tracking-[-0.04em] text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ff7a1a 0%, #bf5700 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </div>
            <div className="text-ink-muted mt-2 text-[15px] font-medium tracking-wide uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

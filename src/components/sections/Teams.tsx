import { teams } from "@/data/teams";
import type { TeamVisual } from "@/data/teams";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/cn";

function TeamVisualBlock({ visual }: { visual: TeamVisual }) {
  const base =
    "my-8 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-accent-light";

  if (visual === "design") {
    return (
      <div className={base} aria-hidden>
        <svg className="h-32 w-32 opacity-60" viewBox="0 0 100 100" fill="none">
          <g stroke="#bf5700" strokeWidth="0.6" opacity="0.5">
            <rect x="10" y="10" width="80" height="80" rx="2" />
            <rect x="22" y="22" width="24" height="24" />
            <rect x="54" y="22" width="24" height="24" />
            <rect x="22" y="54" width="24" height="24" />
            <rect x="54" y="54" width="24" height="24" />
          </g>
        </svg>
      </div>
    );
  }

  if (visual === "verification") {
    return (
      <div className={base} aria-hidden>
        <svg className="h-36 w-36 opacity-60" viewBox="0 0 100 100" fill="none">
          <path
            d="M10 50h20M30 30v40M50 20v60M70 25v50M90 40v20"
            stroke="#bf5700"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="30" cy="50" r="4" fill="#bf5700" opacity="0.35" />
          <circle cx="50" cy="45" r="4" fill="#bf5700" opacity="0.45" />
          <circle cx="70" cy="52" r="4" fill="#bf5700" opacity="0.4" />
        </svg>
      </div>
    );
  }

  return (
    <div className={base} aria-hidden>
      <svg className="h-32 w-32 opacity-60" viewBox="0 0 100 100" fill="none">
        <rect
          x="15"
          y="20"
          width="70"
          height="14"
          rx="2"
          stroke="#bf5700"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <rect
          x="15"
          y="42"
          width="32"
          height="38"
          rx="2"
          stroke="#bf5700"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <rect
          x="53"
          y="42"
          width="32"
          height="38"
          rx="2"
          stroke="#bf5700"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="80"
          stroke="#bf5700"
          strokeWidth="0.4"
          opacity="0.35"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}

export function Teams() {
  return (
    <section
      className="bg-bg text-ink px-6 py-24 text-center md:py-32"
      id="teams"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal">
          Three teams. <span className="text-ink-muted">One tapeout.</span>
        </SectionHeading>
        <p className="reveal text-ink-muted mx-auto mb-14 max-w-[640px] text-[clamp(17px,2vw,22px)] leading-relaxed tracking-[-0.012em]">
          Design, verification, and physical design — the full stack, split into
          squads so everyone ships with depth.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
        {teams.map((team) => (
          <article
            key={team.id}
            className={cn(
              "group/card reveal rounded-card border-border bg-surface text-ink shadow-card hover:border-accent/40 hover:shadow-elevated flex min-h-[520px] flex-col justify-between border px-9 py-12 text-left transition-all duration-300 hover:-translate-y-[2px]",
            )}
          >
            <div>
              <p className="text-accent text-[13px] font-medium tracking-[0.08em] uppercase">
                {team.eyebrow}
              </p>
              <h3 className="font-display my-3 text-[40px] leading-tight font-semibold tracking-[-0.025em]">
                {team.title}
              </h3>
              <p className="text-ink-muted text-[17px] leading-[1.45]">
                {team.description}
              </p>
            </div>
            <TeamVisualBlock visual={team.visual} />
            <a
              href={team.href}
              className="text-accent hover:text-accent-hover inline-flex items-center gap-1.5 text-[17px] font-medium transition-colors"
            >
              Learn more{" "}
              <span className="transition-transform group-hover/card:translate-x-0.5">
                ›
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

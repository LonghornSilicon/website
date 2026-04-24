import { teams } from "@/data/teams";
import type { TeamVisual } from "@/data/teams";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/primitives/SectionHeading";

const visualClass: Record<TeamVisual, string> = {
  design: "team-visual-design",
  verification: "team-visual-verification",
  physical: "team-visual-physical",
};

export function Teams() {
  return (
    <section
      className="bg-bg-gray px-[22px] py-[120px] text-center text-ink"
      id="teams"
    >
      <div className="mx-auto max-w-[980px]">
        <SectionHeading className="reveal">
          Three teams. <span className="text-ink-secondary">One tapeout.</span>
        </SectionHeading>
        <p className="reveal mx-auto mb-14 max-w-[640px] text-[clamp(19px,2vw,22px)] leading-snug tracking-[-0.012em] text-ink-secondary">
          Design, verification, and physical design — the full stack, split into
          squads so everyone ships with depth.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:grid-cols-3">
        {teams.map((team) => (
          <article
            key={team.id}
            className="group/card reveal relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[22px] bg-black px-9 py-12 text-left text-white transition-transform duration-[400ms] [transition-timing-function:var(--ease-apple)] hover:-translate-y-1.5"
          >
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
                {team.eyebrow}
              </p>
              <h3 className="my-3 text-[40px] font-semibold leading-tight tracking-[-0.025em]">
                {team.title}
              </h3>
              <p className="text-[17px] leading-[1.45] text-white/75">
                {team.description}
              </p>
            </div>
            <div
              className={cn(
                "my-8 aspect-[4/3] w-full rounded-xl",
                visualClass[team.visual],
              )}
            />
            <a
              href={team.href}
              className="inline-flex items-center gap-1.5 text-[17px] font-normal text-accent"
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

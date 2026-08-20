import { teams } from "@/data/teams";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export function Teams() {
  return (
    <section
      className="bg-bg text-ink scroll-mt-16 px-6 py-24 text-center md:scroll-mt-[72px] md:py-32"
      id="teams"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal mb-14">
          Teams. <span className="text-ink-muted">How the work splits.</span>
        </SectionHeading>
      </div>

      <ul className="border-border mx-auto max-w-[880px] list-none border-t text-left">
        {teams.map((team) => (
          <li
            key={team.id}
            className="reveal border-border grid grid-cols-1 gap-1 border-b py-7 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <div className="text-ink-muted font-mono text-xs md:col-span-1">
              {team.index}
            </div>
            <h4 className="font-display text-ink text-[20px] font-medium tracking-[-0.02em] md:col-span-4">
              {team.name}
            </h4>
            <p className="text-ink-muted text-[15px] leading-normal md:col-span-7">
              {team.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

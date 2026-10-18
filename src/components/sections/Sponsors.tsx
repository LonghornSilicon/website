import Image from "next/image";
import { sponsors } from "@/data/sponsors";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Marquee } from "@/components/ui/marquee";

function SponsorCard({ sponsor }: { sponsor: (typeof sponsors)[number] }) {
  const cardClass =
    "flex h-20 w-44 shrink-0 items-center justify-center rounded-card border border-border bg-surface px-4 py-3 shadow-card transition-all duration-300 hover:-translate-y-[2px] hover:border-accent/40 hover:shadow-elevated";

  const inner =
    sponsor.kind === "logo" ? (
      <Image
        src={sponsor.src}
        alt={sponsor.name}
        width={sponsor.width}
        height={sponsor.height}
        className={
          sponsor.imgClassName ?? "max-h-12 w-auto max-w-[140px] object-contain"
        }
        unoptimized
      />
    ) : (
      <span className="text-ink-muted font-mono text-[11px] tracking-[0.1em] uppercase">
        {sponsor.name}
      </span>
    );

  if (sponsor.kind === "logo" && sponsor.href) {
    return (
      <a
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={sponsor.name}
        className={cardClass}
      >
        {inner}
      </a>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export function Sponsors() {
  return (
    <section
      className="bg-surface text-ink px-6 py-24 text-center md:py-32"
      id="sponsors"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal mb-14">
          Partners & platforms
        </SectionHeading>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="from-surface pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent" />
        <div className="from-surface pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent" />

        <Marquee className="[--duration:28s]">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

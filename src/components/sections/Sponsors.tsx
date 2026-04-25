import Image from "next/image";
import { sponsors } from "@/data/sponsors";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export function Sponsors() {
  const logos = sponsors.filter((s) => s.kind === "logo");
  const names = sponsors.filter((s) => s.kind === "text");

  return (
    <section
      className="bg-surface px-6 py-24 text-center text-ink md:py-32"
      id="sponsors"
    >
      <div className="mx-auto max-w-[980px] text-center">
        <SectionHeading className="reveal mb-14">
          Partners & platforms.{" "}
          <span className="text-ink-muted">Standing on tall shoulders.</span>
        </SectionHeading>
      </div>

      {logos.length > 0 ? (
        <div className="mx-auto mb-14 flex max-w-[900px] flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((logo) => {
            if (logo.kind !== "logo") return null;
            const image = (
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain md:h-12"
                sizes="(max-width: 768px) 40vw, 220px"
                unoptimized
              />
            );

            const wrapperClass =
              "reveal inline-flex items-center justify-center rounded-card border border-border bg-surface px-5 py-3 shadow-card transition-all duration-300 hover:-translate-y-[2px] hover:border-accent/40 hover:shadow-elevated";

            return logo.href ? (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.name}
                className={wrapperClass}
              >
                {image}
              </a>
            ) : (
              <div
                key={logo.name}
                aria-label={logo.name}
                className={wrapperClass}
              >
                {image}
              </div>
            );
          })}
        </div>
      ) : null}

      {names.length > 0 ? (
        <div className="mx-auto flex max-w-[900px] flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {names.map((s) =>
            s.kind === "text" ? (
              <span
                key={s.name}
                className="reveal font-mono text-[13px] uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-accent"
              >
                {s.name}
              </span>
            ) : null,
          )}
        </div>
      ) : null}
    </section>
  );
}

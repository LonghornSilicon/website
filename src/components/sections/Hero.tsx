import Image from "next/image";
import { Button } from "@/components/primitives/Button";
import { Marquee } from "@/components/ui/marquee";
import { RetroGrid } from "@/components/ui/retro-grid";
import { sponsors } from "@/data/sponsors";
import { SITE } from "@/lib/site";

const logoSponsors = sponsors.filter((s) => s.kind === "logo");

export function Hero() {
  return (
    <section className="bg-bg relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
      <RetroGrid
        className="-z-10"
        angle={65}
        cellSize={60}
        opacity={0.55}
        lightLineColor="rgba(191,87,0,0.4)"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(191,87,0,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="via-border absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent to-transparent"
      />

      <div className="relative z-0 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-6 py-12 md:py-16">
        <h1
          className="animate-fade-up font-display text-ink text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-[1.02]"
          style={{ animationDelay: "0.12s" }}
        >
          Chips, designed
          <br />
          <span className="text-accent">at Texas.</span>
        </h1>

        <p
          className="animate-fade-up text-ink-muted mx-auto mt-7 max-w-xl text-center text-lg leading-relaxed md:mt-8 md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          First student silicon team at UT Austin, designing an AI inference
          accelerator targeting TSMC 16nm.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4"
          style={{ animationDelay: "0.26s" }}
        >
          <Button
            href="https://github.com/LonghornSilicon/"
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check us out
          </Button>
          <Button
            href={SITE.applyUrl}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply now
          </Button>
        </div>

        <div
          className="animate-fade-up mt-14 w-full max-w-2xl sm:mt-16"
          style={{ animationDelay: "0.34s" }}
        >
          <p className="text-ink-muted/60 mb-5 text-center font-mono text-[11px] tracking-[0.12em] uppercase">
            Supported by
          </p>
          <div className="relative">
            <div className="from-bg pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent" />
            <div className="from-bg pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent" />
            <Marquee className="[--duration:22s] [--gap:2.5rem]">
              {logoSponsors.map((logo) =>
                logo.kind === "logo" ? (
                  <a
                    key={logo.name}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={logo.name}
                    className="flex items-center opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className={
                        logo.name === "ChipAgents"
                          ? "max-h-11 w-auto max-w-[140px] object-contain"
                          : "max-h-8 w-auto max-w-[100px] object-contain"
                      }
                      unoptimized
                    />
                  </a>
                ) : null,
              )}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

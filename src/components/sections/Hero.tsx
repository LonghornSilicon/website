import { Button } from "@/components/primitives/Button";
import { ChipDie } from "@/components/visuals/ChipDie";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <header className="hero-surface">
      <div className="relative z-[1] max-w-[980px]">
        <div
          className="animate-fade-up mb-2 text-[19px] font-normal tracking-[-0.01em] text-accent"
          style={{ animationDelay: "0.1s" }}
        >
          Introducing Longhorn Silicon.
        </div>
        <h1
          className="animate-fade-up mb-5 text-[clamp(48px,9vw,96px)] font-semibold leading-[1.05] tracking-[-0.04em] text-hero-fg"
          style={{ animationDelay: "0.2s" }}
        >
          Chips,{" "}
          <span className="bg-gradient-to-br from-[#ff7a1a] from-0% via-accent via-50% to-[#7a3900] to-100% bg-clip-text text-transparent">
            designed at Texas.
          </span>
        </h1>
        <p
          className="animate-fade-up mx-auto mb-9 max-w-[640px] text-[clamp(19px,2.2vw,24px)] font-normal leading-snug tracking-[-0.012em] text-hero-muted"
          style={{ animationDelay: "0.35s" }}
        >
          A student-led silicon design lab at UT Austin — building custom chips
          from RTL to tapeout.
        </p>
        <div
          className="animate-fade-up flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "0.5s" }}
        >
          <Button href="#mission" variant="primary">
            Explore the work
          </Button>
          <Button href={`mailto:${SITE.contactEmail}`} variant="secondary">
            Contact us
          </Button>
        </div>

        <div
          className="animate-fade-up mt-[60px]"
          style={{ animationDelay: "0.7s", animationDuration: "1.2s" }}
        >
          <ChipDie />
        </div>
      </div>
    </header>
  );
}

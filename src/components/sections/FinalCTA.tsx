import { Button } from "@/components/primitives/Button";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-accent relative overflow-hidden px-6 py-24 text-center text-white md:py-32">
      <div
        className="final-cta-grid pointer-events-none absolute inset-0"
        aria-hidden
      />
      <h2 className="font-display relative mx-auto mb-5 max-w-[800px] text-[clamp(40px,6vw,72px)] leading-[1.05] font-semibold tracking-[-0.035em]">
        Want in on the next shuttle?
      </h2>
      <p className="relative mx-auto mb-9 max-w-[540px] text-xl leading-relaxed text-white/90">
        We&apos;re always looking for curious builders — analog, digital, or
        somewhere in between.
      </p>
      <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4">
        <Button
          href={`mailto:${SITE.contactEmail}`}
          variant="inverse"
          size="lg"
        >
          Email the lab
        </Button>
        <Button
          href="#mission"
          variant="ghost"
          size="lg"
          className="ring-offset-accent border border-white/45 !text-white hover:!bg-white/10"
        >
          Read the mission
        </Button>
      </div>
    </section>
  );
}

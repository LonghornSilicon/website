import { Button } from "@/components/primitives/Button";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="final-cta-surface">
      <h2 className="relative mx-auto mb-5 max-w-[800px] text-[clamp(40px,6vw,72px)] font-semibold leading-[1.05] tracking-[-0.035em]">
        Want in on the next shuttle?
      </h2>
      <p className="relative mx-auto mb-9 max-w-[540px] text-xl opacity-90">
        We&apos;re always looking for curious builders — analog, digital, or
        somewhere in between.
      </p>
      <div className="relative flex flex-wrap justify-center gap-4">
        <Button
          href={`mailto:${SITE.contactEmail}`}
          variant="primary"
          className="!bg-white !text-accent hover:!bg-[#f5f5f7]"
        >
          Email the lab
        </Button>
        <Button
          href="#mission"
          variant="secondary"
          className="!text-white !border-white/50"
        >
          Read the mission
        </Button>
      </div>
    </section>
  );
}

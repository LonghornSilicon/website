import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-accent relative scroll-mt-16 overflow-hidden px-6 py-24 text-center text-white md:scroll-mt-[72px] md:py-32"
    >
      <div
        className="final-cta-grid pointer-events-none absolute inset-0"
        aria-hidden
      />
      <h2 className="font-display relative mx-auto mb-5 max-w-[800px] text-[clamp(40px,6vw,72px)] leading-[1.05] font-semibold tracking-[-0.035em]">
        Interested?
      </h2>
      <p className="relative mx-auto max-w-[540px] text-xl leading-relaxed text-white/90">
        We&apos;re looking for intrinsically motivated, intelligent students,
        plus industry partners and faculty willing to support.
      </p>
      <p className="relative mt-8 text-lg font-medium tracking-tight text-white">
        {SITE.contactEmail}
      </p>
    </section>
  );
}

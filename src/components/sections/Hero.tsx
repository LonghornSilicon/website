import { Button } from "@/components/primitives/Button";

export function Hero() {
  return (
    <section className="bg-bg relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
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
          className="animate-fade-up font-display text-center text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-[1.02]"
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
          First student silicon club at UT Austin. Building an AI inference
          accelerator on TSMC 16nm.
        </p>

        <div
          className="animate-fade-up mt-10 flex justify-center sm:mt-12"
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
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/primitives/Button";

export function Hero() {
  return (
    <section className="bg-bg relative isolate overflow-hidden">
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

      <div className="mx-auto max-w-[1200px] px-6 pt-8 pb-24 md:pt-12 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-14 md:gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <h1
              className="animate-fade-up font-display text-ink text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[5.25rem] lg:leading-[1.02]"
              style={{ animationDelay: "0.12s" }}
            >
              Chips,
              <br />
              <span className="relative inline-block">
                <span className="text-accent relative z-10">
                  designed at Texas.
                </span>
                <span
                  aria-hidden="true"
                  className="bg-accent absolute inset-x-0 -bottom-[3px] h-[3px] rounded-full opacity-35 md:-bottom-1 md:h-1"
                />
              </span>
            </h1>

            <p
              className="animate-fade-up text-ink-muted mt-7 max-w-xl text-lg leading-relaxed md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              A student-led silicon design club at UT Austin — building custom
              chips from RTL to tapeout.
            </p>
            <div
              className="animate-fade-up mt-8"
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

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="rounded-card border-border bg-surface shadow-card mx-auto flex aspect-square w-full max-w-[min(100%,392px)] items-center justify-center border p-5 sm:max-w-[412px] sm:p-6 md:max-w-[432px] md:p-7">
              <Image
                src="/brand/lambda.png"
                alt=""
                width={1024}
                height={1022}
                className="max-h-[91%] max-w-[91%] object-contain [filter:drop-shadow(0_12px_32px_rgba(0,0,0,0.08))]"
                sizes="(max-width: 1024px) 92vw, 432px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

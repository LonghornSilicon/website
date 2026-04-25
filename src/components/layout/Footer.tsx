import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#141414] px-6 pt-16 pb-8 text-[13px] text-white/60">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="to-accent inline-block size-6 shrink-0 rounded-sm bg-gradient-to-br from-[#ff7a1a]" />
            <span className="font-display text-[17px] font-semibold tracking-tight text-white">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {SITE.description}
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 tracking-[0.12em] text-white/70 uppercase">
              Chips, designed at Texas
            </span>
            <span className="text-white/45">
              Built for students, by students.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

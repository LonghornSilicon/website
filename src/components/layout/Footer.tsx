import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#141414] px-6 pt-8 pb-8 text-[13px] text-white/60">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
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

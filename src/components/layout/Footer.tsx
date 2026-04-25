import { SITE } from "@/lib/site";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Mission", href: "#mission" },
      { label: "Teams", href: "#teams" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "GitHub", href: "https://github.com/LonghornSilicon" },
    ],
  },
  {
    title: "University",
    links: [
      { label: "UT Austin", href: "https://www.utexas.edu" },
      { label: "ECE", href: "https://www.ece.utexas.edu" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#141414] px-6 pt-16 pb-8 text-[13px] text-white/60">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
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

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <div className="text-xs tracking-[0.14em] text-white/40 uppercase">
                  {col.title}
                </div>
                <ul className="mt-4 list-none space-y-3 text-sm text-white/80">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-white"
                        {...(link.href.startsWith("http")
                          ? { rel: "noopener noreferrer", target: "_blank" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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

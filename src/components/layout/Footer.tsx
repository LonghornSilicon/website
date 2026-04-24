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
      { label: "Email", href: `mailto:${SITE.contactEmail}` },
      { label: "GitHub", href: "https://github.com" },
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
    <footer className="bg-black px-[22px] pb-8 pt-16 text-[13px] text-hero-muted">
      <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-10 border-b border-white/10 pb-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3 flex items-center gap-2 text-[15px] font-medium text-hero-fg">
            <span className="inline-block size-5 rounded-sm bg-gradient-to-br from-[#ff7a1a] to-accent" />
            {SITE.name}
          </div>
          <p className="max-w-[320px] leading-relaxed">
            {SITE.description}
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title} className="footer-col">
            <h5 className="mb-3.5 text-[13px] font-medium text-hero-fg">
              {col.title}
            </h5>
            <ul className="list-none">
              {col.links.map((link) => (
                <li key={link.href} className="mb-2">
                  <a
                    href={link.href}
                    className="transition-colors hover:text-hero-fg"
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
      <div className="mx-auto mt-8 flex max-w-[980px] flex-wrap items-center justify-between gap-3 text-xs text-hero-muted">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>Built for students, by students.</span>
      </div>
    </footer>
  );
}

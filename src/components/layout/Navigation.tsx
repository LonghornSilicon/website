import { navLinks } from "@/data/nav";
import { cn } from "@/lib/cn";

export function Navigation() {
  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-12 border-b border-white/[0.08]",
        "bg-black/80 backdrop-blur-xl backdrop-saturate-[180%]",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-[22px] text-sm text-hero-fg">
        <a href="#top" className="flex items-center gap-2.5 font-medium tracking-[-0.01em]">
          <span className="inline-block size-[22px] rounded-sm bg-gradient-to-br from-[#ff7a1a] to-accent" />
          Longhorn Silicon
        </a>
        <ul className="hidden list-none items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className="text-xs font-normal opacity-[0.88] transition-opacity hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

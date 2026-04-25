"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { Button } from "@/components/primitives/Button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-border bg-surface/80 border-b backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        <Link
          href="#top"
          className="text-ink shrink-0 text-[15px] font-semibold tracking-tight md:text-base"
          aria-label={`${SITE.name} home`}
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="text-ink/80 hover:text-ink text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex md:items-center md:gap-2">
          <Button
            href={`mailto:${SITE.contactEmail}`}
            variant="primary"
            size="sm"
          >
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="rounded-button border-border text-ink inline-flex h-10 w-10 items-center justify-center border md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-border bg-surface border-t md:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-ink py-3 text-base"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={`mailto:${SITE.contactEmail}`}
              variant="primary"
              size="md"
              className="mt-4 w-full"
            >
              Contact
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

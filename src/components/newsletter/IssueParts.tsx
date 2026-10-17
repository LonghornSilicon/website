import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { NewsletterIssue, Photo } from "@/data/newsletters";
import { cn } from "@/lib/cn";

/* Shared building blocks for the web edition of Longhorn Silicon Monthly.
   Keep these generic; issue-specific content lives in the route itself. */

export function IssueHeader({
  issue,
  standfirst,
}: {
  issue: NewsletterIssue;
  standfirst: ReactNode;
}) {
  return (
    <header className="border-border border-b pb-10 md:pb-14">
      <p className="text-ink-muted flex flex-wrap items-baseline gap-x-3 text-[13px]">
        <Link
          href="/newsletter"
          className="text-accent font-semibold tracking-[0.04em] uppercase hover:underline"
        >
          Longhorn Silicon Monthly
        </Link>
        <span>
          Issue {issue.number}, {issue.month}
        </span>
      </p>
      <h1 className="font-display text-ink mt-5 max-w-[14ch] text-[clamp(40px,7vw,80px)] leading-[1.02] font-semibold tracking-[-0.035em]">
        {issue.title}
      </h1>
      <div className="text-ink mt-7 max-w-[640px] text-[19px] leading-[1.5] md:text-[21px]">
        {standfirst}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {/* Plain anchor so the router doesn't try to client-navigate to a PDF. */}
        <a
          href={issue.pdf}
          download
          className="rounded-button border-border bg-surface text-ink hover:border-ink/30 hover:bg-bg inline-flex h-9 items-center justify-center border px-4 text-sm font-medium transition-[background,color,border] duration-200"
        >
          Download the PDF
        </a>
        <Link
          href="/newsletter"
          className="text-ink-muted hover:text-ink px-2 text-sm underline-offset-4 hover:underline"
        >
          All issues
        </Link>
      </div>
    </header>
  );
}

export type TocItem = { id: string; label: string; group?: string };

export function IssueToc({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="In this issue"
      className="border-border text-[14px] lg:sticky lg:top-28 lg:border-l lg:pl-5"
    >
      <p className="text-ink mb-3 font-medium">In this issue</p>
      <ol className="flex flex-wrap gap-x-4 gap-y-1.5 lg:flex-col lg:gap-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-ink-muted hover:text-ink transition-colors"
            >
              {item.group ? (
                <span className="text-ink-muted/70 mr-1.5 font-mono text-[11px]">
                  {item.group}
                </span>
              ) : null}
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function IssueSection({
  id,
  kicker,
  title,
  leads,
  children,
  className,
}: {
  id: string;
  kicker?: string;
  title: string;
  leads?: string[];
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-border scroll-mt-24 border-t pt-10 md:scroll-mt-28 md:pt-12",
        className,
      )}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div>
          {kicker ? (
            <p className="text-accent mb-2 text-[13px] font-semibold tracking-[0.04em] uppercase">
              {kicker}
            </p>
          ) : null}
          <h2 className="font-display text-ink text-[clamp(30px,4.2vw,44px)] leading-[1.08] font-semibold tracking-[-0.03em]">
            {title}
          </h2>
        </div>
        {leads && leads.length ? (
          <p className="text-ink-muted text-[14px] md:text-right">
            <span className="block text-[12px] tracking-[0.04em] uppercase">
              {leads.length > 1 ? "Leads" : "Lead"}
            </span>
            {leads.join(", ")}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("issue-prose max-w-[680px]", className)}>{children}</div>
  );
}

export function Figure({
  photo,
  priority,
  sizes = "(max-width: 1024px) 100vw, 880px",
  className,
  imgClassName,
  caption = photo.caption,
}: {
  photo: Photo;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  caption?: string | null;
}) {
  return (
    <figure className={className}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        className={cn("rounded-card h-auto w-full", imgClassName)}
      />
      {caption ? (
        <figcaption className="text-ink-muted mt-2.5 text-[13px] leading-snug">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Boxed side note, like the schedule box in the print edition. */
export function Aside({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-card border-border bg-surface border p-5 md:p-6",
        className,
      )}
    >
      <h3 className="font-display text-ink mb-3 text-[18px] font-semibold tracking-[-0.01em]">
        {title}
      </h3>
      {children}
    </aside>
  );
}

/** Two-up prose columns on wide screens, stacked on narrow ones. */
export function Columns({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
      {children}
    </div>
  );
}

/**
 * Photo mosaic. The first photo is the anchor and gets the most room; the
 * rest fill in around it. Works for 3 to 8 photos.
 */
export function PhotoMosaic({
  photos,
  className,
  captions = true,
}: {
  photos: Photo[];
  className?: string;
  captions?: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid list-none grid-cols-2 gap-2 md:grid-cols-6 md:gap-3",
        className,
      )}
    >
      {photos.map((photo, i) => {
        const anchor = i === 0;
        const wide = i === 2 || i === 5;
        return (
          <li
            key={photo.src}
            className={cn(
              "relative overflow-hidden rounded-[10px]",
              anchor
                ? "col-span-2 row-span-2 aspect-[4/3] md:col-span-3 md:aspect-auto"
                : wide
                  ? "col-span-2 aspect-[16/9] md:col-span-3 md:aspect-[16/8]"
                  : "aspect-[4/3] md:col-span-3 md:aspect-[16/8]",
            )}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={
                anchor
                  ? "(max-width: 768px) 100vw, 600px"
                  : "(max-width: 768px) 50vw, 600px"
              }
              className="object-cover"
            />
            {captions && photo.caption ? (
              <span className="sr-only">{photo.caption}</span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

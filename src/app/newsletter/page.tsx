import type { Metadata } from "next";
import Image from "next/image";
import { issuePath, issues } from "@/data/newsletters";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Longhorn Silicon Monthly: every issue of the club newsletter, newest first.",
  openGraph: {
    title: "Longhorn Silicon Monthly",
    description: "Every issue of the club newsletter, newest first.",
    url: "/newsletter",
    images: [{ url: issues[0].cover.src }],
  },
};

export default function NewsletterIndexPage() {
  return (
    <div className="bg-bg px-6 pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-[1200px]">
        <header className="border-border max-w-[760px] border-b pb-10 md:pb-14">
          <h1 className="font-display text-ink text-[clamp(40px,7vw,80px)] leading-[1.02] font-semibold tracking-[-0.035em]">
            Longhorn Silicon Monthly
          </h1>
        </header>

        <ol className="list-none">
          {issues.map((issue) => {
            const href = issuePath(issue);
            return (
              <li
                key={issue.slug}
                className="border-border grid grid-cols-1 gap-x-10 gap-y-6 border-b py-10 md:grid-cols-12 md:py-14"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-card block overflow-hidden md:col-span-4 lg:col-span-3"
                  aria-label={`Open issue ${issue.number}, ${issue.title} (PDF)`}
                >
                  <Image
                    src={issue.cover.src}
                    alt={issue.cover.alt}
                    width={issue.cover.width}
                    height={issue.cover.height}
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.02] md:aspect-[4/5]"
                    priority
                  />
                </a>
                <div className="flex flex-col md:col-span-8 lg:col-span-7">
                  <p className="text-ink-muted text-[14px]">
                    Issue {issue.number}, {issue.month}
                  </p>
                  <h2 className="font-display text-ink mt-2 text-[clamp(28px,4vw,44px)] leading-[1.08] font-semibold tracking-[-0.03em]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {issue.title}
                    </a>
                  </h2>
                  <p className="text-ink mt-4 max-w-[60ch] text-[17px] leading-[1.55]">
                    {issue.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-medium underline-offset-4 hover:underline"
                    >
                      Open the issue
                    </a>
                    <a
                      href={href}
                      download
                      className="text-ink-muted hover:text-ink underline-offset-4 hover:underline"
                    >
                      Download the PDF
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

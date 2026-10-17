import { issue as september2026 } from "@/data/newsletters/2026-09";

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type NewsletterIssue = {
  /** Folder name under /public/newsletter, e.g. "2026-09" */
  slug: string;
  number: number;
  /** Cover line for the issue, e.g. "September 2026" */
  month: string;
  /** Headline of the editors' note */
  title: string;
  /** One or two sentences for the archive list and social previews */
  summary: string;
  cover: Photo;
  /** Path under /public to the PDF export */
  pdf: string;
  photos: Photo[];
};

/**
 * Every published issue, newest first. To add one: drop the PDF (and any
 * photos you want on the site) into /public/newsletter/<slug>/, describe the
 * issue in src/data/newsletters/<slug>.ts, and add it to the top of this list.
 */
export const issues: NewsletterIssue[] = [september2026];

export const latestIssue = issues[0];

/** Issues are read as the PDF itself; this is the link to open one. */
export function issuePath(issue: NewsletterIssue) {
  return issue.pdf;
}

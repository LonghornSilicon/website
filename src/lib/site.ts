export const SITE = {
  name: "Longhorn Silicon",
  /** Set `NEXT_PUBLIC_SITE_URL` in Vercel for correct canonical / OG URLs */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://longhornsilicon.org",
  description:
    "Longhorn Silicon is a student-led chip design club at The University of Texas at Austin. We design, tape out, and bring up custom silicon.",
  contactEmail: "info@longhornsilicon.com",
} as const;

export const SITE = {
  name: "Longhorn Silicon",
  /** Set `NEXT_PUBLIC_SITE_URL` in Vercel for correct canonical / OG URLs */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://longhornsilicon.org",
  description:
    "Longhorn Silicon is a student-led chip design club at The University of Texas at Austin. We design and verify custom silicon, working toward our first tape-out.",
  contactEmail: "info@longhornsilicon.com",
  /** Member application form */
  applyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdbfuvnnw95GTTLy55Qia-kSBycU5m-wSyWF6H_qDLIzhKAyw/viewform?usp=header",
} as const;

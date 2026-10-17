export type NavLink = {
  label: string;
  href: string;
};

/* Hash links are rooted at "/" so they work from /newsletter pages too. */
export const navLinks: NavLink[] = [
  { label: "Mission", href: "/#mission" },
  { label: "Teams", href: "/#teams" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Sponsors", href: "/#sponsors" },
];

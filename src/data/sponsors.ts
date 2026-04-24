export type Sponsor =
  | { kind: "text"; name: string }
  | {
      kind: "logo";
      name: string;
      src: string;
      width: number;
      height: number;
      href?: string;
    };

export const sponsors: Sponsor[] = [
  {
    kind: "logo",
    name: "Laboratory for Computer Architecture",
    src: "/sponsors/lca.jpg",
    width: 500,
    height: 128,
    href: "https://lca.ece.utexas.edu",
  },
  {
    kind: "logo",
    name: "ChipAgents",
    src: "/sponsors/chipagents.png",
    width: 460,
    height: 122,
    href: "https://chipagents.ai",
  },
];

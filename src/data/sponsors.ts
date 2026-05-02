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
    name: "Cadence",
    src: "/sponsors/cadence.jpg",
    width: 1024,
    height: 256,
    href: "https://www.cadence.com",
  },
  {
    kind: "logo",
    name: "ChipAgents",
    src: "/sponsors/chipagents.png",
    width: 460,
    height: 122,
    href: "https://chipagents.ai",
  },
  {
    kind: "logo",
    name: "Bronco AI",
    src: "/sponsors/bronco-ai.jpg",
    width: 1024,
    height: 512,
    href: "https://www.bronco.ai/",
  },
  {
    kind: "logo",
    name: "Laboratory for Computer Architecture",
    src: "/sponsors/lca.jpg",
    width: 425,
    height: 80,
    href: "https://lca.ece.utexas.edu",
  },
];

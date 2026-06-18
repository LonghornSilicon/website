export type Sponsor =
  | { kind: "text"; name: string }
  | {
      kind: "logo";
      name: string;
      src: string;
      width: number;
      height: number;
      href?: string;
      /** Optional Tailwind override for the rendered logo size (e.g. logos with extra whitespace). */
      imgClassName?: string;
    };

export const sponsors: Sponsor[] = [
  // Startups
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
    name: "ChipAgents",
    src: "/sponsors/chipagents.png",
    width: 480,
    height: 280,
    href: "https://chipagents.ai",
    imgClassName: "max-h-16 w-auto max-w-[210px] object-contain",
  },
  {
    kind: "logo",
    name: "Etched",
    src: "/sponsors/etched-ai.png",
    width: 296,
    height: 170,
    href: "https://www.etched.com",
  },
  {
    kind: "logo",
    name: "Sigmantic AI",
    src: "/sponsors/SigmanticAIOfficial.png",
    width: 1254,
    height: 1254,
    href: "https://www.sigmanticai.com/",
  },
  // Established industry
  {
    kind: "logo",
    name: "Cadence",
    src: "/sponsors/cadence.png",
    width: 1200,
    height: 300,
    href: "https://www.cadence.com",
  },
  {
    kind: "logo",
    name: "Synopsys",
    src: "/sponsors/synopsys_logo.svg_.webp",
    width: 1280,
    height: 290,
    href: "https://www.synopsys.com",
  },
  {
    kind: "logo",
    name: "Silicon Labs",
    src: "/sponsors/Silicon_Labs_2015.svg.png",
    width: 1280,
    height: 659,
    href: "https://www.silabs.com",
  },
  // Labs
  {
    kind: "logo",
    name: "Laboratory for Computer Architecture",
    src: "/sponsors/lca.jpg",
    width: 425,
    height: 80,
    href: "https://lca.ece.utexas.edu",
  },
  {
    kind: "logo",
    name: "UTDA",
    src: "/sponsors/UTDA.png",
    width: 1064,
    height: 230,
    href: "https://www.cerc.utexas.edu/utda/",
  },
];

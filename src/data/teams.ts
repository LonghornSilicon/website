export type TeamVisual = "design" | "verification" | "physical";

export type Team = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  visual: TeamVisual;
};

export const teams: Team[] = [
  {
    id: "design",
    eyebrow: "Design",
    title: "RTL & microarchitecture.",
    description:
      "SystemVerilog, IP integration, and power-performance tradeoffs — from block specs to synthesizable RTL.",
    href: "#mission",
    visual: "design",
  },
  {
    id: "verification",
    eyebrow: "Verification",
    title: "Signoff you can trust.",
    description:
      "Constrained-random stimulus, coverage-driven closure, and formal checks so tapeout day is boring in the best way.",
    href: "#roadmap",
    visual: "verification",
  },
  {
    id: "physical",
    eyebrow: "Physical Design",
    title: "From netlist to GDSII.",
    description:
      "Floorplanning, place-and-route, timing closure, and DRC/LVS — Sky130 to advanced nodes when the shuttle allows.",
    href: "#stats",
    visual: "physical",
  },
];

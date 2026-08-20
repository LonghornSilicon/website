export type Team = {
  id: string;
  index: string;
  name: string;
  description: string;
};

export const teams: Team[] = [
  {
    id: "architecture",
    index: "01",
    name: "Architecture",
    description:
      "Workload analysis, microarchitecture, and the PPA tradeoffs behind every block.",
  },
  {
    id: "rtl-design",
    index: "02",
    name: "RTL Design",
    description:
      "SystemVerilog implementation of the compute datapath, memory hierarchy, and interfaces.",
  },
  {
    id: "design-verification",
    index: "03",
    name: "Design Verification",
    description:
      "Testbenches, coverage closure, and formal proofs against the specification.",
  },
  {
    id: "physical-design",
    index: "04",
    name: "Physical Design",
    description:
      "Synthesis through place-and-route, with timing, DRC, and LVS signoff.",
  },
];

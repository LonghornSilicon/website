export type Milestone = {
  id: string;
  phase: string;
  title: string;
  description: string;
  date: string;
  done: boolean;
};

export const roadmap: Milestone[] = [
  {
    id: "m1",
    phase: "01",
    title: "Lab charter & tooling",
    description:
      "Repo hygiene, EDA access, and a shared verification methodology so every contributor ships safely.",
    date: "Fall 2024",
    done: true,
  },
  {
    id: "m2",
    phase: "02",
    title: "LHS-01 RTL freeze",
    description:
      "Feature-complete RISC-V SoC with memory hierarchy, peripherals, and DV signoff criteria met.",
    date: "Spring 2025",
    done: false,
  },
  {
    id: "m3",
    phase: "03",
    title: "Shuttle submission",
    description:
      "GDSII tapeout package, LVS/DRC clean, and foundry paperwork filed — then we wait (and verify some more).",
    date: "TBD",
    done: false,
  },
  {
    id: "m4",
    phase: "04",
    title: "Bring-up",
    description:
      "Packaged silicon on the bench, first boot, and a demo the whole department can gather around.",
    date: "Post-silicon",
    done: false,
  },
];

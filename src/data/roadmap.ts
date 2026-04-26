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
    title: "Charter & Tooling",
    description:
      "Secure industry-grade EDA stack and establish versioned RTL and verification infrastructure.",
    date: "Spring 2026",
    done: false,
  },
  {
    id: "m2",
    phase: "02",
    title: "Architecture Lock",
    description:
      "Define target workloads, finalize microarchitecture, and lock the system-level specification.",
    date: "Fall 2026",
    done: false,
  },
  {
    id: "m3",
    phase: "03",
    title: "RTL Freeze",
    description:
      "Feature-complete accelerator RTL with full design verification signoff.",
    date: "Spring 2027",
    done: false,
  },
  {
    id: "m4",
    phase: "04",
    title: "Tapeout",
    description:
      "GDSII submission with LVS and DRC clean on TSMC 16nm.",
    date: "TBD",
    done: false,
  },
  {
    id: "m5",
    phase: "05",
    title: "Bring-up",
    description:
      "Silicon validation, board-level bring-up, and first on-chip inference.",
    date: "Post-silicon",
    done: false,
  },
];

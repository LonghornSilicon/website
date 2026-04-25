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
    title: "Charter & tooling",
    description:
      "EDA access, repo setup, and a shared verification flow.",
    date: "Spring 2026",
    done: false,
  },
  {
    id: "m2",
    phase: "02",
    title: "Architecture lock",
    description:
      "Pick the workload, freeze the microarchitecture, draft the spec.",
    date: "Fall 2026",
    done: false,
  },
  {
    id: "m3",
    phase: "03",
    title: "RTL freeze",
    description:
      "Feature-complete inference accelerator with DV signoff.",
    date: "Spring 2027",
    done: false,
  },
  {
    id: "m4",
    phase: "04",
    title: "Tapeout",
    description:
      "GDSII out the door. LVS and DRC clean on TSMC 16 nm.",
    date: "TBD",
    done: false,
  },
  {
    id: "m5",
    phase: "05",
    title: "Bring-up",
    description: "Packaged silicon on the bench. First inference.",
    date: "Post-silicon",
    done: false,
  },
];

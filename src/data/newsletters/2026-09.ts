import type { NewsletterIssue, Photo } from "@/data/newsletters";

const dir = "/newsletter/2026-09";

export const photos = {
  recap: {
    src: `${dir}/september-recap.jpg`,
    alt: "The first Longhorn Silicon cohort on the EER stairs, holding up the Hook 'em sign, with the words Longhorn Silicon September Recap overlaid",
    width: 1440,
    height: 1800,
    caption: "The September recap cover: the first cohort on the EER stairs.",
  },
  cohort: {
    src: `${dir}/cohort-eer-stairs.jpg`,
    alt: "Around fifty students posing on the EER stairs, holding up the Hook 'em sign",
    width: 1440,
    height: 1225,
    caption: "The first cohort, September 2026.",
  },
  generalMeeting: {
    src: `${dir}/general-meeting.jpg`,
    alt: "A speaker presenting a block diagram to a full classroom at a general meeting",
    width: 1800,
    height: 1350,
    caption: "A September general meeting in EER.",
  },
  architecture: {
    src: `${dir}/architecture-team.jpg`,
    alt: "Eight members of the architecture team standing in a row in front of a whiteboard",
    width: 1800,
    height: 797,
    caption:
      "Members of the architecture team after a guest lecture from an industry engineer.",
  },
  rtlWorkday: {
    src: `${dir}/rtl-workday.jpg`,
    alt: "The RTL team seated around tables in EER on a Sunday workday, smiling at the camera",
    width: 1800,
    height: 1012,
    caption: "The RTL team on Workday 1.",
  },
  rtl: {
    src: `${dir}/rtl-team.jpg`,
    alt: "Eleven RTL team members standing together in a classroom, several holding up the Hook 'em sign",
    width: 1800,
    height: 930,
    caption: "The RTL team.",
  },
  dv: {
    src: `${dir}/dv-team.jpg`,
    alt: "The design verification team seated around a table in EER",
    width: 1800,
    height: 1013,
    caption: "The design verification team.",
  },
  pd: {
    src: `${dir}/pd-apprentices.jpg`,
    alt: "Physical design apprentices seated around a table with a startup spotlight slide on the screen behind them",
    width: 1600,
    height: 900,
    caption: "Our PD apprentices.",
  },
  inference: {
    src: `${dir}/inference-team.jpg`,
    alt: "The inference team around a table with laptops open",
    width: 1100,
    height: 458,
    caption: "The inference team.",
  },
} satisfies Record<string, Photo>;

export const issue: NewsletterIssue = {
  slug: "2026-09",
  number: 1,
  month: "September 2026",
  title: "Our first month",
  summary:
    "340 applications, the first general meetings and Sunday workdays, and TinyStories 28M picked as Reef's first workload. The teams report on what they did in September and what comes next.",
  cover: photos.recap,
  pdf: `${dir}/longhorn-silicon-monthly-2026-09.pdf`,
  photos: [
    photos.cohort,
    photos.generalMeeting,
    photos.rtlWorkday,
    photos.architecture,
    photos.dv,
    photos.rtl,
    photos.pd,
    photos.inference,
  ],
};

export const octoberSchedule = [
  { date: "Oct 13", what: "Minimal testbench (Arch + DV)" },
  {
    date: "Oct 14, 7:30 PM",
    what: "HRT x Longhorn Silicon hardware tech talk",
  },
  { date: "Oct 16", what: "Module initialization (Arch)" },
  { date: "Oct 20", what: "Architecture v0 specification" },
  { date: "Oct 25", what: "Functional simulator (Arch + Inference)" },
];

export const chipFacts: { label: string; value: string }[] = [
  {
    label: "Baseline",
    value: "Google Coral NPU, release M3-2026-04-27 (RISC-V RV32IMF + RVV)",
  },
  {
    label: "Node",
    value:
      "sky130 on the ChipFoundry double-wide OpenFrame while we wait on TSMC 65nm approval",
  },
  {
    label: "Area and I/O",
    value: "32.2 mm² user area inside the padframe, 63 GPIOs",
  },
  {
    label: "Weight memory",
    value: "Off-chip HyperRAM, with one port measuring 90 MB/s at 50 MHz",
  },
  { label: "On-chip memory", value: "40 KB TCM (8 KB ITCM + 32 KB DTCM)" },
  {
    label: "Compute",
    value: "Coral RVV core plus a 16×16 weight-stationary int8 array",
  },
  { label: "Clock", value: "16 to 20 MHz at the slow corner" },
  {
    label: "Decode",
    value:
      "Projected 1.65 tok/s on one HyperRAM port, 2.78 tok/s with an 8k vocabulary",
  },
];

export type Milestone = {
  date: string;
  title: string;
  detail: string;
  owners: string;
  done?: boolean;
  netlist?: boolean;
};

export const roadmap: Milestone[] = [
  {
    date: "Sep 25",
    title: "Workload freeze",
    detail: "TinyStories 28M",
    owners: "Arch + Inf",
    done: true,
  },
  {
    date: "Oct 13",
    title: "Minimal testbench",
    detail: "Pointer chasing, matmul output and ordering checks",
    owners: "Arch + DV",
  },
  {
    date: "Oct 16",
    title: "Module initialization",
    detail: "Modules and the dataflow between them defined",
    owners: "Arch",
  },
  {
    date: "Oct 20",
    title: "Arch spec v0",
    detail: "One document covering every module and open design questions",
    owners: "Arch → RTL, PD",
  },
  {
    date: "Oct 25",
    title: "Functional simulator",
    detail: "A PyTorch model runs in our simulator",
    owners: "Arch + Inf",
  },
  {
    date: "Nov 1",
    title: "Arch spec v1",
    detail:
      "Written spec for every module, with no new features after this. ISA and uarch frozen",
    owners: "Arch",
  },
  {
    date: "Nov 14",
    title: "Timing feedback loop",
    detail: "RTL and PD report timing on microbenchmarks through January",
    owners: "RTL, PD → Arch",
  },
  {
    date: "Nov 23",
    title: "Regression confirmed",
    detail: "Testbenches pass with RTL and PD",
    owners: "Arch + RTL + PD",
  },
  {
    date: "Nov 25",
    title: "1st netlist (NL)",
    detail: "RTL passes smoke regression and first PPA numbers go to DV and PD",
    owners: "RTL → DV, PD",
    netlist: true,
  },
  {
    date: "Dec 6",
    title: "Arch spec v2",
    detail: "Bus widths, memories and behaviors fixed",
    owners: "Arch",
  },
  {
    date: "Jan",
    title: "Pre-final netlist (PFNL)",
    detail:
      "Arch v2 implemented in RTL, with full place-and-route and signoff trials",
    owners: "RTL → PD, DV",
    netlist: true,
  },
  {
    date: "Mar",
    title: "Final netlist (FNL)",
    detail: "RTL is frozen, DV signs off, and PD closes timing, DRC, and LVS",
    owners: "RTL, DV, PD",
    netlist: true,
  },
  {
    date: "~Apr 15",
    title: "Foundry submission (est.)",
    detail: "Final GDS goes out for tapeout in 2027 (estimated date)",
    owners: "All",
  },
];

export type Roster = {
  team: string;
  members: { name: string; lead?: boolean }[];
};

export const leadership = [
  "Alan Schwartz",
  "Richard Huang",
  "Chaithu Talasila",
];

export const members: Roster[] = [
  {
    team: "Architecture",
    members: [
      { name: "Sahil Gandhi", lead: true },
      { name: "Justin Garrigus", lead: true },
      { name: "Vikshar Rajesh" },
      { name: "Akul Laddha" },
      { name: "Orhan Unuvar" },
      { name: "Gokulkrishna" },
      { name: "Yuvesh Banala" },
    ],
  },
  {
    team: "RTL",
    members: [
      { name: "Peter DiSanto", lead: true },
      { name: "Aaron Chien", lead: true },
      { name: "Alex Lekhakul" },
      { name: "Samuel Qiao" },
      { name: "Aarush Tulsyan" },
      { name: "Krish Parikh" },
      { name: "Arya Chakrabarti" },
      { name: "Pranav Ullas" },
    ],
  },
  {
    team: "DV",
    members: [
      { name: "Arsh Guntakal", lead: true },
      { name: "Jianxiong Li", lead: true },
      { name: "Johan Shyju" },
      { name: "Yogith Loganathan" },
      { name: "Rachit Kakkar" },
      { name: "Tanooj Kanike" },
      { name: "Josh Hiller" },
      { name: "Emad Khawaja" },
    ],
  },
  {
    team: "PD",
    members: [{ name: "Nathan Mara", lead: true }, { name: "Krish Singh" }],
  },
  {
    team: "Inference",
    members: [
      { name: "Shrey Birmiwal", lead: true },
      { name: "Ayaan Dhuka" },
      { name: "Kevin Li" },
      { name: "Ravi Tej Guntuku" },
      { name: "Sam Lin" },
      { name: "Jaden George" },
    ],
  },
];

export const apprentices: Roster[] = [
  {
    team: "Architecture",
    members: [
      { name: "Satvik Chawla" },
      { name: "Chaejeong Kim" },
      { name: "Hailin Chen" },
      { name: "Nila Arunkumar" },
      { name: "Henry Liu" },
      { name: "Thomas Hopper" },
    ],
  },
  {
    team: "RTL",
    members: [
      { name: "Brandon Zhang" },
      { name: "Anna Ledbetter" },
      { name: "Calum Cheah" },
      { name: "Saanvi Pradhan" },
      { name: "Amy Xu" },
      { name: "Yashas Bangalore" },
      { name: "Sanjith Raman" },
    ],
  },
  {
    team: "DV",
    members: [
      { name: "Vraj Thakkar" },
      { name: "Uday Gunturu" },
      { name: "Ashwin Geeni" },
      { name: "Susan Moseley" },
      { name: "Shreya Athur" },
      { name: "Katerina Yang" },
    ],
  },
  {
    team: "PD",
    members: [
      { name: "Arya Upadhyay" },
      { name: "Youssef Anbar" },
      { name: "Hamza Faisal" },
      { name: "Arun Rajendra" },
      { name: "Krishiv Ray" },
      { name: "Arushi Sen" },
      { name: "Ashwin Vijaianand" },
      { name: "Tejas Vanaparthy" },
      { name: "Anikait Gupta" },
    ],
  },
  {
    team: "Inference",
    members: [
      { name: "Sarvajit Jonnalagadda" },
      { name: "Abhiram Bandi" },
      { name: "Amogh Thodati" },
      { name: "Joshua Vigel" },
    ],
  },
];

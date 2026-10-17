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
    alt: "The Longhorn Silicon group posing on the EER stairs, holding up the Hook 'em sign",
    width: 1440,
    height: 1225,
    caption: "The Longhorn Silicon group.",
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
    alt: "The Longhorn Silicon leads standing together in a classroom, several holding up the Hook 'em sign",
    width: 1800,
    height: 930,
    caption: "The Longhorn Silicon leads.",
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

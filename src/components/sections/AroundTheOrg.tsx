import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { issuePath, latestIssue } from "@/data/newsletters";
import { photos } from "@/data/newsletters/2026-09";

/* Six photos from the September issue, laid out as a collage.
   Grid areas (desktop):
     a a b b c c
     a a d d d e
   a: whole cohort   b: general meeting   c: DV team
   d: RTL workday    e: PD apprentices */
const collage = [
  { photo: photos.cohort, area: "a", sizes: "(max-width: 768px) 100vw, 400px" },
  {
    photo: photos.generalMeeting,
    area: "b",
    sizes: "(max-width: 768px) 50vw, 400px",
  },
  { photo: photos.dv, area: "c", sizes: "(max-width: 768px) 50vw, 400px" },
  {
    photo: photos.rtlWorkday,
    area: "d",
    sizes: "(max-width: 768px) 66vw, 600px",
  },
  { photo: photos.pd, area: "e", sizes: "(max-width: 768px) 33vw, 200px" },
] as const;

export function AroundTheOrg() {
  return (
    <section
      className="scroll-mt-16 bg-[#141414] px-6 py-24 text-white md:scroll-mt-[72px] md:py-32"
      id="around-the-org"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[980px] text-center">
          <SectionHeading className="reveal mb-14 text-white">
            Around the org.{" "}
            <span className="text-white/55">
              Workdays, guest lectures, and the first cohort.
            </span>
          </SectionHeading>
        </div>

        <ul className="reveal collage mx-auto grid max-w-[1120px] list-none gap-2 md:gap-3">
          {collage.map(({ photo, area, sizes }) => (
            <li
              key={photo.src}
              className={`collage-${area} relative overflow-hidden rounded-[10px] bg-white/5`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={sizes}
                className="object-cover"
              />
            </li>
          ))}
        </ul>

        <div className="reveal mx-auto mt-12 flex max-w-[720px] flex-col items-center gap-5 text-center">
          <p className="text-[17px] leading-relaxed text-white/70">
            Every month our teams write up what they built, what they learned,
            and what comes next. The first issue covers September: the chip
            specs, the road to tapeout, and who is on each team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href={issuePath(latestIssue)}
              variant="primary"
              size="md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the {latestIssue.month.split(" ")[0]} issue
            </Button>
            <Link
              href="/newsletter"
              className="px-2 text-[15px] text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              All issues
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

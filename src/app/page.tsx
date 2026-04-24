import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Roadmap } from "@/components/sections/Roadmap";
import { Sponsors } from "@/components/sections/Sponsors";
import { Stats } from "@/components/sections/Stats";
import { Teams } from "@/components/sections/Teams";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Mission />
        <Teams />
        <Stats />
        <Roadmap />
        <Sponsors />
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}

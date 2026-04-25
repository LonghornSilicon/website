import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Roadmap } from "@/components/sections/Roadmap";
import { Sponsors } from "@/components/sections/Sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Mission />
        <Roadmap />
        <Sponsors />
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}

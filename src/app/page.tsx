import { ScrollReveal } from "@/components/primitives/ScrollReveal";
import { AroundTheOrg } from "@/components/sections/AroundTheOrg";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Teams } from "@/components/sections/Teams";
import { Sponsors } from "@/components/sections/Sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Mission />
        <Teams />
        <AroundTheOrg />
        <Sponsors />
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}

import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import { LearningSolutions, StatsSection } from "../../components";
import OurPartners from "../../components/OurPartners";
import Founders from "../../components/Founders";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <LearningSolutions />
      <OurPartners />
      <Founders />
    </div>
  );
}

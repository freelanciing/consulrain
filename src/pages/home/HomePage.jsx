import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import { EmpowerSection, StatsSection } from "../../components";
import OurPartners from "../../components/OurPartners";
import Founders from "../../components/Founders";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <EmpowerSection />
      <Founders />
      <OurPartners />
    </div>
  );
}

import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import { LearningSolutions, StatsSection } from "../../components";
import OurPartners from "../../components/PartnersSection/OurPartners";
import Founders from "../../components/foundersSection/Founders";
import Services from "../../components/ServicesSection/Services";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <LearningSolutions />
      <Services />
      <Founders />
      <OurPartners />
    </div>
  );
}

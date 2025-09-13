import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import { EmpowerSection, StatsSection } from "../../components";
import Founders from "../../components/foundersSection/Founders";
import OurPartners from "../../components/PartnersSection/OurPartners";
import Services from "../../components/OurServices/OurServices";
import VisionMission from "../../components/VisionMission/VisionMission";
import IntegratedSolutions from "../../components/IntegratedSolutions/IntegratedSolutions";

export default function HomePage() {
  return (
    <div>
      <HeroSection /> 
      <IntegratedSolutions />
      <VisionMission />
      <StatsSection />
      <EmpowerSection />
      <Services />
      <Founders />
      <OurPartners />
    </div>
  );
}

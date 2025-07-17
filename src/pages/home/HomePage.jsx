import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import OurPartners from "../../components/PartnersSection/OurPartners";
import Founders from "../../components/foundersSection/Founders";
import Services from "../../components/ServicesSection/Services";
import { EmpowerSection, StatsSection, LearningSolutions } from "../../components";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      {/* <LearningSolutions /> */}
      <Services />
      <EmpowerSection />
      <Founders />
      <OurPartners />
    </div>
  );
}

import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import { EmpowerSection, StatsSection } from "../../components";
import Founders from "../../components/foundersSection/Founders";
import OurPartners from "../../components/PartnersSection/OurPartners";
import Services from "../../components/ServicesSection/Services";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <EmpowerSection />
      <Services />
      <Founders />
      <OurPartners />
    </div>
  );
}

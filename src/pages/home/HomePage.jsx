import HeroSection from "../../components/homeComponents/HeroSection";
import React from "react";
import { LearningSolutions, StatsSection } from "../../components";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <LearningSolutions />
    </div>
  );
}

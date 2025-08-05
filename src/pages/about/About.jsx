import React, { useRef } from "react";
import { Hero, Mission, OurJourney, Vision } from "../../components";
import AnimatedLogo from "../../components/About/AnimatedLogo";

const About = () => {
  // Create refs for each section
  const heroRef = useRef();
  const journeyRef = useRef();
  const visionRef = useRef();
  const missionRef = useRef();

  return (
    <>
      <AnimatedLogo
        sectionRefs={[heroRef, journeyRef, visionRef, missionRef]}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={journeyRef}>
        <OurJourney />
      </div>
      <div ref={visionRef}>
        <Vision />
      </div>
      <div ref={missionRef}>
        <Mission />
      </div>
    </>
  );
};

export default About;

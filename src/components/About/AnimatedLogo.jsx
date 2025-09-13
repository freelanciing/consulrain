import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

/**
 * Animated background logo for About page sections.
 * - Moves and spins as user scrolls between sections.
 * - Accepts an array of section refs to track position.
 * - Renders behind content.
 */
const AnimatedLogo = ({ sectionRefs }) => {
  const [logoStyle, setLogoStyle] = useState({
    top: "10%",
    left: "80%",
    transform: "translate(-50%, -50%) rotate(0deg)",
    opacity: 0.08,
  });
  const [spin, setSpin] = useState(0);

  // Only update logo position when section changes, not on every spin
  useEffect(() => {
    let lastSectionIdx = -1;
    const handleScroll = () => {
      let found = false;
      let sectionIdx = 0;
      for (let i = 0; i < sectionRefs.length; i++) {
        const ref = sectionRefs[i].current;
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            sectionIdx = i;
            found = true;
            break;
          }
        }
      }
      if (found && sectionIdx !== lastSectionIdx) {
        let top = "10%";
        let left = "80%";
        if (sectionIdx === 1) {
          top = `40%`;
          left = "10%";
        } else if (sectionIdx === 2) {
          top = `60%`;
          left = "80%";
        } else if (sectionIdx === 3) {
          top = `80%`;
          left = "10%";
        } else {
          top = `50%`;
          left = "80%";
        }
        setLogoStyle((prev) => ({
          ...prev,
          top,
          left,
          // Keep current spin angle
          transform: `translate(-50%, -50%) rotate(${spin}deg)`,
        }));
        lastSectionIdx = sectionIdx;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs, spin]);

  // Spin animation: only update transform (rotation) on spin
  useEffect(() => {
    const spinInterval = setInterval(() => setSpin((s) => s + 2), 16);
    return () => clearInterval(spinInterval);
  }, []);

  useEffect(() => {
    setLogoStyle((prev) => ({
      ...prev,
      transform: `translate(-50%, -50%) rotate(${spin}deg)`,
    }));
  }, [spin]);

  useEffect(() => {
    setLogoStyle((prev) => ({
      ...prev,
      transform: `translate(-50%, -50%) rotate(${spin}deg)`,
    }));
  }, [spin]);

  return (
    <img
      src={logo}
      alt="Logo background"
      loading="lazy"
      style={{
        position: "fixed",
        zIndex: 0,
        width: "350px",
        height: "350px",
        pointerEvents: "none",
        opacity: logoStyle.opacity,
        top: logoStyle.top,
        left: logoStyle.left,
        transform: logoStyle.transform,
        transition:
          "top 0.7s cubic-bezier(.4,2,.6,1), left 0.7s cubic-bezier(.4,2,.6,1)",
        filter: "blur(0.5px) drop-shadow(0 0 10px #0002)",
      }}
    />
  );
};

export default AnimatedLogo;

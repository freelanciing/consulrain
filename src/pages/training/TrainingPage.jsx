import HeroSection from "../../components/training/Hero/HeroSection";
import TrainingIntroSection from "../../components/training/TrainingIntroSection/TrainingIntroSection";
import TrainingProcessSection from "../../components/training/TrainingProcessSection/TrainingProcessSection";
import TrainingBusinessLines from "../../components/TrainingBusinessLines/TrainingBusinessLines";
import ScopeOfServices from "../../components/ScopeOfServices/ScopeOfServices";

export default function TrainingPage() {
  return (
    <div>
      <HeroSection />
      <TrainingIntroSection />
      <ScopeOfServices />
      <TrainingProcessSection />
      <TrainingBusinessLines />
    </div>
  );
}

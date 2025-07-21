import { useTranslation } from "react-i18next";
import LearningCard from "../LearningCard/LearningCard";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function EmpowerSection() {
  const { t } = useTranslation();

  const cards = [
    {
      // image: "/images/Building-cuate.png",
      image: "/images/business.svg",
      // image: "/images/corporates.svg",
      title: t("empower.corporates.title"),
      description: t("empower.corporates.description"),
      buttonText: t("empower.corporates.buttonText"),
    },
    {
      // image: "/images/At the office-cuate.png",
      image: "/images/individual.svg",
      // image: "/images/smes.svg",
      title: t("empower.smes.title"),
      description: t("empower.smes.description"),
      buttonText: t("empower.smes.buttonText"),
    },
    {
      // image: "/images/Globalization-pana.png",
      image: "/images/government (1).svg",
      // image: "/images/government.svg",
      title: t("empower.government.title"),
      description: t("empower.government.description"),
      buttonText: t("empower.government.buttonText"),
    },
    {
      // image: "/images/Factory-amico.svg",
      image: "/images/industrial.png",
      // image: "/images/industry.svg",
      title: t("empower.industry.title"),
      description: t("empower.industry.description"),
      buttonText: t("empower.industry.buttonText"),
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <SectionHeader
        title={t("empower.title")}
        highlightedWord={t("empower.highlightedWord")}
        lineColor="#FFE047"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-10 max-w-8xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
        {cards.map((card, idx) => (
          <div key={idx} className="h-full">
            <LearningCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
}



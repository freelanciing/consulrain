// src/components/LearningSolutions.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import LearningCard from "../LearningCard/LearningCard";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LearningSolutions() {
  const { t } = useTranslation();

  const cards = [
    {
      image: "/images/learners.svg",
      title: t("services.aiStrategy.title"),
      description: t("services.aiStrategy.description"),
      buttonText: t("services.aiStrategy.buttonText"),
    },
    {
      image: "/images/businesses.svg",
      title: t("services.digitalTransformation.title"),
      description: t("services.digitalTransformation.description"),
      buttonText: t("services.digitalTransformation.buttonText"),
    },
    {
      image: "/images/governments.svg",
      title: t("services.technologySolutions.title"),
      description: t("services.technologySolutions.description"),
      buttonText: t("services.technologySolutions.buttonText"),
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <SectionHeader
        title={t("services.title")}
        highlightedWord={t("services.highlightedWord")}
        lineColor="#FFE047"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-75 mx-auto px-4">
        {cards.map((card, idx) => (
          <LearningCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}

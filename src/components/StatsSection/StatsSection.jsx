// src/components/StatsSection/StatsSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: (
        <img
          src="https://sprints.ai/assets/default/img/home/counters/learners.png"
          alt={t("stats.satisfiedUsers")}
          className="w-16 h-16 object-contain"
        />
      ),
      number: "100K+",
      label: t("stats.satisfiedUsers"),
    },
    {
      icon: (
        <img
          src="https://sprints.ai/assets/default/img/home/counters/clock.png"
          alt={t("stats.learningHours")}
          className="w-16 h-16 object-contain"
        />
      ),
      number: "2M+",
      label: t("stats.learningHours"),
    },
    {
      icon: (
        <img
          src="https://sprints.ai/assets/default/img/home/counters/world-pin.png"
          alt={t("stats.employmentRate")}
          className="w-16 h-16 object-contain"
        />
      ),
      number: "86%",
      label: t("stats.employmentRate"),
    },
    {
      icon: (
        <img
          src="https://sprints.ai/assets/default/img/home/counters/world.png"
          alt={t("stats.impactedCountries")}
          className="w-16 h-16 object-contain"
        />
      ),
      number: "14+",
      label: t("stats.impactedCountries"),
    },
  ];

  return (
    <section className="stats py-16 bg-primary-50 text-center">
      <div className="max-w-8xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className="bg-blue-100 imgBg rounded-full flex-shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:font-extrabold md:font-black text-gray-800 leading-tight stateNumber">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium sm:font-semibold text-gray-600 statLabel">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

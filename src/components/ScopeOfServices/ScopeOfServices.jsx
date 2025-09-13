import React from "react";
import { useTranslation } from "react-i18next";
import checkmark from "../../../public/images/1.svg";
import image from "../../../public/images/At the office-cuate.png";

const ScopeOfServices = () => {
  const { t } = useTranslation();

  const services = [
    "Supply chain & Logistics",
    "Administration",
    "Leadership",
    "Softskills",
    "Production",
    "Quality Control",
    "Human Resources",
    "Sales",
    "Marketing",
    "Compliance",
    "Finance & Accounting",
    "Food Safety",
    "Information Technology",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                SCOPE OF SERVICES
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-6">
              Ready to Empower
            </h3>
            <p className="text-gray-600 mb-6">
              With a deep understanding of today’s business dynamics we deliver
              targeted solutions across key areas:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <img
                    src={checkmark}
                    alt="checkmark"
                    className="w-5 h-5 mr-3 mt-1"
                  />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
            <img
              src={image}
              alt="Scope of services"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScopeOfServices;

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import checkmark from "../../../public/images/1.svg";
import image from "../../../public/images/At the office-cuate.webp";
import ServiceModal from "../ServiceModal/ServiceModal"; // Import the modal
import "./ScopeOfServices.css"; // Import the new CSS

const ScopeOfServices = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";
  const [selectedService, setSelectedService] = useState(null);

  const serviceKeys = [
    "supplyChain",
    "administration",
    "leadership",
    "softskills",
    "production",
    "qualityControl",
    "humanResources",
    "sales",
    "marketing",
    "compliance",
    "financeAccounting",
    "foodSafety",
    "informationTechnology",
  ];

  const handleServiceClick = (key) => {
    setSelectedService(key);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const renderDescription = (description) => {
    return description.split("\n").map((line, index) => {
      if (line.trim().startsWith("•")) {
        return (
          <li key={index} className="service-modal-list-item">
            {line.replace("•", "").trim()}
          </li>
        );
      }
      return <p key={index}>{line}</p>;
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4">
            <div className={`relative ${isRtl ? "pr-6" : "pl-6"}`}>
              <div
                className={`absolute ${
                  isRtl ? "right-0" : "left-0"
                } top-0 h-full w-1`}
                style={{ backgroundColor: "#4A8B8B" }}
              ></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {t("scopeOfServices.title")}
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 mt-6">
              {t("scopeOfServices.subtitle")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("scopeOfServices.description")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {serviceKeys.map((key, index) => (
                <div
                  key={index}
                  className="flex items-start service-item"
                  onClick={() => handleServiceClick(key)}
                  role="button"
                  tabIndex="0"
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleServiceClick(key)
                  }
                >
                  <img
                    src={checkmark}
                    alt="checkmark"
                    className="w-5 h-5 mr-3 mt-1"
                  />
                  <span className="text-gray-700">
                    {t(`scopeOfServices.services.${key}`)}
                  </span>
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
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          title={t(`scopeOfServices.serviceDetails.${selectedService}.title`)}
        >
          {renderDescription(
            t(`scopeOfServices.serviceDetails.${selectedService}.description`)
          )}
        </ServiceModal>
      )}
    </section>
  );
};

export default ScopeOfServices;

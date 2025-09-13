import React from "react";
import "./IntegratedSolutions.css";
import { useTranslation } from "react-i18next";

const IntegratedSolutions = () => {
  const { t } = useTranslation();

  return (
    <section className="integrated-solutions-section mx-0">
      <div className="container">
        <div className="grid">
          <div className="left-column">
            <span className="subtitle">
              {t("integratedSolutions.subtitle")}
            </span>
            <h2>{t("integratedSolutions.title")}</h2>
            <p>{t("integratedSolutions.description")}</p>
            <div className="cards ">
              <div className="card mx-auto">
                <div className="icon-wrapper">
                  <i className="fas fa-users"></i>
                </div>
                <h3>{t("integratedSolutions.cards.workers.title")}</h3>
                <p>{t("integratedSolutions.cards.workers.description")}</p>
              </div>
              <div className="card mx-auto">
                <div className="icon-wrapper">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>{t("integratedSolutions.cards.process.title")}</h3>
                <p>{t("integratedSolutions.cards.process.description")}</p>
              </div>
            </div>
          </div>
          <div className="right-column">
            <div className="image-container">
              <img src="/images/whoWeAre.jpeg" alt="Integrated Solutions" />
              <div className="overlay">
                <div className="experience mx-auto text-center">
                  <h3 >10+</h3>
                  <p>{t("integratedSolutions.experience")}</p>
                </div>
                <div className="features">
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      {t("integratedSolutions.features.expertise")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      {t("integratedSolutions.features.approach")}
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>
                      {t("integratedSolutions.features.collaboration")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions;

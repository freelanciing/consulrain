import React from "react";
import "./OurServices.css";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: <i className="fas fa-drafting-compass"></i>,
      title: t("ourServicesSection.cards.training.title"),
      front: t("ourServicesSection.cards.training.front"),
      backTitle: t("ourServicesSection.cards.training.backTitle"),
      back: t("ourServicesSection.cards.training.back"),
      path: "/training",
    },
    {
      icon: <i className="fas fa-cube"></i>,
      title: t("ourServicesSection.cards.consultation.title"),
      front: t("ourServicesSection.cards.consultation.front"),
      backTitle: t("ourServicesSection.cards.consultation.backTitle"),
      back: t("ourServicesSection.cards.consultation.back"),
      path: "/consultation",
    },
    {
      icon: <i className="fas fa-search-minus"></i>,
      title: t("ourServicesSection.cards.feasibilityStudies.title"),
      front: t("ourServicesSection.cards.feasibilityStudies.front"),
      backTitle: t("ourServicesSection.cards.feasibilityStudies.backTitle"),
      back: (
        <ul
          style={{ textAlign: "left", paddingLeft: "1.2em", marginBottom: 0 }}
        >
          <li>{t("ourServicesSection.cards.feasibilityStudies.back.item1")}</li>
          <li>{t("ourServicesSection.cards.feasibilityStudies.back.item2")}</li>
        </ul>
      ),
      path: "/feasibility-studies",
    },
  ];

  return (
    <section id="offer" className="offer pt-5 mx-0">
      <div className="container">
        <div className="offer__text text-center w-full lg:w-1/2   mx-auto">
          <span
            className="fs-6 text-uppercase text--orange mb-3 fw-bold"
            role="heading"
            aria-level="2"
          >
            {t("ourServicesSection.title")}
          </span>
          <h2 className="fs-1 mb-4 fw-bold">
            {t("ourServicesSection.subtitle")}
          </h2>
          <p className="mb-5 fw-bold pb-0 pb-md-5">
            {t("ourServicesSection.description")}
          </p>
        </div>
        <div className="offer__cards">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 justify-content-center">
            {cards.map((card, idx) => (
              <div className="cols mb-16" key={idx}>
                <div
                  className="flip-card"
                  aria-label={`${card.title} service card`}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="icon" aria-hidden="true">
                        {card.icon}
                      </div>
                      <h3>{card.title}</h3>
                      <div className="front-text">{card.front}</div>
                    </div>
                    <div className="flip-card-back">
                      <h3>{card.backTitle}</h3>
                      <div className="back-text">{card.back}</div>
                      <a
                        href={card.path}
                        target="_blank"
                        aria-label={`3D view of ${card.title}`}
                        className="btn btn-dark text-dark bg-white three-d-btn"
                      >
                        {t("ourServicesSection.learnMore")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

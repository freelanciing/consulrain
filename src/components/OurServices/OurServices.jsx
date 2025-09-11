import React from "react";
import "./OurServices.css";

const cards = [
  {
    icon: <i className="fas fa-drafting-compass"></i>,
    title: "Training",
    front:
      "We go beyond conventional workshops to deliver immersive learning experiences, thoughtfully aligned with your business priorities.",
    backTitle: "meticulously crafted process",
    back: "Pre-Training Diagnosis, Customized Training Programs, Post-Training Evaluation.",
  },
  {
    icon: <i className="fas fa-cube"></i>,
    title: "Consultation",
    front:
      "Our consultation is rooted in collaboration and strategic clarity. ",
    backTitle: "Strategic Consultation Process",
    back: "In-depth analysis, collaborative planning, and actionable recommendations to help your organization overcome obstacles and achieve long-term growth.",
  },
  {
    icon: <i className="fas fa-search-minus"></i>,
    title: "Feasibility Studies",
    front:
      "Comprehensive studies to help you make well-informed business decisions. We evaluate project viability, market, financial, and technical aspects for strategic clarity and risk management.",
    backTitle: "Key Services Offered",
    back: (
      <ul style={{ textAlign: "left", paddingLeft: "1.2em", marginBottom: 0 }}>
        <li>Market, Technical, Financial, Legal, Organizational Feasibility</li>
        <li>Risk Assessment & Mitigation</li>
      </ul>
    ),
  },
];

const OurServices = () => {
  return (
    <section id="offer" className="offer pt-5">
      <div className="container">
        <div className="offer__text text-center w-50 mx-auto">
          <span
            className="fs-6 text-uppercase text--orange mb-3 fw-bold"
            role="heading"
            aria-level="2"
          >
            Our Services
          </span>
          <h2 className="fs-1 mb-4 fw-bold">
            Empowering Your Team Training & Consultation
          </h2>
          <p className="mb-5 fw-bold pb-0 pb-md-5">
            Unlock your organization’s full potential with our expert-led
            training programs and strategic consultation services. We help you
            build skills, foster collaboration, and develop actionable
            strategies for sustainable growth and operational excellence.
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
                      <p>{card.front}</p>
                    </div>
                    <div className="flip-card-back">
                      <h3>{card.backTitle}</h3>
                      <p>{card.back}</p>
                      <a
                        href="#"
                        aria-label={`3D view of ${card.title}`}
                        className="btn btn-dark text-dark bg-white three-d-btn"
                      >
                        LEARN MORE
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

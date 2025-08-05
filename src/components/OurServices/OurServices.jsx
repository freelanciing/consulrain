import React from "react";
import "./OurServices.css";

const cards = [
  {
    icon: <i className="fas fa-drafting-compass"></i>,
    title: "Full Discipline Design",
    front: "Comprehensive design solutions across all project phases",
    backTitle: "Full Discipline Design",
    back: "Providing architectural, structural, MEP, and infrastructure design solutions — from concept to detailed design — tailored to meet each project's unique needs.",
  },
  {
    icon: <i className="fas fa-cube"></i>,
    title: "3D Modeling",
    front: "High-precision models reflecting real-world conditions",
    backTitle: "Accurate 3D Modeling",
    back: "Delivering high-precision models that reflect real-world conditions with millimeter accuracy for perfect project execution.",
  },
  {
    icon: <i className="fas fa-search-minus"></i>,
    title: "Clash Detection",
    front: "Identifying design conflicts before construction",
    backTitle: "Efficient Clash Detection",
    back: "Identifying and resolving design conflicts before construction begins, saving time and reducing costly on-site modifications.",
  },
];

const OurServices = () => {
  return (
    <section id="offer" className="offer pt-5">
      <div className="container">
        <div className="offer__text text-center w-50 mx-auto p-5 pb-3">
          <span
            className="fs-6 text-uppercase text--orange mb-3 fw-bold"
            role="heading"
            aria-level="2"
          >
            Our Services
          </span>
          <h2 className="fs-1 mb-4 fw-bold">
            Comprehensive Business & Technology Solutions
          </h2>
          <p className="mb-5 fw-bold pb-0 pb-md-5">
            We offer a diverse range of services designed to empower your
            business—from full-discipline design and 3D modeling to advanced
            clash detection and more. Discover how our expertise can help you
            achieve your goals efficiently and effectively.
          </p>
        </div>
        <div className="offer__cards">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 gy-4 justify-content-center">
            {cards.map((card, idx) => (
              <div className="cols" key={idx}>
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

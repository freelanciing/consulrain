
import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesPacking,
  faClipboardCheck,
  faUserTie,
  faLightbulb,
  faCogs,
  faCheckCircle,
  faUsers,
  faChartLine,
  faBullhorn,
  faShieldAlt,
  faMoneyBillWave,
  faLeaf,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import "./Consultation.css";

const serviceIcons = [
  faBoxesPacking, // Supply chain & Logistics
  faClipboardCheck, // Administration
  faUserTie, // Leadership
  faLightbulb, // Softskills
  faCogs, // Production
  faCheckCircle, // Quality Control
  faUsers, // Human Resources
  faChartLine, // Sales
  faBullhorn, // Marketing
  faShieldAlt, // Compliance
  faMoneyBillWave, // Finance & Accounting
  faLeaf, // Food Safety
  faLaptopCode // Information Technology
];

export default function Consultation() {
  const { t } = useTranslation();
  return (
    <section className="consultation-modern-wrapper">
      <div className="consultation-modern-hero">
        <h1 className="consultation-modern-title">{t("consultation.title")}</h1>
        <p className="consultation-modern-desc">{t("consultation.intro")}</p>
      </div>
      <div className="consultation-modern-content">
        <div className="consultation-modern-services">
          <h2 className="consultation-modern-subtitle">{t("consultation.scopeTitle")}</h2>
          <div className="consultation-modern-grid">
            {[...Array(13)].map((_, idx) => (
              <div className="consultation-modern-card" key={idx}>
                <span className="consultation-modern-icon">
                  <FontAwesomeIcon icon={serviceIcons[idx]} />
                </span>
                <span className="consultation-modern-card-title">{t(`consultation.services.${idx}`)}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="consultation-modern-cta">
          <h3>{t("contact.formTitle")}</h3>
          <p>{t("contact.formSubtitle")}</p>
          <a href="mailto:info@consulrain.com" className="consultation-modern-contact-btn">{t("contact.emailValue")}</a>
        </aside>
      </div>
    </section>
  );
}

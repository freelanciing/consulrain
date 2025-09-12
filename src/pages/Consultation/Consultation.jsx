
import ConsultationHeroImg from "../../../public/images/Consultation.jpg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faChartLine,
  faCheckCircle,
  faEnvelope,
  faPhone,
  faGlobe,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Consultation.css";

export default function Consultation() {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero Section */}
      <div className="consultation-hero-img-section">
        <div className="consultation-hero-img-wrapper">
          <img
            src={ConsultationHeroImg}
            alt="Consultation Hero"
            className="consultation-hero-img"
          />
          <div className="consultation-hero-overlay" />
          <div className="consultation-hero-text">
            <h1 className="consultation-hero-title">
              {t("consultation.title")}
            </h1>
          </div>
        </div>
      </div>

      {/* Intro + Features Section */}
      <div className="consultation-intro-features-wrapper">
        <div className="consultation-intro-features">
          <div className="consultation-intro-left">
            <h2 className="consultation-intro-highlight">
              {t("consultation.empower.title")}
            </h2>
            <h1 className="consultation-intro-title">
              {t("consultation.title")}
            </h1>
            <p className="consultation-intro-desc">
              {t("consultation.intro")}
            </p>
            <div className="consultation-feature-list">
              <div className="consultation-feature-item">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="consultation-feature-icon"
                />
                <div>
                  <h3 className="consultation-feature-title">
                    {t("consultation.features.0.title")}
                  </h3>
                  <p className="consultation-feature-desc">
                    {t("consultation.features.0.desc")}
                  </p>
                </div>
              </div>
              <div className="consultation-feature-item">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="consultation-feature-icon"
                />
                <div>
                  <h3 className="consultation-feature-title">
                    {t("consultation.features.1.title")}
                  </h3>
                  <p className="consultation-feature-desc">
                    {t("consultation.features.1.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="consultation-intro-right">
            <div className="consultation-intro-imgbox">
              <img
                src={ConsultationHeroImg}
                alt="Consultation Team"
                className="consultation-intro-img"
              />
              <div className="consultation-intro-img-overlay">
                <div className="consultation-intro-experience">
                  <span className="consultation-intro-years">10+</span>
                  <span className="consultation-intro-years-label">
                    {t("consultation.experience")}
                  </span>
                </div>
                <div className="consultation-intro-experience-divider"></div>
                <ul className="consultation-intro-experience-list">
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    {t("consultation.experiencePoints.0")}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    {t("consultation.experiencePoints.1")}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} />{" "}
                    {t("consultation.experiencePoints.2")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Contact Section */}
      <div className="consultation-contact-dark-wrapper">
        <h2 className="consultation-contact-dark-title">
          {t("consultation.contact.title")}{" "}
          <span className="consultation-contact-dark-highlight">
            {t("consultation.title")}
          </span>{" "}
          {t("consultation.contact.subtitle")}
        </h2>
        <div className="consultation-contact-dark-content">
          <form className="consultation-contact-form">
            <div className="consultation-contact-form-row">
              <div className="consultation-contact-form-group">
                <label htmlFor="name">{t("consultation.form.nameLabel")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("consultation.form.namePlaceholder")}
                />
              </div>
              <div className="consultation-contact-form-group">
                <label htmlFor="email">
                  {t("consultation.form.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("consultation.form.emailPlaceholder")}
                />
              </div>
            </div>
            <div className="consultation-contact-form-row">
              <div className="consultation-contact-form-group">
                <label htmlFor="projectType">
                  {t("consultation.form.projectLabel")}
                </label>
                <select id="projectType" name="projectType">
                  <option>{t("consultation.form.projectOptions.0")}</option>
                  <option>{t("consultation.form.projectOptions.1")}</option>
                  <option>{t("consultation.form.projectOptions.2")}</option>
                  <option>{t("consultation.form.projectOptions.3")}</option>
                </select>
              </div>
              <div className="consultation-contact-form-group">
                <label htmlFor="referral">
                  {t("consultation.form.referralLabel")}
                </label>
                <select id="referral" name="referral">
                  <option>{t("consultation.form.referralOptions.0")}</option>
                  <option>{t("consultation.form.referralOptions.1")}</option>
                  <option>{t("consultation.form.referralOptions.2")}</option>
                  <option>{t("consultation.form.referralOptions.3")}</option>
                  <option>{t("consultation.form.referralOptions.4")}</option>
                  <option>{t("consultation.form.referralOptions.5")}</option>
                  <option>{t("consultation.form.referralOptions.6")}</option>
                </select>
              </div>
            </div>
            <div className="consultation-contact-form-group-full">
              <label htmlFor="description">
                {t("consultation.form.descLabel")}
              </label>
              <textarea
                id="description"
                name="description"
                placeholder={t("consultation.form.descPlaceholder")}
                rows={3}
              />
            </div>
            <button type="submit" className="consultation-contact-form-btn">
              {t("consultation.form.sendBtn")}
            </button>
          </form>

          {/* Contact Info */}
          <div className="consultation-contact-info">
            <h3>{t("consultation.contact.connect")}</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@consulrain.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />{" "}
                <span dir="ltr" style={{ textAlign: "left" }}>
                  +20 155 620 5466
                </span>
              </li>
            </ul>
            <h3>{t("consultation.contact.addressTitle")}</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGlobe} />{" "}
                {t("consultation.contact.address.0")}
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />{" "}
                {t("consultation.contact.address.1")}
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />{" "}
                {t("consultation.contact.workingHours")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

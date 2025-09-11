import React from "react";
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
      {/* Modern Sectioned Redesign Below Hero */}
      {/* Two-column intro/features section */}
      <div className="consultation-intro-features-wrapper">
        <div className="consultation-intro-features">
          <div className="consultation-intro-left">
            <h2 className="consultation-intro-highlight">
              {t("empower.title")}
            </h2>
            <h1 className="consultation-intro-title">
              {t("consultation.title")}
            </h1>
            <p className="consultation-intro-desc">{t("consultation.intro")}</p>
            <div className="consultation-feature-list">
              <div className="consultation-feature-item">
                <FontAwesomeIcon
                  icon={faUserTie}
                  className="consultation-feature-icon"
                />
                <div>
                  <h3 className="consultation-feature-title">
                    Professional Experts
                  </h3>
                  <p className="consultation-feature-desc">
                    All projects led by highly experienced consultants and teams
                    passionate about delivering high-quality solutions.
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
                    24/7 Premium Support
                  </h3>
                  <p className="consultation-feature-desc">
                    On-site coordination and model-based supervision to ensure
                    successful project execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    Years of Experience
                  </span>
                </div>
                <div className="consultation-intro-experience-divider"></div>
                <ul className="consultation-intro-experience-list">
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} /> Cutting-Edge
                    Expertise
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} /> Holistic Solutions
                    Approach
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} /> Client-Centric
                    Collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark contact section with form and info */}
      <div className="consultation-contact-dark-wrapper">
        <h2 className="consultation-contact-dark-title">
          The best{" "}
          <span className="consultation-contact-dark-highlight">
            consultation
          </span>{" "}
          you can take
        </h2>
        <div className="consultation-contact-dark-content">
          <form className="consultation-contact-form">
            <div className="consultation-contact-form-row">
              <div className="consultation-contact-form-group">
                <label htmlFor="name">Hello, my name is:</label>
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div className="consultation-contact-form-group">
                <label htmlFor="email">Here is my email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="consultation-contact-form-row">
              <div className="consultation-contact-form-group">
                <label htmlFor="projectType">Tell us about your project</label>
                <select id="projectType" name="projectType">
                  <option>Social media marketing.</option>
                  <option>Business strategy.</option>
                  <option>Operations improvement.</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="consultation-contact-form-group">
                <label htmlFor="referral">
                  How did you hear about ConsulRain?
                </label>
                <select id="referral" name="referral">
                  <option>Google</option>
                  <option>Facebook</option>
                  <option>LinkedIn</option>
                  <option>SnapChat</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="consultation-contact-form-group-full">
              <label htmlFor="description">About project:</label>
              <textarea
                id="description"
                name="description"
                placeholder="Your project description"
                rows={3}
              />
            </div>
            <button type="submit" className="consultation-contact-form-btn">
              Send
            </button>
          </form>
          <div className="consultation-contact-info">
            <h3>Connect with us</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> info@consulrain.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +20 155 620 5466
              </li>
            </ul>
            <h3>Address</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGlobe} /> West 11 Mall - 6th October
                Giza-Egypt
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe} /> Cite 500 Apartment - Bilda -
                Algeria
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} /> Sunday → Thursday 9am to 5pm
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

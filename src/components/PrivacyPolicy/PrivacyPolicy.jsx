import React from "react";
import "./PrivacyPolicy.css";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const privacy = t("privacyPolicy", { returnObjects: true });
  return (
    <div className="privacy-policy-container animate-fade-in">
      <div className="privacy-policy-card mt-5">
        <h1 className="privacy-title">{privacy.title}</h1>
        <section className="privacy-section">
          <h2 className="privacy-heading">1- {privacy.policy}</h2>
          <p>{privacy.intro}</p>
          <h3 className="privacy-subheading">{privacy.infoCollection}</h3>
          <p>{privacy.infoCollectionDesc}</p>
          <h3 className="privacy-subheading">{privacy.dataUtilization}</h3>
          <p>{privacy.dataUtilizationDesc}</p>
          <h3 className="privacy-subheading">{privacy.cookies}</h3>
          <p>{privacy.cookiesDesc}</p>
          <h3 className="privacy-subheading">{privacy.dataSecurity}</h3>
          <p>{privacy.dataSecurityDesc}</p>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-heading">2- {privacy.ipNotice}</h2>
          <p>{privacy.ipNoticeDesc}</p>
          <h3 className="privacy-subheading">{privacy.prohibitedUse}</h3>
          <ul className="privacy-list">
            {privacy.prohibitedUseList &&
              privacy.prohibitedUseList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
          </ul>
          <h3 className="privacy-subheading">{privacy.requestPermission}</h3>
          <p>
            {privacy.requestPermissionDesc}{" "}
            <a
              href={`mailto:${privacy.email}`}
              className="privacy-contact"
              style={{ textDecoration: "none" }}
            >
              {privacy.email}
            </a>
            {" | "}
            <a
              href={`tel:${privacy.phone.replace(/\s+/g, "")}`}
              className="privacy-contact"
              style={{ textDecoration: "none" }}
            >
              {privacy.phone}
            </a>
          </p>
        </section>
        <section className="privacy-section">
          <h2 className="privacy-heading">3- {privacy.legalDisclaimer}</h2>
          <p>{privacy.legalDisclaimerDesc}</p>
        </section>
      </div>
    </div>
  );
}

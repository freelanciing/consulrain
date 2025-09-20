import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "/public/images/spinnerLogo.webp"; // Ensure the path is correct
import { useTranslation } from "react-i18next";
import "./SplashPage.css";

export default function SplashPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // Redirect to home page after 4 seconds
    const timer = setTimeout(() => {
      navigate("/home");
    }, 4000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        {/* Spinning Logo */}
        <div className="logo-container">
          <img
            src={logoImage}
            alt="ConsulRain Logo"
            className="spinning-logo"
            loading="lazy"
          />
        </div>

        {/* Company Name */}
        <div className="company-info ">
          <div className="company-text-container">
            <h1
              className="company-main-name"
              style={{
                direction: "ltr",
                unicodeBidi: "plaintext",
                whiteSpace: "nowrap",
              }}
            >
              <span className="consul">Consul</span>
              <span className="rain">
                Rain<span className="co"> Co</span>
              </span>
            </h1>
            <p className="company-subtitle">{t("consultingAndTraining")}</p>
          </div>

          {/* Loading Animation */}
          <div className="loading-animation m-auto">
            <div className="loading-bar">
              <div className="loading-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

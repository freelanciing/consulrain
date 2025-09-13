import React from "react";
import { useTranslation } from "react-i18next";

export default function Topbar() {
  const { t } = useTranslation();
  const contactEmail = "info@consulrain.com";
  const contactPhone = "+20 155 620 5466";
  const socialLinks = [
    {
      iconClass: "fab fa-facebook-f",
      url: "https://facebook.com/consulrain",
      label: "Facebook",
    },
    {
      iconClass: "fab fa-snapchat-ghost",
      url: "https://snapchat.com/add/consulrain",
      label: "Snapchat",
    },
    {
      iconClass: "fab fa-linkedin-in",
      url: "https://linkedin.com/company/consulrain",
      label: "LinkedIn",
    },
    {
      iconClass: "fab fa-tiktok",
      url: "https://tiktok.com/@consulrain",
      label: "TikTok",
    },
    {
      iconClass: "fab fa-instagram",
      url: "https://instagram.com/consulrain",
      label: "Instagram",
    },
  ];
  return (
    <header
      className="w-full bg-primary-700 text-white flex justify-between items-center px-4 py-2 text-sm"
      style={{ backgroundColor: "#182f40", position: "fixed", zIndex: "99" }}
      role="banner"
      aria-label="Top bar with contact information and social media links"
    >
      <div className="flex items-center gap-4 w-full">
        <a
          href={`mailto:${contactEmail}`}
          className="flex items-center gap-1 text-white hover:text-[#4A8B8B] transition-colors duration-200"
          dir="ltr"
          style={{ textAlign: "left" }}
          aria-label={`Email us at ${contactEmail}`}
        >
          <i
            className="fas fa-envelope text-primary-400"
            aria-hidden="true"
          ></i>
          <span className="sr-only">Email:</span> {contactEmail}
        </a>
        <a
          href={`tel:${contactPhone.replace(/[^\d+]/g, "")}`}
          className="flex items-center gap-1 text-white hover:text-[#4A8B8B] transition-colors duration-200"
          dir="ltr"
          style={{ textAlign: "left" }}
          aria-label={`Call us at ${contactPhone}`}
        >
          <i className="fas fa-phone text-primary-400" aria-hidden="true"></i>
          <span className="sr-only">Phone:</span> {contactPhone}
        </a>
      </div>
      {/* Social icons: hidden on mobile, flex on md+ screens */}
      <div className="hidden md:flex items-center gap-2">
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(`topbar.social.${item.label.toLowerCase()}`)}
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{ backgroundColor: "#4A8B8B" }}
          >
            <i className={`${item.iconClass} text-white text-lg`}></i>
          </a>
        ))}
      </div>
    </header>
  );
}

import { Helmet } from "react-helmet-async";
import MySwal from "../../swalConfig";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { createEmailTemplate } from "../EmailTemplate/emailTemplate";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../../emailjsConfig";
import headerBg from "../../assets/contact-header-bg.webp";
import "./contact.css";

export default function ContactUs() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSecondLocation, setShowSecondLocation] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      formType: "Contact Us Submission",
      name: form.name,
      email: form.email,
      message: form.message,
    };

    const emailBody = createEmailTemplate(templateParams);

    const finalTemplateParams = {
      ...templateParams,
      html_message: emailBody, // Send the generated HTML
    };

    // --- To Send a Real Email (uncomment when ready) ---

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        finalTemplateParams,
        EMAILJS_USER_ID
      )
      .then(
        () => {
          MySwal.fire({
            icon: "success",
            title: t("contact.successTitle"),
            text: t("contact.successMessage"),
          });
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          MySwal.fire({
            icon: "error",
            title: t("contact.errorMessageTitle"),
            text: t("contact.errorMessageText"),
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | ConsulRain</title>
        <meta
          name="description"
          content="Contact ConsulRain for business inquiries, support, or partnership opportunities. We're here to help you grow."
        />
      </Helmet>
      {/* Header section */}
      <div
        className="w-full flex items-center justify-center mb-8"
        style={{
          height: "300px",
          background: `url(${headerBg}) center/cover no-repeat`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(44, 75, 99, 0.55)",
            zIndex: 1,
          }}
        ></div>
        <h1
          className="text-white text-3xl md:text-4xl font-bold z-10 text-center"
          style={{ position: "relative" }}
        >
          {t("contact.header")}
        </h1>
      </div>
      <section className="contact-us-section min-h-screen bg-[#f7f7f7] flex flex-col justify-center items-center py-10">
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-0 flex flex-col md:flex-row overflow-hidden">
          {/* Left: Contact Form */}
          <div className="flex-1 p-8 flex flex-col justify-center text-center">
            <h2 className="text-3xl font-bold mb-2 text-brand">
              {t("contact.formTitle")}
            </h2>
            <p className="mb-8 text-lg text-brand-muted">
              {t("contact.formSubtitle")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <input
                type="text"
                name="name"
                placeholder={t("contact.namePlaceholder")}
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 border border-gray-200 focus:border-primary-500 focus:outline-none bg-[#f7f7f7] text-lg"
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 border border-gray-200 focus:border-primary-500 focus:outline-none bg-[#f7f7f7] text-lg"
              />
              <textarea
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg px-4 py-3 border border-gray-200 focus:border-primary-500 focus:outline-none bg-[#f7f7f7] text-lg"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-bold text-white bg-primary-500 hover:bg-primary-700 transition shadow text-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? t("contact.submitting")
                  : t("contact.submitButton")}
              </button>
            </form>
          </div>
          {/* Right: Map - show Egypt or Algeria based on flip card */}
          <div className="flex-1 p-0 flex items-center justify-center bg-[#e8eef1]">
            {showSecondLocation ? (
              <iframe
                title="Algeria Location"
                src="https://www.google.com/maps?q=Cite+500,+Blida,+Algeria&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-none"
              ></iframe>
            ) : (
              <iframe
                title="Egypt Location"
                src="https://www.google.com/maps?q=West+11+Mall,+6th+October,+Giza,+Egypt&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-none"
              ></iframe>
            )}
          </div>
        </div>
        {/* Info row below */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div
            className={`location-flip-card flex flex-col items-center bg-white rounded-lg shadow p-6 cursor-pointer perspective`}
            onClick={() => setShowSecondLocation((v) => !v)}
            style={{
              minHeight: "180px",
              minWidth: "220px",
              position: "relative",
            }}
          >
            <div
              className={`location-flip-inner ${
                showSecondLocation ? "rotate" : ""
              }`}
              style={{
                transition: "transform 0.6s cubic-bezier(.68,-0.55,.27,1.55)",
                transformStyle: "preserve-3d",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="location-flip-front"
                style={{
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              >
                <span className="text-primary-500 text-3xl mb-2">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="font-bold mb-1">
                  {t("contact.locationEgypt")}
                </div>
                <div className="text-brand-muted text-center">
                  {t("contact.locationEgyptValue")}
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  {t("contact.clickToShowOtherLocation")}
                </div>
              </div>
              <div
                className="location-flip-back"
                style={{
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  transform: "rotateY(180deg)",
                }}
              >
                <span className="text-primary-500 text-3xl mb-2">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="font-bold mb-1">
                  {t("contact.locationAlgeria")}
                </div>
                <div className="text-brand-muted text-center">
                  {t("contact.locationAlgeriaValue")}
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  {t("contact.clickToShowOtherLocation")}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="text-primary-500 text-3xl mb-2">
              <i className="fas fa-envelope"></i>
            </span>
            <div className="font-bold mb-1">{t("contact.email")}</div>
            <div className="text-brand-muted text-center">
              {t("contact.emailValue")}
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="text-primary-500 text-3xl mb-2">
              <i className="fas fa-phone"></i>
            </span>
            <div
              className="font-bold mb-1"
              dir="ltr"
              style={{ textAlign: "left" }}
            >
              {t("contact.phone")}
            </div>
            <div
              className="text-brand-muted text-center"
              dir="ltr"
              style={{ textAlign: "left" }}
            >
              {t("contact.phoneValue")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

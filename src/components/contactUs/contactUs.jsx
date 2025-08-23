import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import headerBg from "../../assets/contact-header-bg.jpg";

export default function ContactUs() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
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
          <div className="flex-1 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-brand">
              {t("contact.formTitle")}
            </h2>
            <p className="mb-6 text-brand-muted">{t("contact.formSubtitle")}</p>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full py-3 rounded-lg font-bold text-white bg-primary-500 hover:bg-primary-700 transition shadow text-lg"
              >
                {t("contact.submitButton")}
              </button>
              {submitted && (
                <div className="text-green-600 text-center font-bold py-2">
                  {t("contact.successMessage")}
                </div>
              )}
            </form>
          </div>
          {/* Right: Map */}
          <div className="flex-1 p-0 flex items-center justify-center bg-[#e8eef1]">
            <iframe
              title="ConsulRain Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.9999999999995!2d46.675295315002!3d24.7135529841169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1692199999999!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-none"
            ></iframe>
          </div>
        </div>
        {/* Info row below */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6">
            <span className="text-primary-500 text-3xl mb-2">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div className="font-bold mb-1">{t("contact.location")}</div>
            <div className="text-brand-muted text-center">
              {t("contact.locationValue")}
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
            <div className="font-bold mb-1" dir="ltr" style={{textAlign: 'left'}}>
              {t("contact.phone")}
            </div>
            <div className="text-brand-muted text-center" dir="ltr" style={{textAlign: 'left'}}>
              {t("contact.phoneValue")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

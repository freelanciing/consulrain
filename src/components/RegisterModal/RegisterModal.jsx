import "./RegisterModal.css";
// src/components/RegisterModal/RegisterModal.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "../../emailjsConfig";
import { useTranslation } from "react-i18next";

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    // Send form data using emailjs
    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone,
        },
        EMAILJS_USER_ID
      )
      .then(() => {
        alert("Registration sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setAgreeToTerms(false);
        onClose();
      })
      .catch(() => {
        alert("Failed to send registration. Please try again.");
      });
  };

  const handleSocialLogin = (provider) => {
    // Handle social login logic here
    console.log("Social registration with:", provider);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md mx-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("register.name")}:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
              placeholder={t("register.namePlaceholder")}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("register.email")}:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all"
              placeholder={t("register.emailPlaceholder")}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t("register.phone")}:
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-700 focus:border-transparent outline-none transition-all phone-input `}
              placeholder={t("register.phonePlaceholder")}
              required
             
            />
          </div>
          <div className="flex items-start gap-3 mb-4">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1 w-4 h-4 text-brand-blue border border-gray-300 rounded focus:ring-primary-700"
              required
            />
            <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
              {t("register.agreeToTerms")}{" "}
              <a
                href="#"
                className="text-brand-blue hover:text-brand-teal underline"
              >
                {t("register.termsAndConditions")}
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white font-bold rounded hover:bg-primary-700 py-3 px-4 transition-colors focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 outline-none"
          >
            {t("register.joinUsButton")}
          </button>
        </form>
      </div>
    </div>
  );
}

// src/components/FeedbackWidget/FeedbackWidget.jsx
import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";

export default function FeedbackWidget() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null); // 'idea' or 'issue'
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    details: "",
  });
  const [uploadedFile, setUploadedFile] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [showScreenshotPermission, setShowScreenshotPermission] =
    useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const widgetRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement;
      const focusableElements = widgetRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const handleKeyDown = (e) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      };

      const widget = widgetRef.current;
      widget.addEventListener("keydown", handleKeyDown);

      return () => {
        widget.removeEventListener("keydown", handleKeyDown);
        triggerRef.current?.focus();
      };
    }
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        setError(t("feedback.fileSizeError"));
        return;
      }
      setError("");
      setUploadedFile(file);
    }
  };

  const handleScreenshot = async () => {
    setShowScreenshotPermission(true);
  };

  const allowScreenshot = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
      });

      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      video.addEventListener("loadedmetadata", () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);

        canvas.toBlob((blob) => {
          setScreenshot(blob);
          setShowScreenshotPermission(false);
          stream.getTracks().forEach((track) => track.stop());
        }, "image/png");
      });
    } catch (err) {
      console.error("Error capturing screenshot:", err);
      setShowScreenshotPermission(false);
    }
  };

  const cancelScreenshot = () => {
    setShowScreenshotPermission(false);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", {
      type: selectedType,
      ...formData,
      file: uploadedFile,
      screenshot: screenshot,
    });

    setFormData({
      fullName: "",
      email: "",
      title: "",
      details: "",
    });
    setUploadedFile(null);
    setScreenshot(null);
    setSelectedType(null);
    setIsOpen(false);
  };

  const openWidget = (type) => {
    setSelectedType(type);
    setIsOpen(true);
  };

  const handleBack = () => {
    setSelectedType(null);
  };

  return (
    <div
      className={`fixed bottom-5 ${
        language === "ar" ? "left-5" : "left-5"
      } z-50`}
    >
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-gray-700 transition-colors"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label={t("feedback.button", "Feedback")}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
          <span>{t("feedback.button", "Feedback")}</span>
        </button>
      )}

      {isOpen && (
        <div
          ref={widgetRef}
          className="bg-white rounded-lg shadow-2xl w-96"
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-widget-title"
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                {selectedType && (
                  <button
                    onClick={handleBack}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label={t("feedback.back", "Back")}
                  >
                    <i className="fas fa-arrow-left text-lg"></i>
                  </button>
                )}
                <h3 id="feedback-widget-title" className="text-lg font-bold">
                  {selectedType
                    ? t("feedback.sendFeedback", "Send feedback")
                    : t("feedback.title", "Feedback")}
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label={t("feedback.close")}
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>

            {!selectedType ? (
              <div className="space-y-3 p-2">
                <button
                  onClick={() => openWidget("idea")}
                  className="w-full text-left p-3 rounded-lg border hover:bg-gray-50"
                  aria-pressed={selectedType === "idea"}
                >
                  <p className="font-semibold">{t("feedback.idea.title")}</p>
                  <p className="text-sm text-gray-500">
                    {t("feedback.idea.description")}
                  </p>
                </button>
                <button
                  onClick={() => openWidget("issue")}
                  className="w-full text-left p-3 rounded-lg border hover:bg-gray-50"
                  aria-pressed={selectedType === "issue"}
                >
                  <p className="font-semibold">{t("feedback.issue.title")}</p>
                  <p className="text-sm text-gray-500">
                    {t("feedback.issue.description")}
                  </p>
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("feedback.form.fullName", "Full name")}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("feedback.form.email", "Email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("feedback.form.title", "Title")}
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t(
                      "feedback.form.details",
                      "Share us more details"
                    )}
                  </label>
                  <textarea
                    id="details"
                    rows="3"
                    value={formData.details}
                    onChange={(e) =>
                      handleInputChange("details", e.target.value)
                    }
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="file-upload"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("feedback.form.screenshot", "Screenshot")}
                  </label>
                  <div className="mt-1 flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="bg-gray-200 px-3 py-2 rounded-md text-sm hover:bg-gray-300 flex items-center space-x-2"
                    >
                      <span>
                        {t("feedback.form.upload", "Upload (2MB)")}
                      </span>
                    </button>
                    <input
                      id="file-upload"
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileUpload}
                      accept="image/*"
                    />
                    <button
                      type="button"
                      onClick={handleScreenshot}
                      className="bg-gray-200 px-3 py-2 rounded-md text-sm hover:bg-gray-300"
                    >
                      <i className="fas fa-camera"></i>
                    </button>
                  </div>
                  {uploadedFile && (
                    <p className="text-sm text-gray-500 mt-1">
                      {uploadedFile.name}
                    </p>
                  )}
                  {screenshot && (
                    <p className="text-sm text-gray-500 mt-1">
                      {t("feedback.screenshotAttached")}
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {error}
                    </p>
                  )}
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700"
                  >
                    {t("feedback.form.submit", "Submit")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {showScreenshotPermission && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="screenshot-permission-title"
        >
          <div className="bg-white rounded-lg p-6">
            <h4 id="screenshot-permission-title" className="text-lg font-bold">
              {t("feedback.screenshotPermission.title")}
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              {t("feedback.screenshotPermission.description")}
            </p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={cancelScreenshot}
                className="px-4 py-2 rounded-md"
              >
                {t("feedback.screenshotPermission.cancel")}
              </button>
              <button
                onClick={allowScreenshot}
                className="bg-primary-500 text-white px-4 py-2 rounded-md"
              >
                {t("feedback.screenshotPermission.allow")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

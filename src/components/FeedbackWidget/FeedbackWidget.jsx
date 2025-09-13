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

        canvas.toBlob(
          (blob) => {
            setScreenshot(blob);
            setShowScreenshotPermission(false);
            stream.getTracks().forEach((track) => track.stop());
          },
          "image/png"
        );
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

  return (
    <div
      className={`fixed bottom-5 ${
        language === "ar" ? "left-5" : "right-5"
      } z-50`}
    >
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-primary-600 transition-transform transform hover:scale-110"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label={t("feedback.button")}
        >
          <i className="fas fa-comment-dots text-2xl"></i>
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
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 id="feedback-widget-title" className="text-xl font-bold">
                {t("feedback.title")}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label={t("feedback.close")}
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {!selectedType ? (
              <div className="space-y-4">
                <button
                  onClick={() => openWidget("idea")}
                  className="w-full text-left p-4 rounded-lg border hover:bg-gray-50"
                  aria-pressed={selectedType === "idea"}
                >
                  <p className="font-bold">{t("feedback.idea.title")}</p>
                  <p className="text-sm text-gray-500">
                    {t("feedback.idea.description")}
                  </p>
                </button>
                <button
                  onClick={() => openWidget("issue")}
                  className="w-full text-left p-4 rounded-lg border hover:bg-gray-50"
                  aria-pressed={selectedType === "issue"}
                >
                  <p className="font-bold">{t("feedback.issue.title")}</p>
                  <p className="text-sm text-gray-500">
                    {t("feedback.issue.description")}
                  </p>
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("feedback.form.fullName")}
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
                    {t("feedback.form.email")}
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
                    {t("feedback.form.title")}
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
                    {t("feedback.form.details")}
                  </label>
                  <textarea
                    id="details"
                    rows="4"
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
                    {t("feedback.form.screenshot")}
                  </label>
                  <div className="mt-1 flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
                    >
                      {t("feedback.form.upload")}
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
                      className="bg-gray-200 px-4 py-2 rounded-md text-sm hover:bg-gray-300"
                    >
                      <i className="fas fa-camera"></i>
                    </button>
                  </div>
                  {uploadedFile && (
                    <p className="text-sm text-gray-500 mt-2">
                      {uploadedFile.name}
                    </p>
                  )}
                  {screenshot && (
                    <p className="text-sm text-gray-500 mt-2">
                      {t("feedback.screenshotAttached")}
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 text-sm mt-2" role="alert">
                      {error}
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600"
                  >
                    {t("feedback.form.submit")}
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
            <h4
              id="screenshot-permission-title"
              className="text-lg font-bold"
            >
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

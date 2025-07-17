// src/components/FeedbackWidget/FeedbackWidget.jsx
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function FeedbackWidget() {
  const { t } = useTranslation();
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
  const fileInputRef = useRef(null);

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
        alert("File size must be less than 2MB");
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleScreenshot = async () => {
    setShowScreenshotPermission(true);
  };

  const allowScreenshot = async () => {
    try {
      // Request screen capture
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
      });

      // Create video element to capture frame
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      video.addEventListener("loadedmetadata", () => {
        // Create canvas to capture screenshot
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);

        // Convert to blob
        canvas.toBlob((blob) => {
          setScreenshot(blob);
          setShowScreenshotPermission(false);
          // Stop the stream
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
    // Handle form submission
    console.log("Form submitted:", {
      type: selectedType,
      ...formData,
      file: uploadedFile,
      screenshot: screenshot,
    });

    // Reset form
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

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeScreenshot = () => {
    setScreenshot(null);
  };

  return (
    <>
      {/* Main Feedback Button*/}
      <div className="fixed bottom-0 left-8 z-50 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="feedbackBtn bg-gray-700 text-white px-4 py-2 rounded-t-lg shadow-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <span>💬</span>
          <span className="font-medium">Feedback</span>
        </button>
      </div>

      {/* Feedback Panel */}
      {isOpen && (
        <div className="fixed bottom-16 left-16 z-50">
          <div className="bg-gray-800 text-white rounded-t-lg shadow-xl w-96 overflow-hidden">
            {!selectedType ? (
              // Type Selection Panel
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Send feedback</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedType("idea")}
                    className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      💡
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Ideas / Feature</div>
                      <div className="text-sm text-gray-300">
                        Share your ideas with us
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedType("issue")}
                    className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      🐛
                    </div>
                    <div className="text-left">
                      <div className="font-medium">Issue/Bug</div>
                      <div className="text-sm text-gray-300">
                        Report a problem
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              // Form Panel
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setSelectedType(null)}
                    className="text-gray-400 hover:text-white "
                  >
                    ←
                  </button>
                  <h3 className="font-semibold">
                    {selectedType === "idea" ? "Ideas / Feature" : "Issue/Bug"}
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <textarea
                      placeholder="Share us more details"
                      value={formData.details}
                      onChange={(e) =>
                        handleInputChange("details", e.target.value)
                      }
                      rows={4}
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 resize-none"
                    />
                  </div>

                  {/* File Upload Section */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <button
                        onClick={handleScreenshot}
                        className="flex-1 p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors flex items-center justify-center gap-2"
                      >
                        📷 <span className="text-sm">Screenshot</span>
                      </button>

                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors flex items-center justify-center gap-2"
                      >
                        📎 <span className="text-sm">Upload (2MB)</span>
                      </button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      onChange={handleFileUpload}
                      accept="image/*,.pdf,.doc,.docx,.txt"
                      className="hidden"
                    />

                    {/* Display uploaded file */}
                    {uploadedFile && (
                      <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                        <div className="flex items-center gap-2">
                          <span>📄</span>
                          <span className="text-sm truncate">
                            {uploadedFile.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {(uploadedFile.size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                        <button
                          onClick={removeFile}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    )}

                    {/* Display screenshot */}
                    {screenshot && (
                      <div className="flex items-center justify-between p-2 bg-gray-700 rounded">
                        <div className="flex items-center gap-2">
                          <span>📷</span>
                          <span className="text-sm">screenshot.png</span>
                          <span className="text-xs text-gray-400">
                            {(screenshot.size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                        <button
                          onClick={removeScreenshot}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Screenshot Permission Modal */}
      {showScreenshotPermission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Allow ConsulRain.ai to see this tab?
              </h3>
              <p className="text-sm text-gray-600">
                The site will be able to see the contents of this tab
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={cancelScreenshot}
                className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={allowScreenshot}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

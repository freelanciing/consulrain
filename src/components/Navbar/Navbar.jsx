import React, { useState, useCallback, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import TransButton from "../TransButton";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import "./Navbar.css";
import "./DropdownPalette.css";

// Lazy load modal components for better performance
const LoginModal = React.lazy(() => import("../LoginModal/LoginModal"));
const RegisterModal = React.lazy(() =>
  import("../RegisterModal/RegisterModal")
);

const Navbar = memo(() => {
  const { t } = useTranslation();
  // Manually initialize Bootstrap dropdowns after mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const dropdownTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="dropdown"]')
      );
      dropdownTriggerList.forEach(function (dropdownTriggerEl) {
        new window.bootstrap.Dropdown(dropdownTriggerEl);
      });
    }
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = useCallback(() => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  }, []);

  const openRegisterModal = useCallback(() => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  }, []);

  const closeAllModals = useCallback(() => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isDropdownOpen) return;
    function handleClick(e) {
      const dropdown = document.getElementById("ourServicesDropdownWrapper");
      if (dropdown && !dropdown.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDropdownOpen]);

  return (
    <nav
      className="bg-primary-50 w-full py-3 fixed top-0 left-0 z-50 shadow-sm mb-5"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            className="logo flex items-center gap-3"
            to="/home"
            aria-label="ConsulRain Co. - Go to home page"
          >
            <img
              src={logo}
              alt="ConsulRain Company Logo"
              className="h-15"
              width="60"
              height="60"
              loading="eager"
            />
            <div className="company-brand">
              <div className="brand-name" aria-label="ConsulRain Co.">
                <span className="consul-nav">Consul</span>
                <span className="rain-nav">Rain</span>
                <span className="co-nav"> Co.</span>
              </div>
              <div
                className="brand-tagline"
                aria-label="Consulting and Training services"
              >
                Consulting and Training
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8 h-full">
            <ul className="flex items-center gap-8 m-0" role="menubar">
              <li role="none">
                <NavLink
                  to="/home"
                  className="text-gray-700 hover:text-primary-700 font-bold no-underline transition-colors duration-200 text-black"
                  role="menuitem"
                  aria-label="home page"
                >
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li
                className="nav-item relative"
                id="ourServicesDropdownWrapper"
                role="none"
              >
                <button
                  className={`nav-link dropdown-toggle text-gray-700 hover:text-primary-700  fw-bolder no-underline transition-colors duration-200 bg-transparent border-0 ${
                    isDropdownOpen ? "show" : ""
                  }`}
                  id="ourServicesDropdown"
                  type="button"
                  aria-expanded={isDropdownOpen}
                  aria-label="Our services menu"
                  style={{ boxShadow: "none" }}
                  onClick={() => setIsDropdownOpen((v) => !v)}
                  onBlur={(e) => {
                    // Only close if focus moves outside the dropdown
                    if (!e.currentTarget.parentNode.contains(e.relatedTarget)) {
                      setIsDropdownOpen(false);
                    }
                  }}
                >
                  {t("navbar.ourServices")}{" "}
                </button>
                <ul
                  className={`custom-dropdown-menu${
                    isDropdownOpen ? " show" : ""
                  }`}
                  aria-labelledby="ourServicesDropdown"
                  style={{
                    display: isDropdownOpen ? "block" : "none",
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    zIndex: 1000,
                  }}
                >
                  <li>
                    <NavLink
                      className="custom-dropdown-item"
                      to="/training"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t("navbar.training")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="custom-dropdown-item"
                      to="/consultation"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t("navbar.consultation")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="custom-dropdown-item"
                      to="/physability"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t("navbar.physability")}{" "}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li role="none">
                <NavLink
                  to="/about"
                  className="text-gray-700 hover:text-primary-700 font-bold no-underline transition-colors duration-200 text-black"
                  role="menuitem"
                  aria-label="About page"
                >
                  {t("navbar.about")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <TransButton />
            <button
              onClick={openLoginModal}
              className="text-primary-500 font-bold no-underline hover:text-primary-700 transition-colors duration-200 px-2"
            >
              {t("navbar.login")}
            </button>
            <Button
              label={t("navbar.joinUs")}
              padding="0 40px"
              handleClick={openRegisterModal}
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={toggleMobileMenu}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="lg:hidden py-4 border-t border-gray-200"
            id="mobile-menu"
            role="menu"
            aria-labelledby="mobile-menu-button"
          >
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/Home"
                className="text-gray-700 hover:text-primary-700 font-bold no-underline decoration-none py-2 text-black"
                style={{ textDecoration: "none" }}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-label="Home"
              >
                {t("navbar.Home")}
              </NavLink>
              <NavLink
                to="/About"
                className="text-gray-700 hover:text-primary-700 font-bold no-underline decoration-none py-2 text-black"
                style={{ textDecoration: "none" }}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-label="About us"
              >
                {t("navbar.aboutUs")}
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-700 hover:text-primary-700 font-bold no-underline decoration-none py-2 text-black"
                style={{ textDecoration: "none" }}
                onClick={() => setIsMenuOpen(false)}
                role="menuitem"
                aria-label="Services"
              >
                {t("navbar.services")}
              </NavLink>

              <NavLink
                to="/training"
                className="text-gray-700 hover:text-primary-700 font-bold no-underline transition-colors duration-200 text-black"
                role="menuitem"
                aria-label="our training"
              >
                {t("navbar.trainig")}
              </NavLink>

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <TransButton />
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openLoginModal();
                  }}
                  className="text-primary-500 font-bold no-underline decoration-none hover:text-primary-700 my-2 text-left"
                  style={{ textDecoration: "none" }}
                  type="button"
                  aria-label="Login to your account"
                >
                  {t("navbar.login")}
                </button>
                <Button
                  label={t("navbar.joinUs")}
                  handleClick={() => {
                    openRegisterModal();
                    setIsMenuOpen(false);
                  }}
                  aria-label="Join our platform"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal Components with Suspense for lazy loading */}
      <React.Suspense fallback={<div aria-hidden="true">Loading...</div>}>
        {/* Login Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={closeAllModals}
          onSwitchToRegister={openRegisterModal}
        />

        {/* Register Modal */}
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeAllModals}
          onSwitchToLogin={openLoginModal}
        />
      </React.Suspense>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

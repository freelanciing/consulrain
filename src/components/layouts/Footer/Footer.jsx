// import TransButton from "../../TransButton";
// import SocialFooter from "./SocialFooter";
// import { useTranslation } from "react-i18next";
// import logo from "../../../assets/spinnerLogo.png";
// import { NavLink } from "react-router-dom";
// export default function Footer() {
//   const { t } = useTranslation();
//   return (
//     <div>
//       <footer className="bg-pure-turquoise ">
//         <div className="h-7"></div>
//         {/* company data and links */}
//         <div className="flex justify-center">
//           <div className="w-full max-w-7xl  px-4 sm:ps-20 pb-20 flex flex-wrap gap-6 sm:gap-4 md:gap-16 lg:gap-16 xl:gap-32 items-start md:items-baseline flex-col sm:flex-row content-around justify-between">
//             {/* Brand Section */}
//             <div className="footer-brand flex flex-col items-start justify-start min-w-[220px]">
//               <div className="flex items-center gap-3 mb-3">
//                 <img src={logo} alt="ConsulRain Logo" className="w-16 h-16" />
//                 <h2 className="text-white font-bold text-2xl whitespace-nowrap">
//                   {t("footer.ConsulRainCo")}
//                 </h2>
//               </div>
//               <p className="text-blue-100 mb-4 max-w-xs">
//                 {t("footer.brandDescription")}
//               </p>
//               {/* Social Media Icons */}
//               <div className="flex gap-2 mt-2">
//                 <a
//                   href="https://facebook.com/consulrain"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-[#467471] hover:bg-[#182f40] transition-colors duration-200"
//                 >
//                   <i className="fab fa-facebook-f text-white hover:text-white text-lg"></i>
//                 </a>
//                 <a
//                   href="https://snapchat.com/add/consulrain"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Snapchat"
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-[#467471] hover:bg-[#182f40] transition-colors duration-200"
//                 >
//                   <i className="fab fa-snapchat-ghost text-white hover:text-white text-lg"></i>
//                 </a>
//                 <a
//                   href="https://linkedin.com/company/consulrain"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="LinkedIn"
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-[#467471] hover:bg-[#182f40] transition-colors duration-200"
//                 >
//                   <i className="fab fa-linkedin-in text-white hover:text-white text-lg"></i>
//                 </a>
//                 <a
//                   href="https://tiktok.com/@consulrain"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="TikTok"
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-[#467471] hover:bg-[#182f40] transition-colors duration-200"
//                 >
//                   <i className="fab fa-tiktok text-white hover:text-white text-lg"></i>
//                 </a>
//                 <a
//                   href="https://instagram.com/consulrain"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className="w-8 h-8 flex items-center justify-center rounded-full bg-[#467471] hover:bg-[#182f40] transition-colors duration-200"
//                 >
//                   <i className="fab fa-instagram text-white hover:text-white text-lg"></i>
//                 </a>
//               </div>
//             </div>

//             {/* Our Services*/}
//             <div className="our-services-footer">
//               <p className=" text-start text-white font-bold text-lg mb-6 pl-6">
//                 {t("footer.ourServices.Our Services")}
//               </p>
//               <ul className="cat-dropdown-menu">
//                 {[
//                   { label: t("footer.training.Training"), path: "/training" },
//                   { label: t("navbar.consultation"), path: "/consultation" },
//                   {
//                     label: t("navbar.feasibilityStudies"),
//                     path: "/feasibility-study",
//                   },
//                 ].map(({ label, path }, index) => (
//                   <li key={index} className="text-white">
//                     <NavLink
//                       to={path}
//                       className="p3 text-start text-blue-100 hover:text-white mb-3 block"
//                     >
//                       {label}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             {/* Company */}
//             <div className="our-company-footer">
//               <p className=" text-start text-white font-bold text-lg mb-6 pl-6">
//                 {t("footer.company.Company")}
//               </p>
//               <ul className="cat-dropdown-menu">
//                 {[
//                   { label: "About Us", href: "/about" },
//                   // { label: "Blog", href: "#" },
//                   // {
//                   //   label: "Careers",
//                   //   href: "#",
//                   //   target: "_blank",
//                   // },
//                   // { label: "Terms", href: "#" },
//                   {
//                     label: "Privacy Policy",
//                     href: "/privacy-policy",
//                   },
//                 ].map(({ label, href, target }, idx) => (
//                   <li key={idx}>
//                     <a
//                       href={href}
//                       target={target || "_self"}
//                       rel="noopener noreferrer"
//                     >
//                       <p className="p3 text-start text-blue-100 hover:text-white mb-3">
//                         {label}
//                       </p>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Us */}
//             <div className="contact-us-footer">
//               <p className="text-start text-white font-bold text-lg mb-6 pl-6">
//                 {t("footer.contactUs")}
//               </p>
//               <ul className="cat-dropdown-menu">

//                 <li>
//                   <p className="p4 leading-4 md:w-32 text-start mx-auto md:mx-0 text-blue-100 w-full mb-3">
//                     <span className="font-GilroySemiBold">
//                       {t("contact.email")}
//                     </span>{" "}
//                     {t("contact.emailValue")}
//                   </p>
//                 </li>

//                 <li>
//                   <p className="p4 leading-4 md:w-44 text-start mx-auto md:mx-0 text-blue-100 w-full mb-3">
//                     <span className="font-GilroySemiBold block">
//                       {t("contact.phone")}
//                     </span>
//                     {t("contact.phoneValue")}
//                   </p>
//                 </li>
//               </ul>
//               <div className="border-b-1 border-b-gray-600 h-2"></div>
//               <div className="border-1  border-primary-50 rounded-lg  mt-4 ">
//                 <TransButton />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b-1 border-b-gray-600"></div>
//         {/* social media links */}
//       </footer>
//     </div>
//   );
// }
import TransButton from "../../TransButton";
import SocialFooter from "./SocialFooter";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/spinnerLogo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div>
      <footer className="bg-pure-turquoise">
        <div className="h-7"></div>
        {/* company data and links */}
        <div className="flex justify-center">
          <div
            className={`w-full max-w-7xl px-4 ${
              isArabic ? "sm:pe-20" : "sm:ps-20"
            } pb-20 flex flex-wrap gap-6 sm:gap-4 md:gap-16 lg:gap-16 xl:gap-32 items-start md:items-baseline flex-col sm:flex-row content-around justify-between`}
          >
            {/* Brand Section */}
            <div
              className={`footer-brand flex flex-col ${
                isArabic ? "items-end text-right" : "items-start text-left"
              } justify-start min-w-[220px]`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={logo} alt="ConsulRain Logo" className="w-16 h-16" />
                <h2 className="text-white font-bold text-2xl whitespace-nowrap">
                  {t("footer.ConsulRainCo")}
                </h2>
              </div>
              <p className="text-blue-100 mb-4 max-w-xs">
                {t("footer.brandDescription")}
              </p>
              {/* Social Media Icons */}
              <div
                className={`flex gap-2 mt-2 ${
                  isArabic ? "justify-end" : "justify-start"
                }`}
              >
                {/* icons هنا نفس الكود */}
              </div>
            </div>

            {/* Our Services */}
            <div
              className={`our-services-footer ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`font-bold text-lg mb-6 ${
                  isArabic ? "pr-6 text-white" : "pl-6 text-white"
                }`}
              >
                {t("footer.ourServices.Our Services")}
              </p>
              <ul className="cat-dropdown-menu">
                {[
                  { label: t("footer.training.Training"), path: "/training" },
                  { label: t("navbar.consultation"), path: "/consultation" },
                  {
                    label: t("navbar.feasibilityStudies"),
                    path: "/feasibility-study",
                  },
                ].map(({ label, path }, index) => (
                  <li key={index} className="text-white">
                    <NavLink
                      to={path}
                      className="p3 hover:text-white mb-3 block text-blue-100"
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div
              className={`our-company-footer ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`font-bold text-lg mb-6 ${
                  isArabic ? "pr-6 text-white" : "pl-6 text-white"
                }`}
              >
                {t("footer.company.Company")}
              </p>
              <ul className="cat-dropdown-menu">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map(({ label, href, target }, idx) => (
                  <li key={idx}>
                    <a href={href} target={target || "_self"} rel="noreferrer">
                      <p className="p3 hover:text-white mb-3 text-blue-100">
                        {label}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div
              className={`contact-us-footer ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`font-bold text-lg mb-6 ${
                  isArabic ? "pr-6 text-white" : "pl-6 text-white"
                }`}
              >
                {t("footer.contactUs")}
              </p>
              <ul className="cat-dropdown-menu">
                <li>
                  <p className="p4 leading-4 md:w-44 text-blue-100 w-full mb-3">
                    <span className="font-GilroySemiBold">
                      {t("contact.email")}
                    </span>{" "}
                    {t("contact.emailValue")}
                  </p>
                </li>

                <li>
                  <p className="p4 leading-4 md:w-44 text-blue-100 w-full mb-3">
                    <span className="font-GilroySemiBold block">
                      {t("contact.phone")}
                    </span>
                    <span dir="ltr" style={{ textAlign: "left" }}>
                      {t("contact.phoneValue")}
                    </span>
                  </p>
                </li>
              </ul>
              <div className="border-b-1 border-b-gray-600 h-2"></div>
              <div className="border-1 border-primary-50 rounded-lg mt-4">
                <TransButton />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-1 border-b-gray-600"></div>
        {/* social media links */}
      </footer>
    </div>
  );
}

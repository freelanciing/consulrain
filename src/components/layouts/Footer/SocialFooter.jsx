import React from "react";
import logoimg from "../../../assets/completeLogo.webp";
import instagram from "../../../assets/Instagram.webp";
import facebook from "../../../assets/Facebook.webp";
import twitter from "../../../assets/Twitter.webp";
import linkedin from "../../../assets/Linkedin.webp";
import youtube from "../../../assets/Youtube.webp";
import whatsapp from "../../../assets/Whatsapp.webp";
export default function SocialFooter() {
  return (
    <div>
      <div className="flex justify-center bg-primary-50">
        <div className=" w-full max-w-7xl pt-3 pb-10 px-4 sm:ps-20  flex flex-wrap gap-6 sm:gap-4 md:gap-16 lg:gap-16 xl:gap-32 items-start md:items-baseline flex-col sm:flex-row content-around justify-between">
          {/* Footer Logo and Icons */}
          <div>
            <img
              loading="lazy"
              src={logoimg}
              className="w-40 h-11"
              alt="footer logo"
            />
          </div>
          <div className="flex gap-4 content-around mt-4">
            {[
              {
                href: "#",
                src: instagram,
                alt: "Instagram",
              },
              {
                href: "#",
                src: whatsapp,
                alt: "Whatsapp",
              },
              {
                href: "#",
                src: twitter,
                alt: "X",
              },
              {
                href: "#",
                src: facebook,
                alt: "Facebook",
              },
              {
                href: "#",
                src: linkedin,
                alt: "LinkedIn",
              },
              {
                href: "#",
                src: youtube,
                alt: "Youtube",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

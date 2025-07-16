import TransButton from "../TransButton";
// import { useTranslation } from "react-i18next";
import logoimg from "../../assets/dsdsds-1@2x.png";

export default function Header() {
  // const { t } = useTranslation();

  return (
    <header id="navbar" className="bg-primary-50 fixed top-0 z-50 w-full">
      <div className="flex justify-center">
        <nav
          className="flex w-full max-w-7xl items-center justify-between p-4 md:p-6 "
          aria-label="Main navigation"
        >
          {/* Logo and Main Navigation */}
          <div className="flex items-center py-4 2xl:ps-20 xl:ps-17 lg:ps-8 ps-4 max-h-20 w-full ">
            <a className="block" href="/" aria-label="Home">
              <img src={logoimg} className="w-30 h-8" alt="Site Logo" />
            </a>
          </div>

          {/* Trans Button */}
          <div>
            <TransButton />
          </div>
        </nav>
      </div>
    </header>
  );
}

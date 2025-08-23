
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { SEO } from "./components";


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'AR' ? 'ar' : 'en';
    document.documentElement.dir = i18n.language === 'AR' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <>
      <SEO />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

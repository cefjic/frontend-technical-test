import "@testing-library/jest-dom/extend-expect";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en-US",
  fallbackLng: "en-US",

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { fr: { translations: {} } },
});

export default i18n;

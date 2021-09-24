import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN_TRANSLATION from "./locales/en-US/common.json";

i18n.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: EN_TRANSLATION,
    },
  },
  lng: "en-US",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

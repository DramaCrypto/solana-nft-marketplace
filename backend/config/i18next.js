const path = require("path");
const i18next = require("i18next");

const en = require(path.resolve("locales/en.json"));

i18next.init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

module.exports = i18next;

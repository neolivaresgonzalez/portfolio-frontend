import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en', // Default locale in Strapi is 'en'
    supportedLngs: ['en'], // Match Strapi locales exactly ['es-419', 'fr-CA']
    load: 'currentOnly',

    interpolation: {
      escapeValue: false,
    },
    // Map browser language codes to Strapi locales
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng',
      convertDetectedLanguage: (lng) => {
        // if (lng.startsWith('es')) return 'es-419';
        // if (lng.startsWith('fr')) return 'fr-CA';
        return 'en';
      }
    },
    resources: {
      "en": {
        translation: {
          "projects": "Projects",
          "featured_projects": "Featured Projects",
          "browse_featured": "Browse my",
          "header": {
            "title": "Nicolás Olivares"
          }
        }
      }
    }
  });

export default i18n;

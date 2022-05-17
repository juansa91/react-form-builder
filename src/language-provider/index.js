import enLang from './entries/en-us';
import vnLang from './entries/vi-vn';
import esLang from './entries/es-es';

export const AppLanguages = [
  {
    languageId: 'vietnamese',
    locale: 'vi',
    name: 'Vietnamese',
    icon: 'vn',
  },
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  {
    languageId: 'spanish',
    locale: 'es',
    name: 'Spanish',
    icon: 'es',
  },
];

const AppLocale = {
  en: enLang,
  vi: vnLang,
  es: esLang,
};

export default AppLocale;

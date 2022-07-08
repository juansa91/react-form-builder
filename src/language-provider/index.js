import EnLang from './entries/en-US';
import VnLang from './entries/vi-VN';
import EsLang from './entries/es-ES';

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
  en: EnLang,
  vi: VnLang,
  es: EsLang,
};

export default AppLocale;

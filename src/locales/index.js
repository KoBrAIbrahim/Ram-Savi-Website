import ar from './ar.json'
import en from './en.json'

const translations = {
  ar,
  en
}

export const getPageTranslations = (language, pageKey) => {
  return translations[language]?.[pageKey] || translations.en[pageKey] || {}
}


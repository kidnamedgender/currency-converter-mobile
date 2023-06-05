import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import translationEN from './en/translation.json'
import translationRU from './ru/translation.json'

export const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    }
}

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'ru',
    fallbackLng: ['en', 'ru'],
    interpolation: {
        escapeValue: false,
    },
});

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zh_CN from 'antd/locale/zh_CN';
import zh_TW from 'antd/locale/zh_TW'
import en_US from 'antd/locale/en_US'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import 'dayjs/locale/zh-tw'
import enUS from './locales/en-US';
import zhCN from './locales/zh-CN';
import zhTW from './locales/zh-TW';
import type { Locale } from 'antd/lib/locale'
import type { LanguageType } from '@/stores/setting'

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      'zh-CN': {
        translation: zhCN
      },
      'en-US': {
        translation: enUS
      },
      'zh-TW': {
        translation: zhTW
      }
    },
    fallbackLng: 'en-US',
    // debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });


export {
  i18n
}

export const antdLocale: Record<LanguageType, Locale> = {
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'en-US': en_US,
}

export const dayjsLocalMap: Record<LanguageType, 'en' | 'zh-cn' | 'zh-tw'> = {
  'zh-CN': 'zh-cn',
  'zh-TW': 'zh-tw',
  'en-US': 'en',
}

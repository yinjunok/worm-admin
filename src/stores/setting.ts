import { create } from 'zustand'
import { i18n } from '@/i18n'

export type LanguageType = 'zh-CN' | 'zh-TW' | 'en-US'
export type ThemeType = 'dark' | 'light'

export type SettingState = {
  menuCollapsed: boolean
  language: LanguageType
  theme: ThemeType
}

export type SettingAction = {
  updateMenuCollapsed: (collapsed: boolean) => void
  updateLanguage: (language: LanguageType) => void
  updateTheme: (theme: ThemeType) => void
}

const useSettingStore = create<SettingState & SettingAction>((set) => ({
  theme: 'light',
  language: i18n.language as LanguageType ?? 'zh_CN',
  menuCollapsed: false,
  updateLanguage: (language: LanguageType) => {
    set(() => ({ language }))
  },
  updateMenuCollapsed: (collapsed) => {
    set(() => ({ menuCollapsed: collapsed }))
  },
  updateTheme: (theme) => {
    set(() => ({ theme }))
  }
}))

export default useSettingStore

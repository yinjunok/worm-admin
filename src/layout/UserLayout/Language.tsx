import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { TranslationOutlined } from '@ant-design/icons'
import useSettingStore from '@/stores/setting'
import type { LanguageType } from '@/stores/setting'
import sty from './styles.module.scss'

const language: Record<LanguageType, string> = {
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
  'en-US': 'English'
}

const Language = () => {
  const setting = useSettingStore()

  const items: MenuProps['items'] = [
    {
      key: 'zh-CN',
      label: 'zh-CN 简体中文(中国)'
    },
    {
      key: 'zh-TW',
      label: 'zh-TW 繁體中文(台灣地區)'
    },
    {
      key: 'en-US',
      label: 'en-US English(US)'
    }
  ]

  return (
    <Dropdown
      menu={{
        items,
        selectedKeys: [setting.language],
        onClick: ({ key }) => {
          setting.updateLanguage(key as LanguageType)
        }
      }}
    >
      <div className={sty.headerAction} style={{ fontSize: 16 }}>
        <TranslationOutlined />
        {language[setting.language]}
      </div>
    </Dropdown>
  )
}

export default Language

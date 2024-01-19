import { Switch } from 'antd'
import useSettingStore from '@/stores/setting'

const Theme = () => {
  const setting = useSettingStore()

  return (
    <Switch
      checked={setting.theme === 'dark'}
      checkedChildren='🌜'
      unCheckedChildren='🌞'
      onChange={checked => {
        setting.updateTheme(checked ? 'dark' : 'light')
      }}
    />
  )
}

export default Theme

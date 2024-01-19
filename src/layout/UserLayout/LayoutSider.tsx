import { useState, useEffect, useMemo } from 'react'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import useSettingStore from '@/stores/setting'
import { i18n } from '@/i18n'
import { menusBuilder, pathname2Keys } from './utils'
import sty from './styles.module.scss'

const { Sider } = Layout

const LayoutSider = () => {
  const [items, setItems] = useState< MenuProps['items']>(menusBuilder())
  const location = useLocation()
  const navigate = useNavigate()
  const setting = useSettingStore()
  const keys = useMemo(() => pathname2Keys(location.pathname), [location.pathname])
  const [openKeys, setOpenKeys] = useState(keys)

  useEffect(() => {
    const changeHandler = () => {
      setItems(menusBuilder())
    }

    i18n.on('languageChanged', changeHandler)

    return () => {
      i18n.off('languageChanged', changeHandler)
    }
  }, [])

  return (
    <Sider
      width={256}
      theme='light'
      collapsible
      collapsed={setting.menuCollapsed}
      onCollapse={(collapsed) => setting.updateMenuCollapsed(collapsed)}
    >
      <Menu
        mode="inline"
        items={items}
        openKeys={openKeys}
        selectedKeys={keys}
        className={sty.menu}
        defaultOpenKeys={keys}
        onOpenChange={ks => {
          setOpenKeys(ks)
        }}
        onClick={({ key }) => {
          navigate(key)
          setOpenKeys(pathname2Keys(key))
        }}
      />
    </Sider>
  )
}

export default LayoutSider

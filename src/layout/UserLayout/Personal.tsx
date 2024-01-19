import { Dropdown, Avatar } from 'antd'
import type { MenuProps } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import sty from './styles.module.scss'

const Personal = () => {
  const items: MenuProps['items'] = [
    {
      key: 'logout',
      label: '退出登录',
      icon: <LoginOutlined />
    },
  ]

  return (
    <Dropdown
      menu={{
        items
      }}
    >
      <div className={sty.headerAction}>
        <Avatar size='small' />
        <span>姓名</span>
      </div>
    </Dropdown>
  )
}

export default Personal
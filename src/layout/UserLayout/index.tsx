import { Outlet } from 'react-router-dom'
import { Layout, Space } from 'antd'
import { clsx } from 'clsx';
import logo from '@/assets/react.svg'
import useSettingStore from '@/stores/setting'
import sty from './styles.module.scss'
import Language from './Language';
import Personal from './Personal';
import LayoutSider from './LayoutSider';
import Theme from './Theme'

const { Header, Content } = Layout

const UserLayout = () => {
  const setting = useSettingStore()

  return (
    <Layout className={sty.main}>
      <Header className={clsx(sty.header, setting.theme === 'dark' && sty.dark)}>
        <div className={sty.logoWrapper}>
          <img className={sty.logo} src={logo} alt='logo' />
          <span>Worm Admin</span>
        </div>
        <Space align='center'>
          <Language />
          <Theme />
          <Personal />
        </Space>
      </Header>
      <Layout>
        <LayoutSider />
        <Content>
          <div className={sty.content}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default UserLayout

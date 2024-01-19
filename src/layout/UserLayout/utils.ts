import type { MenuProps } from 'antd'
import type { AppRouteObject } from '@/router/types'
import { i18n } from '@/i18n'

/**
 * 基于 src/router/routes 文件结构动态生成路由
 */
export const menusBuilder = (): MenuProps['items'] => {
  const menuModules: AppRouteObject[] = [];

  const modules = import.meta.glob('@/router/routes/**/*.tsx', { eager: true });
  Object.keys(modules).forEach((key) => {
    const mod = (modules as Record<string, { default: AppRouteObject[] }>)[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    menuModules.push(...modList);
  });

  return builder(menuModules);
}

const builder = (module: AppRouteObject[], parentKey: string = ''): MenuProps['items'] => {
  const menus: MenuProps['items'] = module.filter(m => m.meta).filter(m => !m.meta?.hideMenu).map(m => ({
    label: i18n.t(m.meta!.label),
    icon: m.meta!.icon,
    key: `${parentKey}/${m.meta!.key}`,
    children: m.children ? builder(m.children, `${parentKey}/${m.meta!.key}`) : undefined
  }))

  return menus
}

/**
 * 将路径转换成 Menu 组件的 selectedKey
*/
export const pathname2Keys = (pathname: string): string[] => {
  const path = pathname.split('/')
  const keys: string[] = []

  for (let i = 2; i <= path.length; i += 1) {
    keys.push(`${path.slice(0, i).join('/')}`)
  }
  
  return keys
}
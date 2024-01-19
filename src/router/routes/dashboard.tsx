import { DashboardOutlined } from '@ant-design/icons'
import { AppRouteObject } from '../types.ts'

const dashboardRoutes: AppRouteObject[] = [
  {
    path: 'dashboard',
    meta: {
      key: 'dashboard',
      label: '控制面板',
      icon: <DashboardOutlined />
    },
    children: [
      {
        path: 'data',
        meta: {
          key: 'data',
          label: '数据',
        },
        lazy: () => import('@/pages/Dashboard/Data/index.tsx')
      },
      {
        path: 'analysis',
        meta: {
          key: 'analysis',
          label: '分析',
        },
        lazy: () => import('@/pages/Dashboard/Analysis/index.tsx')
      },
      {
        path: '*',
        lazy: () => import('@/pages/Exceptions/404.tsx')
      }
    ]
  }
]

export default dashboardRoutes

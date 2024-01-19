import { UnorderedListOutlined } from '@ant-design/icons'
import { AppRouteObject } from '../types.ts'

const listRoutes: AppRouteObject[] = [
  {
    path: 'list',
    meta: {
      key: 'list',
      label: '列表',
      icon: <UnorderedListOutlined />
    },
    children: [
      {
        path: 'product',
        meta: {
          key: 'product',
          label: '产品列表'
        },
        lazy: () => import('@/pages/List/Product/index.tsx')
      },
      {
        path: 'product/form',
        lazy: () => import('@/pages/List/Product/Form/index.tsx')
      },
      {
        path: 'product/:id',
        lazy: () => import('@/pages/List/Product/Detail/index.tsx')
      },
      {
        path: '*',
        lazy: () => import('@/pages/Exceptions/404.tsx')
      }
    ]
  }
]

export default listRoutes

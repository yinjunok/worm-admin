import { createBrowserRouter, RouteObject } from 'react-router-dom'
import InitLayout from '@/layout/InitLayout/index.tsx'
import UserLayout from '@/layout/UserLayout/index.tsx'
import ErrorPage from '@/pages/Exceptions/ErrorPage.tsx'
import { AppRouteObject } from './types.ts'
import dashboard from './routes/dashboard.tsx'
import list from './routes/list.tsx'

const appRoutes: AppRouteObject[] = [
  {
    path: '/',
    element: <InitLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <UserLayout />,
        children: [
          ...dashboard,
          ...list,
        ]
      }
    ]
  },
  {
    path: '*',
    lazy: () => import('../pages/Exceptions/404.tsx')
  }
]

const router = createBrowserRouter(appRoutes as RouteObject[])

export default router

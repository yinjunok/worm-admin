import { useEffect } from 'react'
import { ConfigProvider, theme as antdTheme } from 'antd'
import type { ThemeConfig } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Result, Button } from 'antd'
import { RouterProvider } from 'react-router-dom'
import dayjs from 'dayjs'
import useSettingStore from '@/stores/setting'
import type { ThemeType } from '@/stores/setting'
import { dayjsLocalMap, antdLocale, i18n } from '@/i18n/index'
import router from './router'

const queryClient = new QueryClient()

const themeAlgorithm: Record<ThemeType, ThemeConfig['algorithm']> = {
  dark: antdTheme.darkAlgorithm,
  light: antdTheme.defaultAlgorithm
}

const App = () => {
  const language = useSettingStore(store => store.language)
  const theme = useSettingStore(store => store.theme)

  useEffect(() => {
    dayjs.locale(dayjsLocalMap[language])
    i18n.changeLanguage(language)
  }, [language])

  return (
    <ConfigProvider
      locale={antdLocale[language]}
      theme={{
        algorithm: themeAlgorithm[theme]
      }}
    >
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <Result
            status="500"
            title="发生错误"
            subTitle={JSON.stringify(error)}
            extra={<Button type="primary" onClick={() => resetErrorBoundary()}>重试</Button>}
          />
        )}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ErrorBoundary>
    </ConfigProvider>
  )
}

export default App
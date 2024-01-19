import { useRef, useEffect } from 'react'
import { theme } from 'antd'
import { Outlet, useNavigation } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import type { LoadingBarRef } from 'react-top-loading-bar'

const InitLayout = () => {
  const loadingBarRef = useRef<LoadingBarRef>(null)
  const navigation = useNavigation()
  const { token } = theme.useToken()

  useEffect(() => {
    if (!loadingBarRef.current) {
      return
    }
    if (navigation.state === 'loading') {
      loadingBarRef.current.continuousStart()
    }
    if (navigation.state === 'idle') {
      loadingBarRef.current.complete()
    }
  }, [navigation.state])

  return (
    <>
      <LoadingBar color={token.colorPrimary} ref={loadingBarRef} />
      <Outlet />
    </>
  )
}

export default InitLayout

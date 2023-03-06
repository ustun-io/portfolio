import React, { useEffect } from 'react'

import { APP_HEAD_TITLE } from './app.constant'
import { HeroComponent } from './module'

const App = () => {
  useEffect(() => {
    document.title = APP_HEAD_TITLE
  }, [])

  return (
    <>
      <HeroComponent />
    </>
  )
}

export default App

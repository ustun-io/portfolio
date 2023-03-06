import React, { useEffect } from 'react'

import { APP_HEAD_TITLE } from './app.constant'
import { Home } from './features'

function App() {
  useEffect(() => {
    document.title = APP_HEAD_TITLE
  }, [])
  return (
    <>
      <Home />
    </>
  )
}

export default App

import React, { useEffect } from 'react'

import { APP_HEAD_TITLE } from './app.constant'
import { HeroView, ProjectView } from './module'

const App = () => {
  useEffect(() => {
    document.title = APP_HEAD_TITLE
  }, [])

  return (
    <div className={'flex flex-col'}>
      <HeroView />
      <ProjectView />
      <HeroView />
    </div>
  )
}

export { App }

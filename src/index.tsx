import React from 'react'

import App from './app.component'
import { Header } from './component'
import reportWebVitals from './reportWebVitals'

import './asset/style/bundle.scss'

import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const bootstrap = () =>
  root.render(
    <React.StrictMode>
      <Header />
      <App />
    </React.StrictMode>
  )

bootstrap()

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './i18n/i18n.config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
)

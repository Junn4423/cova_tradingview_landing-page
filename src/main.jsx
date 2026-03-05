import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// i18n is initialised lazily — it is not used by any component yet, so
// there is no reason to block the first render with a synchronous import.
// Deferring it removes i18next + all 12 locale JSON files from the
// critical JS bundle, improving initial parse / execution time.
setTimeout(() => import('./i18n/i18n.config.js'), 0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.StrictMode>,
)

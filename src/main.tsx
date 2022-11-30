import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { library } from '@fortawesome/fontawesome-svg-core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

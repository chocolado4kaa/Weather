import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CityProvider} from './context/cityContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CityProvider>
    <App />
  </CityProvider>,
)

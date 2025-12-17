import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import './index.css'
import './lib/i18n.tsx'
import App from './App.tsx'

const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <App />
    </GoogleReCaptchaProvider>
  </StrictMode>,
)

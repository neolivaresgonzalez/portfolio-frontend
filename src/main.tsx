import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import './index.css'

import App from './App.tsx'
import { ThemeProvider } from "@/components/ui/shadcn-ui/theme-provider"

const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
      <ThemeProvider storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  </StrictMode>,
)

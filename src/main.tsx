import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './1.app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)

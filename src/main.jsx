import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Interactive from './Interactive.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Interactive />
  </StrictMode>,
)

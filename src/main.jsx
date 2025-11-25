import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { ContextProvider } from './Components/Context/Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextProvider>
      <App />
</ContextProvider>
  </StrictMode>,
)

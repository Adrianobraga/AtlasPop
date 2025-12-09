import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { ContextProvider } from './Components/Context/Context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout'

const router = createBrowserRouter([
  {
   path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<ContextProvider>
      <RouterProvider router={router} />
</ContextProvider>
  </StrictMode>,
)

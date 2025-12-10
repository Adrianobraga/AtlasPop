import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/App/App'
import { ContextProvider } from './Components/Context/Context'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Components/RootLayout'
import Favorito from './Components/Favorito/Favorito'

const router = createBrowserRouter([
  {
   path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/Favoritos", element: <Favorito /> },
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

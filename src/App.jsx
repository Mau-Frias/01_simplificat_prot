import Root from './routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './routes/errorPage/errorPage.jsx'
import Contacto from './routes/contacto/contacto.jsx'
import Home from './routes/home/home.jsx'
import Nosotros from './routes/nosotros/nosotros.jsx'
import Valores from './routes/valores/valores.jsx'

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contacto',
        element: <Contacto />
      },
      {
        path: '/valores',
        element: <Valores />
      },
      {
        path: '/nosotros',
        element: <Nosotros />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

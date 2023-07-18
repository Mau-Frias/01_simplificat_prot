import Root from './routes/root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/errorPage.jsx'
import Contacto from './routes/contacto.jsx'
import Home from './routes/home.jsx'
import Nosotros from './routes/nosotros.jsx'
import Conocenos from './routes/conocenos.jsx'

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
        path: '/conocenos',
        element: <Conocenos />
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
    <>
      <div className='content'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App

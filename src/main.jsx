import React ,{createHashRouter, RouterProvider}from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Mesa1440.css'
import PrincipalRick from './Componentes/PrincipalRick.jsx'
import FichasRick from './Componentes/FichasRick.jsx'

const router =createHashRouter([
  {
    path:"/",
    element:<PrincipalRick />
  },
  {
    ppath:"/",
    element:<FichasRick />
  },
  {
    path:"/",
    element:<p>ERROR 404 Pagina inexitente</p>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

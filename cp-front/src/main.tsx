import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './Pages/Home/index.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cadastro from './Pages/Cadastro/index.tsx'
import Login from './Pages/Login/index.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/cadastro",
    element: <Cadastro/>
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from './pages/Layout';
import LayoutInicial from './pages/LayoutInicial'
import Panel from './pages/Panel'
import User from './pages/User'
import AgregarUsuario from './pages/AgregarUsuario'
import Empleados from './pages/Empleados'
import Cocina from './pages/Cocina'
import Pedidos from './pages/Pedidos'
import Login from './pages/Login'
import MenuDital from './pages/MenuDital';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
{
  path: '/inicio',
  element: <Layout/>, 
  children: [
    {
      index: true,
      path:'usuario',
      element:<User/>
    },
    {
      path:"panel",
      element:<Panel/>

    },
    {
      path:"agregarusuarios",
      element:<AgregarUsuario/>

    },
    {
      path:"empleados",
      element:<Empleados/>

    },
    {
      path:"ordenes",
      element:<Cocina/>,
    },
    {
      path:"pedidos",
      element:<Pedidos/>

    },
    {
      path:"menudigital",
      element:<MenuDital/>

    }
  ]
},  
{
  path:"/",
  element:<LayoutInicial/>,
  children:[{
  index: true,
  element:<Login/>

  }]
  

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

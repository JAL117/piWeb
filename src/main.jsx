import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from './pages/Layout';
import LayoutInicial from './pages/LayoutInicial'
import Panel from './pages/Panel'
import User from './pages/User'
import AgregarUsuario from './pages/AgregarUsuario'
import CardCocina from './components/Cocina/Insumos';
import CardOrdenesCocina from './components/Cocina/CardOrdenesCocina'
import Empleados from './pages/Empleados'
import Cocina from './pages/Cocina'
import Ordenes from './pages/Ordenes'
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
      path:"cocina",
      element:<Cocina/>,
      children: [
        {
          index: true,
          element: <CardOrdenesCocina/>
        },{
          path: "insumos",
          element: <CardCocina/>
        }
      ]
    },
    {
      path:"ordenes",
      element:<Ordenes/>

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

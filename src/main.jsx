import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import LayoutInicial from "./pages/LayoutInicial";
import Panel from "./pages/Panel";
import Ordenes from "./pages/Ordenes";
import AgregarUsuario from "./pages/AgregarUsuario";
import Empleados from "./pages/Empleados";
import Cocina from "./pages/Cocina";
import Pedidos from "./pages/Pedidos";
import Login from "./pages/Login";

import Envios from "./pages/Adomicilio";
import Imsumos from './pages/Imsumos'
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/inicio",
    element: <Layout />,
    children: [
      {
        path: "panel",
        element: <Panel />,
      },
      {
        path: "agregarusuarios",
        element: <AgregarUsuario />,
      },
      {
        path: "empleados",
        element: <Empleados />,
      },
      {
        path: "ordenes",
        element: <Ordenes />,
      },
      {
        path: "envios",
        element: <Envios />,
      },
      {
        path: "pedidos",
        element: <Pedidos />,
      },
      {
        path: "cocina",
        element: <Cocina />,
      },
      {
        path: "actualizar-menu",
        element: <Imsumos />,
      },
    ],
  },
  {
    path: "/",
    element: <LayoutInicial />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

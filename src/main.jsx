import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Imsumos from "./pages/Imsumos";
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from "./pages/Inicio";

function App() {

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutInicial />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/inicio" element={localStorage.getItem("Usuario") ? <Layout /> : <Navigate to="/" />}>
            <Route path="panel" element={<Panel />} />
            <Route path="agregarusuarios" element={<AgregarUsuario />} />
            <Route path="empleados" element={<Empleados />} />
            <Route path="ordenes" element={<Ordenes />} />
            <Route path="envios" element={<Envios />} />
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="cocina" element={<Cocina />} />
            <Route path="actualizar-menu" element={<Imsumos />} />
            <Route path="principal" element={<Principal />} />
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
import React, { useState } from "react";
import Navbar from "./NavPedidos";
import CardList from "./CardsList";
import OrderSection from "./SecciondeOrden";


function App() {
  const alimentos = [
    {
      id: 11,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 12,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 13,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },   {
      id: 14,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 15,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 16,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },   {
      id: 17,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 18,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 19,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    {
      id: 2,
      nombre: "Tacos de pollo",
      imagenUrl: `../src/img/Login.png`,
      categoria: "tacos",
    },
    {
      id: 3,
      nombre: "Coca-Cola 600 ml",
      imagenUrl: "url-de-la-imagen",
      categoria: "bebidas",
    },
  ];

  const [categoriaActual, setCategoriaActual] = useState("talyudas");

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaActual(categoria);
  };

  return (
    <div style={{marginTop:'-11px'}}>
      <Navbar onCategoriaSeleccionada={handleCategoriaSeleccionada}  />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <CardList alimentos={alimentos} categoriaActual={categoriaActual} />
          </div>
          <div className="col-md-4">
            <OrderSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

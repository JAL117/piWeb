import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

function Navbar({ onCategoriaSeleccionada }) {
  const categorias = [
    { id: "tlayudas", nombre: "Tlayudas" },
    { id: "tacos", nombre: "Tacos" },
    { id: "bebidas", nombre: "Bebidas" },
    { id: "tortas", nombre: "Tortas" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    categorias[0].id
  );

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    onCategoriaSeleccionada(categoria);
  };

  return (
    <div style={{ fontSize: "20px" }}>
      <Nav variant="tabs" defaultActiveKey={categoriaSeleccionada}>
        {categorias.map((categoria) => (
          <Nav.Item key={categoria.id}>
            <Nav.Link
              eventKey={categoria.id}
              onClick={() => handleCategoriaSeleccionada(categoria.id)}
            >
              {categoria.nombre}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Navbar;
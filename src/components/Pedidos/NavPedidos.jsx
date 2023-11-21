import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";

function Navbar({ onCategoriaSeleccionada }) {
  const categorias = [
    { id: "Tlayuda", nombre: "Tlayudas" },
    { id: "Taco", nombre: "Tacos" },
    { id: "Bebida", nombre: "Bebidas" },
    { id: "Torta", nombre: "Tortas" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    categorias[0].id
  );

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    onCategoriaSeleccionada(categoria);
  };

  return (
    <div style={{ fontSize: "20px" , fontWeight:'450' }}>
      <Nav variant="tabs" defaultActiveKey={categoriaSeleccionada} className="ms-2">
        {categorias.map((categoria) => (
          <Nav.Item key={categoria.id}>
            <Nav.Link
              eventKey={categoria.id}
              onClick={() => handleCategoriaSeleccionada(categoria.id)}
              style={{
                color:
                  categoria.id === categoriaSeleccionada ? "red" : "black", 
              }}
              className="ms-2"
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
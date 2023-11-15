import React from "react";
import Nav from "react-bootstrap/Nav";

function Navbar({ onCategoriaSeleccionada }) {
  return (
    <div style={{ fontSize: "20px", marginTop: "20px" }}>
      <Nav variant="tabs" defaultActiveKey="tlayudas">
        <Nav.Item>
          <Nav.Link
            eventKey="tlayudas"
            onClick={() => onCategoriaSeleccionada("tlayudas")}
          >
            Tlayudas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="tacos"
            onClick={() => onCategoriaSeleccionada("tacos")}
          >
            Tacos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="bebidas"
            onClick={() => onCategoriaSeleccionada("bebidas")}
          >
            Bebidas
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
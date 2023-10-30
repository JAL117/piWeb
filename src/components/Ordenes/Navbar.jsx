import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function CustomNavbar(props) {
  return (
    <Navbar className="mb-5">
      <Nav className="ml-auto" style={{ color: "red" }}>
        <Nav.Link onClick={() => props.onSectionSelect("todos")}>Todos</Nav.Link>
        <Nav.Link onClick={() => props.onSectionSelect("tacos")}>Tacos</Nav.Link>
        <Nav.Link onClick={() => props.onSectionSelect("tlayudas")}>Tlayudas</Nav.Link>
        <Nav.Link onClick={() => props.onSectionSelect("bebidas")}>Bebidas</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;

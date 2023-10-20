import { useState } from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrello, FaUserPlus, FaUsers, FaBars, FaUser } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdBorderColor, MdOutlineMenuBook } from "react-icons/md";
import { ImExit } from "react-icons/im";

function NavbarComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navbarStyle = {
    position: "fixed", // Fijar la posición
    top: 0, // Fijar en la parte superior
    width: "100%", // Ancho completo
    zIndex: 1000, // Asegurar que está por encima de otros elementos
  };

  return (
    <>
      <Navbar
        variant="dark"
        className="bg-dark me-auto"
        expand={false}
        style={navbarStyle}
      >
        <Container>
          
          <Navbar.Brand as={Link} to="/inicio" className="mt-2 text-white">
            Ardon - carnes && grill
         </Navbar.Brand>
         <Navbar.Toggle onClick={handleShow} />
        </Container>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="bg-dark text-white"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body style={{ width: "200px" }}>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/inicio/usuario" className="text-white">
              <FaUser />
              Usuario
            </Nav.Link>
            <Nav.Link as={Link} to="/inicio/panel" className="text-white">
              <FaTrello />
              Panel
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/inicio/agregarusuarios"
              className="text-white"
            >
              <FaUserPlus />
              Agregar usuario
            </Nav.Link>
            <Nav.Link as={Link} to="/inicio/empleados" className="text-white">
              <FaUsers /> Empleados
            </Nav.Link>
            <Nav.Link as={Link} to="/inicio/cocina" className="text-white">
              <FaKitchenSet /> Cocina
            </Nav.Link>
            <Nav.Link as={Link} to="/inicio/ordenes" className="text-white">
              <MdBorderColor /> Ordenes
            </Nav.Link>
            <Nav.Link as={Link} to="/inicio/menudigital" className="text-white">
              <MdOutlineMenuBook /> Menu digital
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white">
              <ImExit />
              Salir
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavbarComponent;

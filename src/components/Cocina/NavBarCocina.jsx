import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{fontSize:"40px"}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/inicio/cocina/ordenCocina"
              className="text-blue"
            >
              Ordenes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/inicio/cocina/insumos"
              className="text-blue"
            >
              Insumos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

import React, { useState } from "react";
import { Button, Navbar, Nav, Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutdoorGrill } from "react-icons/md";
import { FaUsersCog, FaUser } from "react-icons/fa";
import { FaShop, FaKitchenSet } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { MdDeliveryDining } from "react-icons/md";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import { BiSolidFoodMenu } from "react-icons/bi";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";

const handleExit = (opc) => {
  console.log(opc);
  Swal.fire({
    title: "¿Esta seguro de Salir?",
    text: "Seleccione una opcion",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Salir",
  })
    .then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Usuario");
        navegar("/");
      } else {
        navegar("/inicio/ordenes");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
const NavbarOffcanvas = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const [showUserOffcanvas, setShowUserOffcanvas] = useState(false);
  const handleToggleUserOffcanvas = () => {
    setShowUserOffcanvas(!showUserOffcanvas);
  };
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "#100b0bf7",
          boxShadow: "0px 10px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Navbar.Brand className="ms-4">
          ARDON <MdOutdoorGrill size={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-around">
          <Nav className="mr-auto ms-2">
            <Nav.Link className="ms-5">
              <Button
                variant="outline-light"
                as={Link}
                to="/inicio/cocina"
                style={{ border: "none" }}
              >
                <FaKitchenSet size={35} />
                <div className="mt-1">Cocina</div>
              </Button>
            </Nav.Link>
            <Nav.Link className="ms-5">
              <Button
                variant="outline-light"
                as={Link}
                to="/inicio/ordenes"
                style={{ border: "none" }}
              >
                <FaShop size={35} />
                <div className="mt-1">Ordenes</div>
              </Button>
            </Nav.Link>
            <Nav.Link className="ms-5">
              <Button
                variant="outline-light"
                as={Link}
                to="/inicio/envios"
                style={{ border: "none" }}
              >
                <MdDeliveryDining size={35} />
                <div className="mt-1">Envios</div>
              </Button>
            </Nav.Link>
            <Nav.Link className="ms-5">
              <Button
                variant="outline-light"
                as={Link}
                to="/inicio/pedidos"
                style={{ border: "none" }}
              >
                <BsFillClipboard2CheckFill size={35} />
                <div className="mt-1">Pedidos</div>
              </Button>
            </Nav.Link>
           
           
          </Nav>
          <div className="ms-3 mt-2">
            <Button
              variant="outline-light"
              onClick={handleToggleUserOffcanvas}
              style={{ border: "none" }}
            >
              <FaUser size={25} />
            </Button>
            <Button
              variant="outline-light ms-2"
              onClick={handleToggleOffcanvas}
              style={{ border: "none" }}
            >
              <FaUsersCog size={25} />
            </Button>
            <Button
              variant="outline-light ms-2"
              onClick={handleExit}
              style={{ border: "none" }}
            >
              <ImExit size={25} />
            </Button>
          </div>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={handleToggleOffcanvas}
        placement="end"
        className=" text-white"
        style={{
          backgroundColor: "#100b0bf7",
          boxShadow: "0px 10px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Offcanvas.Header closeButton closeButtonVariant="light">
          <Offcanvas.Title>
            <h3>Opciones administrador</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="align-items-center">
            <ul>
              <li>
                <Button
                  as={Link}
                  to="/inicio/panel"
                  className="ms-3"
                  size="lg"
                  variant="outline-light"
                >
                  <FaUsersCog /> Panel
                </Button>
              </li>

              <li className="mt-4">
                <Button
                  as={Link}
                  to="/inicio/empleados"
                  className="ms-3"
                  size="lg"
                  variant="outline-light"
                >
                  <FaUsersCog /> Empleados
                </Button>
              </li>

              <li className="mt-4">
                <Button
                  as={Link}
                  to="/inicio/agregarusuarios"
                  className="ms-3"
                  size="lg"
                  variant="outline-light"
                >
                  <FaUsersCog /> Agregar Usuarios
                </Button>
              </li>
              <li className="mt-4">
                <Button
                  as={Link}
                  to="/inicio/actualizar-menu"
                  className="ms-3"
                  size="lg"
                  variant="outline-light"
                >
                  <MdFoodBank/> Actualizar Menu
                </Button>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showUserOffcanvas}
        onHide={handleToggleUserOffcanvas}
        placement="end"
        className=" text-white"
        style={{
          backgroundColor: "#100b0bf7",
          boxShadow: "0px 10px 8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>
            <h4>Nombre de usuario:</h4>
            {/* No olvides poner el nombre de usuario aqui */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="p-3">
       
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña actual</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña actual"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nueva contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su nueva contraseña"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
              />
            </Form.Group>
            <Button className="ms-2" variant="outline-success">
              Modificar
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarOffcanvas;

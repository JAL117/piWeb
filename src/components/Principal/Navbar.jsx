import React, { useState, useEffect } from "react";
import { Button, Navbar, Nav, Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutdoorGrill } from "react-icons/md";
import { FaUsersCog, FaUser } from "react-icons/fa";
import { FaShop, FaKitchenSet } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { MdDeliveryDining } from "react-icons/md";
import { BsFillClipboard2CheckFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const usuario = JSON.parse(localStorage.getItem("Usuario"));
const rol = usuario?.rol;

const NavbarOffcanvas = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const navegar = useNavigate();

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const usuario = JSON.parse(localStorage.getItem("Usuario"));
  const handleExit = (opc) => {
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
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [showUserOffcanvas, setShowUserOffcanvas] = useState(false);
  const handleToggleUserOffcanvas = () => {
    setShowUserOffcanvas(!showUserOffcanvas);
  };
  const validarPassword = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3006/usuario/pass/${usuario.usuario}&${password}`)
      .then((result) => {
        if (password === result.data.contraseña) {
          if (newPassword === confirmPassword) {
            axios
              .put("http://localhost:3006/usuario/usuarioPass", {
                password: password,
                passwordNew: newPassword,
                usuario: usuario.usuario,
              })
              .then((result) => {
                Swal.fire({
                  icon: "success",
                  title: `${result.data.msg}`,
                  showConfirmButton: true,
                });
                setPassword("")
                setNewPassword("")
                setConfirmPassword("")
                setShowUserOffcanvas(false);
              })
              .catch((err) => {
                Swal.fire({
                  icon: "success",
                  title: `${err.message}`,
                  showConfirmButton: false,
                });
              });
          } else {
            Swal.fire({
              icon: "error",
              title: "La nueva contraseña no coincide con la de corfimación",
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "La contraseña actual no coincide",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
    
      <Navbar
        expand="lg"
        variant="dark"
        style={{
          backgroundColor: "#100b0bf7",
          boxShadow: "0px 10px 8px 0px rgba(0, 0, 0, 0.25)",
        }}>
        <Navbar.Brand className="ms-4">
          ARDON <MdOutdoorGrill size={35} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-around">
          <Nav className="mr-auto ms-5 justify-content-around">
            <Nav.Link className="ms-5">
              {(rol == 'Cocinero' || rol== 'Administrador') && (
              <>
                <Button
                variant="outline-light"
                as={Link}
                to="/inicio/cocina"
                style={{ border: "none" }}>
                <FaKitchenSet size={35} />
                <div className="mt-1">Cocina</div>
              </Button>
              </>)}
            
            </Nav.Link>
            <Nav.Link className="ms-5">
              {(rol == 'Mesero'|| rol== 'Administrador') && (
              <>
               <Button
                variant="outline-light"
                as={Link}
                to="/inicio/ordenes"
                style={{ border: "none" }}>
                <FaShop size={35} />
                <div className="mt-1">Ordenes</div>
              </Button>
              </>)}
             
            </Nav.Link>
            <Nav.Link className="ms-5">
              {(rol == 'Envios' || rol== 'Administrador') && (
              <>
                 <Button
                variant="outline-light"
                as={Link}
                to="/inicio/envios"
                style={{ border: "none" }}>
                <MdDeliveryDining size={35} />
                <div className="mt-1">Envios</div>
              </Button>
              </>)}
           
            </Nav.Link>
            <Nav.Link className="ms-5">
              {(rol == 'Envios' || rol=='Mesero'|| rol== 'Administrador') &&  (
              <>
                <Button
                variant="outline-light"
                as={Link}
                to="/inicio/pedidos"
                style={{ border: "none" }}>
                <BsFillClipboard2CheckFill size={35} />
                <div className="mt-1">Pedidos</div>
              </Button>
              </>)}
            
            </Nav.Link>
          </Nav>
          <div className="ms-3 mt-2">
            <Button
              variant="outline-light"
              onClick={handleToggleUserOffcanvas}
              style={{ border: "none" }}>
              <FaUser size={25} />
            </Button>
            {rol == "Administrador" && (
              <>
                 <Button
              variant="outline-light ms-2"
              onClick={handleToggleOffcanvas}
              style={{ border: "none" }}>
              <FaUsersCog size={25} />
            </Button>
              </> )}
         
            <Button
              variant="outline-light ms-2"
              onClick={handleExit}
              style={{ border: "none" }}>
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
        }}>
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
                  variant="outline-light">
                  <FaUsersCog /> Panel
                </Button>
              </li>

              <li className="mt-4">
                <Button
                  as={Link}
                  to="/inicio/empleados"
                  className="ms-3"
                  size="lg"
                  variant="outline-light">
                  <FaUsersCog /> Empleados
                </Button>
              </li>

              <li className="mt-4">
                <Button
                  as={Link}
                  to="/inicio/agregarusuarios"
                  className="ms-3"
                  size="lg"
                  variant="outline-light">
                  <FaUsersCog /> Agregar Usuarios
                </Button>
              </li>
              <li className="mt-4">
                <Button
                  as={Link}
                  to="/inicio/actualizar-menu"
                  className="ms-3"
                  size="lg"
                  variant="outline-light">
                  <MdFoodBank /> Actualizar Menu
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
        }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h4>Nombre de usuario:</h4>
            {usuario.usuario}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="p-3" onSubmit={validarPassword} method="post">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contraseña actual</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña actual"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nueva contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Ingrese su nueva contraseña"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar contraseña"
              />
            </Form.Group>
            <Button type="submit" className="ms-2" variant="outline-success">
              Modificar
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarOffcanvas;

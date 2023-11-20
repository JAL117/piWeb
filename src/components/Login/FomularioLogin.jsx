import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import img1 from "../../img/Login.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navegar = useNavigate();

  const iniciarSecion = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3006/usuario/${user}&${password}`)
      .then((result) => {
        if (
          result.data.value !== undefined ||
          result.data.message !== "Usuario no encontrado"
        ) {
          localStorage.setItem("Usuario", JSON.stringify(result.data));
          navegar("/inicio/cocina");
          window.location.reload();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario y/o la contraseña son incorrectas!",
          });
        }
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  };
  return (
    <Container fluid className="w-100">
      <Row className="vh-100 text-white" style={{ backgroundColor: "#100B0B" }}>
        <Col md={6} className="p-0">
          <img
            src={img1}
            alt="Imagen de fondo"
            className="img-fluid h-100 w-100"
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div className="w-75 mx-auto">
            <h2 className="text-center mb-4">Bienvenido</h2>
            <Form onSubmit={iniciarSecion}>
              <Form.Group controlId="formUsuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  required
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  type="text"
                  placeholder="Ingrese su usuario"
                />
              </Form.Group>
              <Form.Group controlId="formContrasena">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="danger" type="submit" className="mt-5">
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

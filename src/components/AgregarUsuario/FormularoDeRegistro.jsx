import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { BiSolidUser } from "react-icons/bi";
import { BsFillHouseLockFill } from "react-icons/bs";

function RegistroCompleto() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [rol, setRol] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (nombre.trim() === "") {
      errors.nombre = "El campo Nombre es obligatorio.";
    }

    if (apellido.trim() === "") {
      errors.apellido = "El campo Apellido es obligatorio.";
    }

    if (direccion.trim() === "") {
      errors.direccion = "El campo Dirección es obligatorio.";
    }

    if (telefono.trim() === "") {
      errors.telefono = "El campo Teléfono es obligatorio.";
    } else if (telefono.trim().length !== 10) {
      errors.telefono =
        "El número de teléfono debe tener exactamente 10 dígitos.";
    }

    if (usuario.trim() === "") {
      errors.usuario = "El campo Usuario es obligatorio.";
    }

    if (contraseña.trim() === "") {
      errors.contraseña = "El campo Contraseña es obligatorio.";
    } else if (contraseña.trim().length < 6) {
      errors.contraseña = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (confirmarContraseña.trim() === "") {
      errors.confirmarContraseña = "Debes confirmar la contraseña.";
    } else if (contraseña.trim() !== confirmarContraseña.trim()) {
      errors.confirmarContraseña = "Las contraseñas no coinciden.";
    }

    if (rol === "") {
      errors.rol = "Debes seleccionar un rol.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    try {
      const registro = await axios.post(
        "http://localhost:3006/usuario/usuario",
        {
          nombre,
          apellido,
          direccion,
          telefono,
          usuario,
          contraseña,
          rol,
        }
      );
      console.log(registro.data.msg);
      if (registro.data.msg === "Usuario registrado") {
        Swal.fire({
          icon: "success",
          title: "Usuario Registrado",
        });
        setNombre("");
        setApellido("");
        setDireccion("");
        setTelefono("");
        setUsuario("");
        setContraseña("");
        setConfirmarContraseña("");
        setRol("");
        setErrorMessages({});
      } else if (registro.data.msg === "Usuario no registrado") {
        Swal.fire({
          icon: "success",
          title: "Usuario No Registrado",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Error",
      });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#CECECE",
        boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
      }}
      className="p-4 rounded-4 ms-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <h3>
              Datos personales <BiSolidUser />
            </h3>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />{" "}
              <div className="text-danger">{errorMessages.nombre}</div>
            </Form.Group>

            <Form.Group controlId="apellidos">
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tus apellidos"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
              <div className="text-danger">{errorMessages.apellidos}</div>
            </Form.Group>

            <Form.Group controlId="direccion">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
              <div className="text-danger"> {errorMessages.direccion}</div>
            </Form.Group>

            <Form.Group controlId="telefono">
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <div className="text-danger">{errorMessages.telefono}</div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <h3>
              Datos de acceso <BsFillHouseLockFill />
            </h3>
            <Form.Group controlId="usuario">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
              <div className="text-danger">{errorMessages.usuario}</div>
            </Form.Group>

            <Form.Group controlId="contrasena">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
              <div className="text-danger"> {errorMessages.contraseña}</div>
            </Form.Group>

            <Form.Group controlId="confirmarContrasena">
              <Form.Label>Confirmar contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
              />
              <div className="text-danger">
                {errorMessages.confirmarContraseña}
              </div>
            </Form.Group>

            <Form.Group controlId="rol">
              <Form.Label>Rol:</Form.Label>
              <Form.Control
                as="select"
                value={rol}
                onChange={(e) => setRol(e.target.value)}>
                <option value="">Selecciona un rol</option>
                <option value="Mesero">Mesero</option>
                <option value="Cocinero">Cocinero</option>
                <option value="Envios">Envios</option>
              </Form.Control>
              <div className="text-danger"> {errorMessages.rol}</div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <Button variant="dark" type="submit" className="mt-4" size="lg">
              Registrar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default RegistroCompleto;

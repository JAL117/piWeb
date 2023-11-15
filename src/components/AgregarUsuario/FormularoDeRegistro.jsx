import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { BiSolidUser } from "react-icons/bi";
import { BsFillHouseLockFill } from "react-icons/bs";

function RegistroCompleto() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [rol, setRol] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (nombre.trim() === "") {
      errors.nombre = "El campo Nombre es obligatorio.";
    }

    if (apellidos.trim() === "") {
      errors.apellidos = "El campo Apellidos es obligatorio.";
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

    if (contrasena.trim() === "") {
      errors.contrasena = "El campo Contraseña es obligatorio.";
    } else if (contrasena.trim().length < 6) {
      errors.contrasena = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (confirmarContrasena.trim() === "") {
      errors.confirmarContrasena = "Debes confirmar la contraseña.";
    } else if (contrasena.trim() !== confirmarContrasena.trim()) {
      errors.confirmarContrasena = "Las contraseñas no coinciden.";
    }

    if (rol === "") {
      errors.rol = "Debes seleccionar un rol.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessages(errors);
      return;
    }

    const registro = {
      nombre,
      apellidos,
      direccion,
      telefono,
      usuario,
      contrasena,
      rol,
    };

    // Saul o michi aquí pueden hacer la llamada a la API para enviar los datos del registro

    setNombre("");
    setApellidos("");
    setDireccion("");
    setTelefono("");
    setUsuario("");
    setContrasena("");
    setConfirmarContrasena("");
    setRol("");
    setErrorMessages({});
  };

  return (
    <div style={{ backgroundColor:'#ebeaeaf7' }} className="p-4 rounded-4 ms-5">
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
              /> <div className="text-danger">{errorMessages.nombre}</div>
            </Form.Group>

            <Form.Group controlId="apellidos">
              <Form.Label >Apellidos:</Form.Label>
              <Form.Control
            
              
                type="text"
                placeholder="Ingresa tus apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
              <div className="text-danger">{errorMessages.apellidos}</div>
              
            </Form.Group>

            <Form.Group controlId="direccion">
              <Form.Label >Dirección:</Form.Label>
              <Form.Control
            
              
                type="text"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
                 <div className="text-danger"> {errorMessages.direccion}</div>
             
            </Form.Group>

            <Form.Group controlId="telefono">
              <Form.Label >Teléfono:</Form.Label>
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
            <h3 >
              Datos de acceso <BsFillHouseLockFill />
            </h3>
            <Form.Group controlId="usuario">
              <Form.Label >Usuario:</Form.Label>
              <Form.Control
            
              
                type="text"
                placeholder="Ingresa tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
                 <div className="text-danger">{errorMessages.usuario}</div>
              
            </Form.Group>

            <Form.Group controlId="contrasena">
              <Form.Label >Contraseña:</Form.Label>
              <Form.Control
            
              
                type="password"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
                 <div className="text-danger"> {errorMessages.contrasena}</div>
             
            </Form.Group>

            <Form.Group controlId="confirmarContrasena">
              <Form.Label >
                Confirmar contraseña:
              </Form.Label>
              <Form.Control
           
              
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
              />
                 <div className="text-danger">{errorMessages.confirmarContrasena}</div>
              
            </Form.Group>

            <Form.Group controlId="rol">
              <Form.Label >Rol:</Form.Label>
              <Form.Control
            
              
                as="select"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="">Selecciona un rol</option>
                <option value="mesero">Mesera/o</option>
                <option value="cocinero">Cocinera/o</option>
                <option value="envios">Envios</option>
              </Form.Control>
              <div className="text-danger">     {errorMessages.rol}</div>
         
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

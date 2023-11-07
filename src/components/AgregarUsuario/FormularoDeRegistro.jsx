// Importaciones
import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { BiSolidUser } from "react-icons/bi";
import { BsFillHouseLockFill } from "react-icons/bs";

function RegistroCompleto() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [rol, setRol] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si los campos están completos
    if (
      nombre === '' ||
      apellidos === '' ||
      direccion === '' ||
      telefono === '' ||
      usuario === '' ||
      contrasena === '' ||
      confirmarContrasena === '' ||
      rol === ''
    ) {
      setShowAlert(true);
      return;
    }

    // Validar si las contraseñas coinciden
    if (contrasena !== confirmarContrasena) {
      setShowAlert(true);
      return;
    }

    // Enviar el registro
    const registro = {
      nombre,
      apellidos,
      direccion,
      telefono,
      usuario,
      contrasena,
      rol
    };

    // Aquí puedes hacer la llamada a tu API o ejecutar la lógica necesaria para enviar el registro

    // Reiniciar los campos
    setNombre('');
    setApellidos('');
    setDireccion('');
    setTelefono('');
    setUsuario('');
    setContrasena('');
    setConfirmarContrasena('');
    setRol('');
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          Por favor completa todos los campos y verifica que las contraseñas coincidan.
        </Alert>
      )}
      <Form onSubmit={handleSubmit} className="bg-danger p-4 text-white" style={{ borderRadius: "15px", boxShadow: "0px 10px 8px 0px rgba(0, 0, 0, 0.25)" , fontSize:'20px' }}>
        <Row>
          <Col md={6}>
            <h3>Datos personales <BiSolidUser /></h3>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="apellidos">
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tus apellidos"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="direccion">
              <Form.Label>Dirección:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="telefono">
              <Form.Label>Teléfono:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <h3>Datos de inicio de sesión <BsFillHouseLockFill /></h3>
            <Form.Group controlId="usuario">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="contrasena">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="confirmarContrasena">
              <Form.Label>Confirmar contraseña:</Form.Label>
              <Form.Control
               type="password"
                placeholder="Confirma tu contraseña"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="rol">
              <Form.Label>Rol:</Form.Label>
              <Form.Control
                as="select"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="">Selecciona un rol</option>
                <option value="administrador">Administrador</option>
                <option value="usuario">Usuario</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
}

export default RegistroCompleto;
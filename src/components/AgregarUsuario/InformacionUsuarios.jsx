import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/Registro.css'
import { BsFillHouseLockFill } from "react-icons/bs";

function RegistroForm() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario.
  };

  return (
    <div className='form_registro'>

    <Form onSubmit={handleSubmit} className='text-white'>
        <h3>Datos inicio de sesión <BsFillHouseLockFill/></h3>
      <Form.Group controlId="nombre">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="apellidos">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tus apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="telefono">
        <Form.Label>Confirmar contraseña:</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </Form.Group>

      
      <Button variant="primary mt-3" type="submit">
        Registrarse
      </Button>
    </Form>

    </div>

  );
}

export default RegistroForm;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../styles/Registro.css'
import { BiSolidUser ,  } from "react-icons/bi";

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
        <h3>Registro de usuario <BiSolidUser/></h3>
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

      <Form.Group controlId="telefono">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
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
          <option value="cocina">Cocina</option>
          <option value="mesero">Mesero</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary mt-3" type="submit">
        Registrarse
      </Button>
    </Form>

    </div>

  );
}

export default RegistroForm;

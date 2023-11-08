import React from 'react';
import FormularioDeRegistro from '../components/AgregarUsuario/FormularoDeRegistro';
import { Row, Col, Container } from 'react-bootstrap';

function AgregarUsuario() {
  return (
    <Container className="my-5 m-5">
   
          <FormularioDeRegistro />
    
   
    </Container>
  );
}

export default AgregarUsuario;

import React from 'react';
import FormularioDeRegistro from '../components/AgregarUsuario/FormularoDeRegistro';
import { Row, Col, Container } from 'react-bootstrap';
import Animaciones from '../components/utils/Animaciones';

function AgregarUsuario() {
  return (
    <Animaciones>

          <Container className="my-5 m-5">
   
          <FormularioDeRegistro />
    
   
    </Container>
    </Animaciones>

  );
}

export default AgregarUsuario;

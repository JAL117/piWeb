import React from 'react';
import FormularioDeRegistro from '../components/AgregarUsuario/FormularoDeRegistro';
import InformacionUsuarios from '../components/AgregarUsuario/InformacionUsuarios';
import { Row, Col, Container } from 'react-bootstrap';

function AgregarUsuario() {
  return (
    <Container className="align-items-center justify-content-center m-5">
      <Row>
        <Col sm={5}>
          <FormularioDeRegistro />
        </Col>
        <Col sm={5}>
          <InformacionUsuarios />
        </Col>
      </Row>
    </Container>
  );
}

export default AgregarUsuario;

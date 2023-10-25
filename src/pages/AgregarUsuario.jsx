import React from 'react';
import FormularioDeRegistro from '../components/AgregarUsuario/FormularoDeRegistro';
import InformaciónUsuarios from '../components/AgregarUsuario/InformacionUsuarios';
import { Row, Col, Container } from 'react-bootstrap';

function AgregarUsuario() {
  return (
    <Container className="my-5 m-5">
      <Row className="justify-content-center">
        <Col md={6} xs={11} className="mb-3">
          <FormularioDeRegistro />
        </Col>
        <Col md={6} xs={11} className="mb-3">
          <InformaciónUsuarios />
        </Col>
      </Row>
    </Container>
  );
}

export default AgregarUsuario;

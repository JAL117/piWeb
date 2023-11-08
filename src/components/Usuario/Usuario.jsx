import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TarjetaDatos({ nombre, direccion, telefono, rol }) {
  return (
    <Card className='bg-dark text-white rounded-4 p-4 ' style={{marginTop:'15%'}}>
      <Card.Body>
        <Card.Title className='display-4 mb-5'>Información Personal</Card.Title>
        <Row className='mt-5' style={{fontSize:'30px'}}>
          <Col md={6}>
            <strong>Nombre:</strong> {nombre}
          </Col>
          <Col md={6}>
            <strong>Dirección:</strong> {direccion}
          </Col>
        </Row>
        <Row className='mb-5' style={{fontSize:'30px'}}>
          <Col md={6}>
            <strong>Teléfono:</strong> {telefono}
          </Col>
          <Col md={6}>
            <strong>Rol:</strong> {rol}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default TarjetaDatos;

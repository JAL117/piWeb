import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import img1 from '../../img/Login.png';

function Login() {
  return (
    <Container fluid className='w-100'>
      <Row className='vh-100 text-white' style={{backgroundColor:'#100B0B'}}>
        <Col md={6} className="p-0">
          <img src={img1} alt="Imagen de fondo" className="img-fluid h-100 w-100" />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div className="w-75 mx-auto">
            <h2 className="text-center mb-4">Bienvenido</h2>
            <Form>
              <Form.Group controlId="formUsuario">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su usuario" />
              </Form.Group>
              <Form.Group controlId="formContrasena">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="danger" type="submit" className='mt-5'>
                  Iniciar sesión
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
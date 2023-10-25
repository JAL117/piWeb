import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#100b0bf7", margin:"0" }}>
      <Container>
        <Row className='m-5'>
          <Col lg={4} md={6} xs={12} className='mb-4'>
            <h5>Contacto</h5>
            <p>Dirección: Blvd. Real del Bosque 106, Real del Bosque, 29040 Tuxtla Gutiérrez, Chis.</p>
            <p>Teléfono: 961 1 507 341</p>
          </Col>
          <Col lg={4} md={6} xs={12} className='mb-4'>
            <h5>Horario de Atención</h5>
            <p>Lunes a Sábados: 4:00 PM - 12:00 AM</p>
          </Col>
          <Col lg={4} md={6} xs={12} className='mb-4'>
            <h5>Developers</h5>
            <p><FaGithub /> José Alberto Morales Solórzano</p>
            <p><FaGithub /> Michel Jovanny Vazquez Rodriguez</p>
            <p><FaGithub /> Jose Saul Gomez Caballero</p>
          </Col>
        </Row>
      </Container>
      <div className="text-white text-center py-3">
        &copy; {new Date().getFullYear()} ARDON - carnes && grill
      </div>
    </footer>
  );
};

export default Footer;

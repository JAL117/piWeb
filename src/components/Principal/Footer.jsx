import React from 'react';
import { Container, Row, Col, Nav  } from 'react-bootstrap';
import { FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <h5>Contacto</h5>
            <p>Dirección: Blvd. Real del Bosque 106, Real del Bosque, 29040 Tuxtla Gutiérrez, Chis.</p>
            <p>Teléfono: 961 1 507 341</p>
        
          </Col>
          <Col lg={4} md={6}>
            <h5>Horario de Atención</h5>
            <p>Lunes a Sábados: 4:00 PM - 12:00 AM</p>
      
          </Col>
          <Col lg={4} md={6} className='align-items-center'>
            <h5>Developers</h5>
            <p><FaGithub/>&nbsp;&nbsp;José Alberto Morales Solórzano</p>
            <p><FaGithub/>&nbsp;&nbsp;Michel Jovanny Vazquez Rodriguez</p>
            <p><FaGithub/>&nbsp;&nbsp;Jose Saul Gomez Caballero</p>
        
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} ARDON - carnes && grill
      </div>
    </footer>
  );
};

export default Footer;

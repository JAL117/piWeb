import React from 'react';
import { Container} from 'react-bootstrap';
import Orden from '../components/Sucursal/Sucursal';
import Animaciones from '../components/utils/Animaciones';

function Cocina() {
  return (
    <Animaciones>

      <Container>
     <Orden/>
    </Container>
    </Animaciones>
    
  );
}

export default Cocina;
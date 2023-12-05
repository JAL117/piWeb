import React from 'react';
import { Container} from 'react-bootstrap';
import Orden from '../components/Sucursal/MapeoCards';
import Animaciones from '../components/utils/Animaciones';
import Messages from '../components/Domicilio/Chat/Messages';

function Cocina() {
  return (
    <Animaciones>

      <Container>
        <Messages />
     <Orden/>
    </Container>
    </Animaciones>
    
  );
}

export default Cocina;
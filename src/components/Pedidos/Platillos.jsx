import React from 'react';
import { Button } from 'react-bootstrap';

const PlatillosComponent = ({ platillos, platoSeleccionado, handlePlatoSeleccionado }) => {
  return (
    <div>
      <h4>Platillos</h4>
      {platillos.map((plato) => (
        <Button
          key={plato}
          variant={platoSeleccionado === plato ? 'primary' : 'outline-primary'}
          onClick={() => handlePlatoSeleccionado(plato)}
        >
          {plato}
        </Button>
      ))}
    </div>
  );
};

export default PlatillosComponent;
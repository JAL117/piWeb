import React from 'react';
import { Button } from 'react-bootstrap';

const Categorias = ({ categorias, categoriaSeleccionada, handleCategoriaSeleccionada }) => {
  return (
    <div>
      <h4>Categorías</h4>
      {categorias.map((categoria) => (
        <Button
          key={categoria}
          variant={categoriaSeleccionada === categoria ? 'primary' : 'outline-primary'}
          onClick={() => handleCategoriaSeleccionada(categoria)}
        >
          {categoria}
        </Button>
      ))}
    </div>
  );
};

export default Categorias;
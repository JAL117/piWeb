import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import CategoriasComponent from './Categorias';
import PlatillosComponent from './Platillos';
import Comanda from './Comanda'

const Pedido = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [platoSeleccionado, setPlatoSeleccionado] = useState('');
  const [numeroPedido, setNumeroPedido] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('sucursal');
  const [numeroMesa, setNumeroMesa] = useState('');
  const [direccion, setDireccion] = useState('');
  const [referencia, setReferencia] = useState('');
  const [notas, setNotas] = useState('');
  const [resumenPedido, setResumenPedido] = useState('');

  const categorias = ['tacos', 'tlayudas', 'bebidas'];
  const tacos = ['taco asada', 'taco al pastor']; // Ejemplo de platillos de tacos
  const tlayudas=['tlayuda grande asada']

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    setPlatoSeleccionado('');
  };

  const handlePlatoSeleccionado = (plato) => {
    setPlatoSeleccionado(plato);
  };

  const handleTipoEntregaChange = (event) => {
    setTipoEntrega(event.target.value);
  };

  const handleEnviarPedido = () => {
    // Aquí puedes implementar la lógica para enviar el pedido
    // y realizar las acciones necesarias con los datos ingresados
    // antes de enviarlos al servidor.
  };

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <CategoriasComponent
            categorias={categorias}
            categoriaSeleccionada={categoriaSeleccionada}
            handleCategoriaSeleccionada={handleCategoriaSeleccionada}
          />
        </Col>
        <Col sm={4}>
          {categoriaSeleccionada === 'tacos' && (
            <PlatillosComponent
              platillos={tacos}
              platoSeleccionado={platoSeleccionado}
              handlePlatoSeleccionado={handlePlatoSeleccionado}
            />
          )}
         
        </Col>
        <Col sm={4}>
         <Comanda/>
         
        </Col>
      </Row>
    </Container>
  );
};

export default Pedido;
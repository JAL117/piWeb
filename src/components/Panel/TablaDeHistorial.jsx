import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

const TablaHistorial = () => {
  const [searchDate, setSearchDate] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchDate(e.target.value);
    // Saul aca te dejo donde podrías realizar la lógica de búsqueda 
   
  };

  return (
    <div className='mt-5 p-1'>
        <h1>Historial de Pedidos</h1>
      <Form.Group controlId="searchForm">
        <Form.Label>Buscar por fecha:</Form.Label>
        <Form.Control type="date" value={searchDate} onChange={handleSearchChange} />
      </Form.Group>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Total del pedido</th>
            <th>Tipo de envio</th>
            <th>Nombre del cliente</th>
            <th>Productos</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result) => (
            <tr key={result.id}>
              <td>{result.fecha}</td>
              <td>{result.totalPedido}</td>
              <td>{result.tipoEnvio}</td>
              <td>{result.nombreCliente}</td>
              <td>{result.productos}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaHistorial;
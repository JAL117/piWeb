import React, { useState, useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const TablaHistorial = () => {
  const [searchDate, setSearchDate] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [total, setTotal] = useState(0);

  const handleSearchChange = (e) => {
    setSearchDate(e.target.value);
  };

  const result = async () => {
    try {
      const fechaFormateada = formatearFecha(searchDate);
      const response = await axios.get(
        apiUrl+`pedidos/tabla/${fechaFormateada}`
      );

      setSearchResults(response.data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const año = date.getFullYear();
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const dia = String(date.getDate() + 1).padStart(2, "0");
    const fechaFormateada = `${año}-${mes}-${dia}`;

    return fechaFormateada;
  };

  useEffect(() => {
    if (searchDate !== "") {
      result();
    }
  }, [searchDate]);
  useEffect(() => {
    if (Array.isArray(searchResults) && searchResults.length > 0) {
      const valor = searchResults.reduce((acumulador, pedido) => {
        return acumulador + pedido.total;
      }, 0);
      setTotal(valor);
    } else {
      setTotal(0);
    }
  }, [searchResults]);

  const formatDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

  return (
    <div className="mt-5 p-1">
      <div className="mt-4"  style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Historial de Pedidos</h1>
        {Array.isArray(searchResults) && searchResults.length > 0 ? (
          <>
            <h3 className="text-center">
              Total de venta en esta fecha: ${total}
            </h3>
          </>
        ) : null}
      </div>
      <Form.Group controlId="searchForm">
        <Form.Label>Buscar por fecha:</Form.Label>
        <Form.Control
          type="date"
          value={searchDate}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Total del pedido</th>
            <th>Envio</th>
            <th>Nombre del cliente</th>
            <th>Productos</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(searchResults) && searchResults.length > 0 ? (
            searchResults.map((result) => (
              <tr key={result._id}>
                <td>{formatDate(result.fecha)}</td>
                <td>${result.total}</td>
                <td>{result.envio === true ? "si" : "no"}</td>
                <td>{result.cliente ? result.cliente : "NA"}</td>
                <td style={{ overflow: "auto" }}>
                  {result.productos.map((producto) => (
                    <div key={producto._id}>
                      {producto.producto} - Cantidad: {producto.cantidad}
                    </div>
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay resultados</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaHistorial;

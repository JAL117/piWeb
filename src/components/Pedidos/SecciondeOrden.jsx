import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function OrderSection() {
  const [mesa, setMesa] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [nota, setNota] = useState("");
  const [numeroOrden, setNumeroOrden] = useState(1);

  const handleMesaChange = (event) => {
    setMesa(event.target.value);
  };

  const handlePedidoAdd = (alimento) => {
    setPedidos([...pedidos, alimento]);
  };

  const handleNotaChange = (event) => {
    setNota(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!mesa || !pedidos.length) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos antes de enviar el pedido.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Pedido enviado",
      text: "El pedido ha sido enviado correctamente.",
    });

    setNumeroOrden(numeroOrden + 1);
    setMesa("");
    setPedidos([]);
    setNota("");
  };

  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Orden #{numeroOrden}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mesa">
          <Form.Label>Número de Mesa</Form.Label>
          <Form.Control type="text" value={mesa} onChange={handleMesaChange} />
        </Form.Group>
        <Form.Group controlId="nota">
          <Form.Label>Nota</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={nota}
            onChange={handleNotaChange}
          />
        </Form.Group>
        <div>
          {pedidos.length > 0 ? (
            <ul>
              {pedidos.map((pedido, index) => (
                <li key={index}>{pedido}</li>
              ))}
            </ul>
          ) : (
            <p>No hay pedidos agregados.</p>
          )}
        </div>
        <Button variant="primary" type="submit">
          Enviar Pedido
        </Button>
      </Form>
    </div>
  );
}

export default OrderSection;
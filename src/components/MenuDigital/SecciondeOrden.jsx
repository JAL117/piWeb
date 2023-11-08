import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

function OrderSection() {
  const [mesa, setMesa] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [nota, setNota] = useState("");
  const [direccion, setDireccion] = useState("");
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

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de campos
    if (!mesa || !pedidos.length || !direccion) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor, complete todos los campos antes de enviar el pedido.",
      });
      return;
    }

    // Validación de cobro
    // Aquí puedes agregar tu lógica de validación de cobro del pedido
    const cobroValido = true; // Reemplaza esto con tu lógica de validación de cobro
    if (!cobroValido) {
      Swal.fire({
        icon: "error",
        title: "Cobro inválido",
        text: "El cobro del pedido no es válido. Por favor, verifique.",
      });
      return;
    }

    // Envío del pedido
    Swal.fire({
      icon: "success",
      title: "Pedido enviado",
      text: "El pedido ha sido enviado correctamente.",
    });

    // Incremento del número de orden
    setNumeroOrden(numeroOrden + 1);

    // Reinicio de los valores en el estado
    setMesa("");
    setPedidos([]);
    setNota("");
    setDireccion("");
  };

  return (
    <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(209, 35, 35, 0.28)", fontSize: "20px" }}>
      <h2>Orden #{numeroOrden}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="mesa">
          <Form.Label>Número de Mesa</Form.Label>
          <Form.Control type="text" value={mesa} onChange={handleMesaChange} />
        </Form.Group>
        <Form.Group controlId="nota">
          <Form.Label>Nota</Form.Label>
          <Form.Control as="textarea" rows={3} value={nota} onChange={handleNotaChange} />
        </Form.Group>
        <Form.Group controlId="direccion">
          <Form.Label>Dirección de Entrega</Form.Label>
          <Form.Control type="text" value={direccion} onChange={handleDireccionChange} />
        </Form.Group>
        <h4>Pedidos:</h4>
        <Form.Group controlId="pedidos">
          <Form.Control
            as="textarea"
            rows={3}
            value={pedidos.map((pedido) => pedido.nombre).join("\n")}
            disabled
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="mt-3">
          Enviar Pedido
        </Button>
      </Form>
    </div>
  );
}

export default OrderSection;
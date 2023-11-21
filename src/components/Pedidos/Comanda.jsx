import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";


const Comanda = (pedidos, cantidadPedidos) => {
  const [numeroPedido, setNumeroPedido] = useState("");
  const [tipoEntrega, setTipoEntrega] = useState("sucursal");
  const [numeroMesa, setNumeroMesa] = useState("");
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [notas, setNotas] = useState("");
  const [productos, setProductos] = useState([]);

  const pedi2 = () => {
    setProductos(pedidos.pedidos);
  };
  console.log(pedidos);
  console.log(pedidos.pedidos);
  useEffect(() => { 
    pedi2();
  }, [pedidos])
  const handleNumeroPedidoChange = (event) => {
    setNumeroPedido(event.target.value);
  };

  const handleTipoEntregaChange = (event) => {
    setTipoEntrega(event.target.value);
  };

  const handleNumeroMesaChange = (event) => {
    setNumeroMesa(event.target.value);
  };

  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleReferenciaChange = (event) => {
    setReferencia(event.target.value);
  };

  const handleNotasChange = (event) => {
    setNotas(event.target.value);
  };

  const handleEnviarPedido = () => {
    console.log("Pedido enviado");
  };

  return (
    <Container>
      <div className="d-flex justify-content-end mt-1">
        <div
          className="p-3 rounded-3"
          style={{ backgroundColor: "rgba(209, 35, 35, 0.2)", width: "400px" }}
        >
          <h4 className="text-center">Comanda</h4>
          <Form className="m-2">
            <Form.Group controlId="numeroPedido">
              <Form.Label>Número de Pedido:</Form.Label>
            </Form.Group>

            <Form.Group controlId="tipoEntrega">
              <Form.Label>Selecciona tipo de Entrega:</Form.Label>
              <Form.Control
                as="select"
                value={tipoEntrega}
                onChange={handleTipoEntregaChange}
              >
                <option value="sucursal">Sucursal</option>
                <option value="domicilio">Domicilio</option>
              </Form.Control>
            </Form.Group>

            {tipoEntrega === "sucursal" && (
              <Form.Group controlId="numeroMesa">
                <Form.Label>Número de Mesa:</Form.Label>
                <Form.Control
                  type="text"
                  value={numeroMesa}
                  onChange={handleNumeroMesaChange}
                />
              </Form.Group>
            )}
            {tipoEntrega === "domicilio" && (
              <>
                <Form.Group controlId="direccion">
                  <Form.Label>Dirección:</Form.Label>
                  <Form.Control
                    type="text"
                    value={direccion}
                    onChange={handleDireccionChange}
                  />
                </Form.Group>

                <Form.Group controlId="referencia">
                  <Form.Label>Referencia:</Form.Label>
                  <Form.Control
                    type="text"
                    value={referencia}
                    onChange={handleReferenciaChange}
                  />
                </Form.Group>
              </>
            )}

            <Form.Group controlId="notas">
              <Form.Label>Notas:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notas}
                onChange={handleNotasChange}
              />
            </Form.Group>
            <Form.Group controlId="pedido">
              <Form.Label>Pedido:</Form.Label>
              <div
                as="textarea"
                rows={3}
                style={{
                  color: "black",
                  width: "100%",
                  height: "100px",
                  backgroundColor: "white",
                }}
              >
                {pedidos.pedidos.map((producto, i) => {
                  <>
                    <p key={i} value={producto.nombre}>
                      {producto.nombre},
                      {console.log(producto.nombre)}
                    </p>
                  </>;
                })}
              </div>
            </Form.Group>

            <div className="text-center">
              <Button
                type="button"
                variant="success"
                className="mt-4"
                onClick={pedi2}
              >
                <BsFillSendFill size={20} /> Enviar Pedido
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Comanda;

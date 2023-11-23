import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { BsFillSendFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { GrMap } from "react-icons/gr";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";

const Comanda = (pedidos) => {
  const [tipoEntrega, setTipoEntrega] = useState("sucursal");
  const [numeroMesa, setNumeroMesa] = useState(0);
  const [direccion, setDireccion] = useState("");
  const [referencia, setReferencia] = useState("");
  const [notas, setNotas] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let long = pedidos.pedidos.length;
    let valor = 0;
    try {
      if (long) {
        for (let i = 0; i < long; i++) {
          valor += Number(
            pedidos.pedidos[i].precio * pedidos.pedidos[i].cantidad
          );
        }
        setTotal(valor);
        console.log(valor);
      }
    } catch (error) {
      console.log(error);
    }
  }, [pedidos]);

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

  const handleEnviarPedido = async (event) => {
    event.preventDefault();
    let envio = tipoEntrega === "sucursal" ? false : true;
    if (pedidos.pedidos.length <= 0) {
      Swal.fire({
        title: "Sin pedidos",
        text: "No tiene ningun producto seleccionado en su pedido",
        icon: "error",
      });
    } else {
      const result = await axios
        .post("http://localhost:3006/pedidos/pedidos", {
          mesa: numeroMesa,
          total: total,
          envio: envio,
          direccion: direccion,
          cliente: referencia,
          productos: pedidos.pedidos,
          nota: notas,
          estatus:"pendiente",
          cocina:false
        })
        .then((data) => {
          pedidos.pedidos.splice(0, pedidos.pedidos.length);
          setDireccion("");
          setNotas("");
          setTotal("");
          setNumeroMesa(0);
          setReferencia("");
          Swal.fire("Pedido enviado con exito", "Enviado");
          console.log(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-end mt-1">
        <div
          className="p-3 rounded-3"
          style={{ backgroundColor: "rgba(209, 35, 35, 0.2)", width: "400px" }}
        >
          <h4 className="text-center">Comanda</h4>
          <Form className="m-2" onSubmit={handleEnviarPedido}>
            <Form.Group controlId="numeroPedido"></Form.Group>
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
              <Form.Group controlId="numeroMesa" className="mt-2">
                <Form.Label><MdTableBar/> Número de Mesa:</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  max={15}
                  value={numeroMesa}
                  required
                  onChange={handleNumeroMesaChange}
                />
              </Form.Group>
            )}
            {tipoEntrega === "domicilio" && (
              <>
                <Form.Group controlId="referencia" className="mt-2">
                  <Form.Label><MdDriveFileRenameOutline/> Nombre de Cliente:</Form.Label>
                  <Form.Control
                    type="text"
                    value={referencia}
                    required
                    onChange={handleReferenciaChange}
                  />
                </Form.Group>
                <Form.Group controlId="direccion">
                  <Form.Label><GrMap/> Dirección: </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={direccion}
                    onChange={handleDireccionChange}
                  />
                </Form.Group>
              </>
            )}

            <Form.Group controlId="notas">
              <Form.Label><MdEditSquare/> Notas:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={notas}
                onChange={handleNotasChange}
              />
            </Form.Group>
            <Form.Group controlId="pedido">
              <Form.Label><MdFoodBank/> Pedido:</Form.Label>
              <div
                style={{
                  color: "black",
                  width: "100%",
                  height: "100px",
                  backgroundColor: "white",
                  overflow: "auto",
                }}
              >
                {pedidos.pedidos.length > 0 ? (
                  pedidos.pedidos.map((pedido, i) => (
                    <>
                      <p key={i} value={pedido.producto}>
                        {pedido.producto +
                          "  " +
                          pedido.cantidad +
                          "pz  $" +
                          pedido.precio}
                        c/u
                      </p>
                    </>
                  ))
                ) : (
                  <center>
                    <h4 style={{ marginTop: "40px" }}>Sin pedidos</h4>
                  </center>
                )}
              </div>
            </Form.Group>

            <div
              className="text-center"
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Button type="submit" variant="success" className="mt-4">
                <BsFillSendFill size={20} /> Enviar Pedido
              </Button>
              <span
                style={{
                  backgroundColor: "red",
                  marginLeft: "15px",
                  width: "100px",
                  height: "40px",
                  borderRadius: "5px",
                  color: "white",
                  textAlign: "center",
                  padding: "5px",
                }}
              >
                Total: ${total}
              </span>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Comanda;

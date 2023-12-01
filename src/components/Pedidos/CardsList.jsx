import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFillCartCheckFill } from "react-icons/bs";
import Animaciones from "../utils/Animaciones";
import Swal from "sweetalert2";

function CardList({ alimentos, categoriaActual, onEnviarPedido }) {
  const alimentosFiltrados =
    categoriaActual !== "todos"
      ? alimentos[0].filter(
          (alimento) => alimento.categoria === categoriaActual
        )
      : alimentos;

  const [total, setTotal] = useState([]);
  const [pedidos, setPedido] = useState([]);

  useEffect(() => onEnviarPedido(pedidos), [pedidos]);
  const handleEnviar = (alimento) => {
    let bandera = false;
    let ini = 0;
    const buscar = pedidos.find(
      (pedido) => pedido.producto === alimento.nombre
    );
    if (buscar) {
      bandera = true;
      ini = buscar.cantidad;
    }
    Swal.fire({
      titleText: alimento.nombre + "   $" + alimento.precio,
      text: "Ingrese la cantidad",
      input: "number",
      inputAttributes: {
        min: 0,
        max: 50,
        value: { ini },
        typeof: "number",
      },
      inputValue: ini,
      showCancelButton: true,
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed && result.value>0) {
        const cantidad = result.value;
        if (isNaN(cantidad) || cantidad < 0 || cantidad > 50) {
        Swal.showValidationMessage(
          "Cantidad inválida",
          "Ingrese una cantidad válida."
        );
        } else {
          if (bandera) {
            const newPedido = pedidos.map((pedido) => {
              if (pedido.producto === buscar.producto) {
                return { ...pedido, cantidad: cantidad };
              }
              return pedido;
            });
            setPedido(newPedido);
            Swal.fire("Cantidad enviada", `Cantidad: ${cantidad}`, "success");
          } else {
            Swal.fire("Cantidad enviada", `Cantidad: ${cantidad}`, "success");
            setTotal(total + cantidad * alimento.precio);
            let ord = {
              producto: alimento.nombre,
              precio: alimento.precio,
              cantidad: cantidad,
              categoria: categoriaActual
            };
            setPedido([...pedidos, ord]);
          }
        }
      }
    });
    console.log(pedidos);
    onEnviarPedido(pedidos);
  };
  return (
    <Row className="g-2 p-2 mt-2">
      {alimentosFiltrados.length > 0 ? (
        alimentosFiltrados.map((alimento) => (
          <Col key={alimento.id} xs={12} sm={6} md={4} lg={4}>
            <Animaciones>
              <Card
                style={{
                  backgroundColor: "rgba(209, 35, 35, 0.1)",
                  boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
                }}>
                <Card.Body className="d-flex justify-content-around">
                  <div>
                    <Card.Title>
                      {alimento.nombre}&nbsp; ${alimento.precio}
                    </Card.Title>
                  </div>
                  <Button
                    variant="success"
                    className="ms-2 mt-2"
                    style={{ height: "50%" }}
                    onClick={() => handleEnviar(alimento)}>
                    <BsFillCartCheckFill size={20} /> Añadir
                  </Button>
                </Card.Body>
              </Card>
            </Animaciones>
          </Col>
        ))
      ) : (
        <h3>No hay platillos registrados.</h3>
      )}
    </Row>
  );
}

export default CardList;

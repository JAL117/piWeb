import React from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import "animate.css";
import io from "socket.io-client"
const apiUrl = import.meta.env.VITE_API_URL;

const socket = io(apiUrl);
function OrderCard({ order, index, pedidos }) {
  if (!order) {
    return null;
  }

  const { _id, fecha, nota, productos } = order;
  const formatDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

  const confirmarEntrega = async () => {
    try {
      await axios
        .put(apiUrl+`pedidos/cocinaStatus`, {
          cocina: true,
          id: _id,
        })
        .then((data) => {
          console.log(data.data);
          Swal.fire({
            position: "center",
            title: "Pedido realizado",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
          pedidos();
          socket.emit('message', "domicilio");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="card text-center"
      style={{
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
      }}>
      <div className="card-body">
        <h5 className="card-title">Orden #{index + 1}</h5>
        <p className="card-text">Fecha del pedido: {formatDate(fecha)}</p>
        <h5>Productos:</h5>
        <textarea
          className="form-control text-center"
          style={{ height: "15vh" }}
          value={productos
            .map((producto, i) => `${producto.producto} ${producto.cantidad}`)
            .join("\n")}
          readOnly
        />
        <p className="card-text mt-2">Notas: {nota}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-danger mx-1" onClick={confirmarEntrega}>
          <BsClipboard2CheckFill size={25} />
        </button>
      </div>
    </div>
  );
}

function getProductosText(order) {
  const { productos } = order;
  return productos
    .map((producto) => `${producto.nombre} - ${producto.cantidad}`)
    .join("\n");
}

export default OrderCard;

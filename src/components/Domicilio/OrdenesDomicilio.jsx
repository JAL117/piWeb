import React from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";

function OrderCard({ order, index }) {
  if (!order) {
    return null;
  }
console.log(order, index);
  const { _id, total, envio, direccion, cliente, fecha, nota, productos } = order;

  return (
    <div
      className="card text-center"
      style={{ backgroundColor: "rgba(0, 128, 0, 0.2)",  boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="card-body">
        <h5 className="card-title">Orden #{index + 1}</h5>
        <p className="card-text">Fecha del pedido: {fecha}</p>
        <h5>Productos:</h5>
        <textarea
          className="form-control text-center"
          value={getProductosText(order)}
          readOnly
        />
        <p className="card-text">Notas: {nota}</p>
        <p className="card-text">Total a pagar: ${total}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-success  mx-1">
          <FaAddressCard size={25} />
        </button>

        <button className="btn btn-danger mx-1">
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

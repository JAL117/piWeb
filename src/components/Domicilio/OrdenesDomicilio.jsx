import React from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";

function OrderCard({ order }) {
  if (!order) {
    return null;
  }

  const { numeroPedido, numeroMesa, notas, totalAPagar } = order;

  return (
    <div
      className="card text-center"
      style={{ backgroundColor: "rgba(0, 128, 0, 0.2)",  boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="card-body">
        <h5 className="card-title">Orden #{numeroPedido}</h5>
        <p className="card-text">Número de mesa: {numeroMesa}</p>
        <h5>Productos:</h5>
        <textarea
          className="form-control text-center"
          value={getProductosText(order)}
          readOnly
        />
        <p className="card-text">Notas: {notas}</p>
        <p className="card-text">Total a pagar: ${totalAPagar}</p>
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

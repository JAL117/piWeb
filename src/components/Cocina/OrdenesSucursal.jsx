import React from 'react';
import { BsClipboard2CheckFill } from 'react-icons/bs';
import { MdEditSquare, MdDeleteForever } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';

function OrderCard({ order }) {
  if (!order) {
    return null;
  }

  const { numeroPedido, numeroMesa, notas, totalAPagar, aDomicilio } = order;

  const cardStyle = {
    backgroundColor: aDomicilio ? 'rgba(0, 128, 0, 0.28)' : 'rgba(209, 35, 35, 0.28)',
    fontSize: '20px'
  };

  return (
    <div className="card p-2 m-1" style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title">Orden #{numeroPedido}</h5>
        <p className="card-text">Número de mesa: {numeroMesa}</p>
        <h5>Productos:</h5>
        <textarea className="form-control" value={getProductosText(order)} readOnly style={{ fontSize: '20px' }} />
        <p className="card-text">Notas: {notas}</p>
        <p className="card-text">Total a pagar: ${totalAPagar}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary"><MdEditSquare /></button>
        <button className="btn btn-success m-1"><GiReceiveMoney /></button>
        <button className="btn btn-danger m-1"><BsClipboard2CheckFill /></button>
        <button className="btn btn-warning m-1"><MdDeleteForever /></button>
      </div>
    </div>
  );
}

function getProductosText(order) {
  const { productos } = order;
  return productos.map((producto) => `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}`).join('\n');
}

export default OrderCard;
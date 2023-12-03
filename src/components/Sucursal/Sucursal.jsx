import React, { useState, useEffect } from "react";
import OrderCard from "./OrdenesSucursal";
import axios from "axios";
import io from "socket.io-client";
import Swal from "sweetalert2";

const socket = io("http://localhost:3006");

function OrdersList() {
  const [ordenes, setOrdenes] = useState([]);

  const pedidos = async () => {
    try {
      const response = await axios.get("http://localhost:3006/pedidos/local");
      setOrdenes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pedidos();
    socket.on("pedidoEnviado", () => {
      console.log("pedido Enviado");
      const lastOrder = ordenes[ordenes.length - 1];
      if (lastOrder) {
        Swal.fire({
          title: "Pedido realizado en cocina",
          text: `Para mesa #${lastOrder.mesa}`,
          icon: "success",
        });
      }
    });
  }, [ordenes]); 

  return (
    <>
      <h1>Sucursal</h1>
      <div className="row  row-cols-lg-3">
        {ordenes.map((order, index) => (
          <div className="col mb-1" key={index}>
            <OrderCard
              order={order}
              index={index}
              pedidos={pedidos}
              orderId={order._id}
              mesa={order.mesa}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default OrdersList;

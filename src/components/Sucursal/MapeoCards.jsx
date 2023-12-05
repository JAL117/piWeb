import React, { useState, useEffect } from "react";
import OrderCard from "./CardOrdenesSucursal";
import axios from "axios";
import io from "socket.io-client";
import Swal from "sweetalert2";
const apiUrl = import.meta.env.VITE_API_URL;

const socket = io(apiUrl);

function OrdersList() {
  const [ordenes, setOrdenes] = useState([]);

  const pedidos = async () => {
    try {
      const response = await axios.get(apiUrl+"pedidos/local");
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

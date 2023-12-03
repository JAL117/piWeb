import React, { useState, useEffect } from "react";
import OrderCard from "./OrdenesSucursal";
import axios from "axios";
import io from "socket.io-client"
import Swal from "sweetalert2";

const socket = io("http://localhost:3006");
function OrdersList() {
  const [ordenes, setOrdenes] = useState([]);

  const pedidos = async () => {
    await axios
      .get("http://localhost:3006/pedidos/local")
      .then((data) => {
        setOrdenes(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    pedidos();
    socket.on("pedidoEnviado", () =>{
      console.log("pedido Enviado");
      Swal.fire({
        title: "Pedido completado en cocina",
        text: "Completado pedido para mesa #",
        icon: "succes",
      })
    })
  }, []);

  return (
    <>
      <h1>Sucursal</h1>
      <div className="row  row-cols-lg-3">
        {ordenes.map((order, index) => (
          <div className="col mb-1" key={index}>
            <OrderCard order={order} index={index} pedidos={pedidos} />
          </div>
        ))}
      </div>
    </>
  );
}

export default OrdersList;

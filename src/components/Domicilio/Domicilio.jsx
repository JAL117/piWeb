import React, { useState, useEffect } from "react";
import OrderCard from "./OrdenesDomicilio";
import axios from "axios";
import io from "socket.io-client";
import Swal from "sweetalert2";

const socket = io("http://localhost:3006");


function OrdersList() {
  const [ordenes, setOrdenes] = useState([]);

  const pedidos = async () =>{
    await axios.get("http://localhost:3006/pedidos/envios").then((data) =>{
      setOrdenes(data.data)
    }).catch((error) =>{
      console.log(error);
    })
  } 
  useEffect(() =>{
    pedidos()
    socket.on("domicilioEnviado", () => {
      console.log("pedido Enviado");
      const lastOrder = ordenes[ordenes.length - 1];
      if (lastOrder) {
        Swal.fire({
          title: "Pedido finalizado en cocina",
          icon: "success",
        });
      }
    });
  },[ordenes])


  return (
    <>
      <h1>A domicilio</h1>
      <div className="row row-cols-lg-3">
        {ordenes.map((order, index) => (
          <div className="col mb-1" key={index}>
            <OrderCard 
            order={order} 
            index={index}
            pedidos={pedidos} />
          </div>
        ))}
      </div>
    </>
  );
}

export default OrdersList;

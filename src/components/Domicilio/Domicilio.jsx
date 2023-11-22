import React, { useState, useEffect } from "react";
import OrderCard from "./OrdenesDomicilio";
import axios from "axios";

function OrdersList() {
  const [ordenes, setOrdenes] = useState([]);

  const pedidos = async () =>{
    await axios.get("http://localhost:3006/pedidos/envios").then((data) =>{
      setOrdenes(data.data)
    }).catch((error) =>{
      console.log(error);
    })
  } 

  console.log(ordenes);
  useEffect(() =>{
    pedidos()
  },[])
  const orders = [
    {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: "Taco", cantidad: 2, precio: 10 },
        { nombre: "Refresco", cantidad: 4, precio: 2 },
      ],
      notas: "Sin salsa picante",
      totalAPagar: 28,
      aDomicilio: true,
    },
    {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: "Taco", cantidad: 2, precio: 10 },
        { nombre: "Refresco", cantidad: 4, precio: 2 },
      ],
      notas: "Sin salsa picante",
      totalAPagar: 28,
      aDomicilio: true,
    },
    {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: "Pizza", cantidad: 2, precio: 10 },
        { nombre: "Refresco", cantidad: 4, precio: 2 },
      ],
      notas: "Sin salsa picante",
      totalAPagar: 28,
      aDomicilio: true,
    },
    {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: "Pizza", cantidad: 2, precio: 10 },
        { nombre: "Refresco", cantidad: 4, precio: 2 },
      ],
      notas: "Sin salsa picante",
      totalAPagar: 28,
      aDomicilio: true,
    },
  ];

  return (
    <>
      <h1>A domicilio</h1>
      <div className="row row-cols-lg-3">
        {ordenes.map((order, index) => (
          <div className="col mb-1" key={index}>
            <OrderCard order={order} i={index}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrdersList;

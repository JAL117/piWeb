import React from 'react';
import OrderCard from './CardsDomicilio';

function OrdersList() {
  const orders = [
    {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: 'Pizza', cantidad: 2, precio: 10 },
        { nombre: 'Refresco', cantidad: 4, precio: 2 },
      ],
      notas: 'Sin salsa picante',
      totalAPagar: 28,
   
    },
    {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: 'Pizza', cantidad: 2, precio: 10 },
        { nombre: 'Refresco', cantidad: 4, precio: 2 },
      ],
      notas: 'Sin salsa picante',
      totalAPagar: 28,

    },   {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: 'Pizza', cantidad: 2, precio: 10 },
        { nombre: 'Refresco', cantidad: 4, precio: 2 },
      ],
      notas: 'Sin salsa picante',
      totalAPagar: 28,

    },   {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: 'Pizza', cantidad: 2, precio: 10 },
        { nombre: 'Refresco', cantidad: 4, precio: 2 },
      ],
      notas: 'Sin salsa picante',
      totalAPagar: 28,

    },
  ];

  return (  
     <>
     <h1>A domicilio</h1>
    <div className="row row-cols-lg-2">
    
      {orders.map((order, index) => (
        <div className="col mb-1" key={index}>
          <OrderCard order={order} />
        </div>
      ))}
    </div>
     </>
    
  );
}

export default OrdersList;
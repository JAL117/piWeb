import React from 'react';
import OrderCard from './OrdenesDomicilio';

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
      aDomicilio: true,
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
      aDomicilio: true, 
    },   {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: 'Pizza', cantidad: 2, precio: 10 },
        { nombre: 'Refresco', cantidad: 4, precio: 2 },
      ],
      notas: 'Sin salsa picante',
      totalAPagar: 28,
      aDomicilio: true, 
    },   {
      numeroPedido: 1,
      numeroMesa: 4,
      productos: [
        { nombre: 'Pizza', cantidad: 2, precio: 10 },
        { nombre: 'Refresco', cantidad: 4, precio: 2 },
      ],
      notas: 'Sin salsa picante',
      totalAPagar: 28,
      aDomicilio: true, 
    },
  ];

  return (  
     <>
     <h1>A domicilio</h1>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-4">
    
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
import React from 'react';
import OrderCard from './Ordenes';

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
      numeroPedido: 2,
      numeroMesa: 2,
      productos: [
        { nombre: 'Tlayuda de asada', cantidad: 1, precio: 8 },
        { nombre: 'Papas fritas', cantidad: 1, precio: 4 },
        { nombre: 'Refresco', cantidad: 2, precio: 2 },
        { nombre: 'Hamburguesa', cantidad: 1, precio: 8 },
        { nombre: 'Papas fritas', cantidad: 1, precio: 4 },
        { nombre: 'Refresco', cantidad: 2, precio: 2 },
      ],
      notas: '',
      totalAPagar: 16,
    },   {
      numeroPedido: 3,
      numeroMesa: 2,
      productos: [
        { nombre: 'Hamburguesa', cantidad: 1, precio: 8 },
        { nombre: 'Papas fritas', cantidad: 1, precio: 4 },
        { nombre: 'Refresco', cantidad: 2, precio: 2 },
      ],
      notas: '',
      totalAPagar: 16,
    },   {
      numeroPedido: 4,
      numeroMesa: 2,
      productos: [
        { nombre: 'Hamburguesa', cantidad: 1, precio: 8 },
        { nombre: 'Papas fritas', cantidad: 1, precio: 4 },
        { nombre: 'Refresco', cantidad: 2, precio: 2 },
      ],
      notas: '',
      totalAPagar: 16,
    },
   
  ];

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-3 ms-1">
      {orders.map((order, index) => (
        <div className="col mb-1" key={index}>
          <OrderCard order={order} />
        </div>
      ))}
    </div>
  );
}

export default OrdersList;


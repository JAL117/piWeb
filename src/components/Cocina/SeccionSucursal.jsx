import React from "react";
import OrderCard from "./CardsSucursal";

function OrdersList({ordenes, pedidos}) {
 
  return (
    <>
      <h1>Sucursal</h1>
      <div className="row  row-cols-lg-2">
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

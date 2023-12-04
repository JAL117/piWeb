import React from "react";
import OrderCard from "./CardsDomicilio";

function OrdersList({ ordenes2, pedidos }) {
  return (
    <>
      <h1>A domicilio</h1>
      <div className="row row-cols-lg-2">
        {ordenes2.map((order, index) => (
          <div className="col mb-1" key={index}>
            <OrderCard order={order} index={index} pedidos={pedidos} />
          </div>
        ))}
      </div>
    </>
  );
}

export default OrdersList;

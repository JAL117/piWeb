import React, { useState, useEffect } from "react";
import Sucursal from "./Sucursal";
import Domicilio from "./Domicilio";
import axios from "axios";
import "animate.css";

function Ordenes() {
  const [ordenesLocales, setOrdenesLocales] = useState([]);
  const [ordenesEnvio, setOrdenesEnvio] = useState([]);

  const pedidos = async () => {
    await axios
      .get("http://localhost:3006/pedidos/cocina")
      .then((data) => {
        const ordenesConEnvio = data.data.filter(
          (pedido) => pedido.envio === true
        );
        const ordenesSinEnvio = data.data.filter(
          (pedido) => pedido.envio !== true
        );
        setOrdenesEnvio(ordenesConEnvio);
        setOrdenesLocales(ordenesSinEnvio);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    pedidos();
  }, []);

  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-6">
          <Sucursal ordenes={ordenesLocales} pedidos={pedidos} />
        </div>
        <div className="col-md-6">
          <Domicilio ordenes2={ordenesEnvio} pedidos={pedidos} />
        </div>
      </div>
    </div>
  );
}

export default Ordenes;

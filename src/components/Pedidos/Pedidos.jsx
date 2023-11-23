import React, { useEffect, useState } from "react";
import Navbar from "./NavPedidos";
import CardList from "./CardsList";
import OrderSection from "./Comanda";
import Animaciones from "../utils/Animaciones";
import axios from "axios";

function Pedidos() {
  const [productos, setProductos] = useState([]);
  const alimentos = [productos];
  const [categoriaActual, setCategoriaActual] = useState("Tlayuda");
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const cards = async () => {
      try {
        const response = await axios.get("http://localhost:3006/producto");
        setProductos(response.data);
      } catch (error) {
        console.log("Error obteniendo los datos: ", error);
      }
    };
    cards();
  }, []);

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaActual(categoria);
  };

  const agregarPedido = (pedido) => {
    setPedidos(pedido);
  };
 // console.log(pedidos);
  return (
    <Animaciones>
      <div>
        <Navbar onCategoriaSeleccionada={handleCategoriaSeleccionada} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <CardList
                alimentos={alimentos}
                categoriaActual={categoriaActual}
                onEnviarPedido={agregarPedido}
              />
            </div>
            <div className="col-md-4">
              <OrderSection pedidos={pedidos} />
            </div>
          </div>
        </div>
      </div>
    </Animaciones>
  );
}

export default Pedidos;

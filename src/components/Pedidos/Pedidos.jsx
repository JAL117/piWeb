import React, { useEffect, useState } from "react";
import Navbar from "./NavPedidos";
import CardList from "./CardsList";
import OrderSection from "./Comanda";
import Animaciones from "../utils/Animaciones";
import axios from "axios";

function Pedidos() {
  const [productos, setProductos] = useState([]);

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
    console.log("prra");
  }, []);

  const alimentos = [productos];
  const [categoriaActual, setCategoriaActual] = useState("Tlayuda");
  const [pedidos, setPedidos] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaActual(categoria);
  };

  const agregarPedido = (nombrePedido, cantidad) => {
    const nuevoPedido = { nombre: nombrePedido, cantidad: cantidad };
    setPedidos([...pedidos, nuevoPedido]);
    setCantidadTotal(cantidadTotal + cantidad);
  };
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
              <OrderSection pedidos={pedidos} cantidadTotal={cantidadTotal} />
            </div>
          </div>
        </div>
      </div>
    </Animaciones>
  );
}

export default Pedidos;

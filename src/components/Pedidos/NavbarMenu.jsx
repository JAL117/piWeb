import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
import Swal from "sweetalert2";

function Navbar({ onCategoriaSeleccionada }) {
  const [categorias, setCategorias] = useState([]);
 const categorys = async () => {
   try {
     const result = await axios.get(apiUrl+"categoria");
     setCategorias([...result.data[0].nombre]);
   } catch (error) {
     console.log(error.message);
   }
 };
  useEffect(() => {
    categorys();
    console.log(categorias);
  }, []);
  //console.log(categorias);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    categorias[0]
  );
  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    onCategoriaSeleccionada(categoria);
  };

  return (
    <div style={{ fontSize: "20px", fontWeight: "450" }}>
      <Nav
        variant="tabs"
        defaultActiveKey={categoriaSeleccionada}
        className="ms-2">
        {categorias.map((categoria, i) => (
          <Nav.Item key={i}>
            <Nav.Link
              eventKey={i}
              onClick={() => handleCategoriaSeleccionada(categoria)}
              style={{
                color: categoria === categoriaSeleccionada ? "red" : "black",
              }}
              className="ms-2">
              {categoria}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Navbar;

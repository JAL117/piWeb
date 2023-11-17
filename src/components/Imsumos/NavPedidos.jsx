import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";

function Navbar({ categorias, onCategoriaSeleccionada, onEliminarCategoria }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    categorias[0].id
  );

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaSeleccionada(categoria);
    onCategoriaSeleccionada(categoria);
  };

  const confirmarEliminarCategoria = (categoria) => {
    Swal.fire({
      title: "Eliminar categoría",
      text: "¿Estás seguro de que deseas eliminar esta categoría?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onEliminarCategoria(categoria);
      }
    });
  };

  return (
    <div style={{ fontSize: "20px", fontWeight: "450" }}>
      <Nav variant="tabs" defaultActiveKey={categoriaSeleccionada} className="ms-2">
        {categorias.map((categoria) => (
          <Nav.Item key={categoria.id}>
            <Nav.Link
              eventKey={categoria.id}
              onClick={() => handleCategoriaSeleccionada(categoria.id)}
              style={{
                color: categoria.id === categoriaSeleccionada ? "red" : "black",
              }}
              className="ms-2"
            >
              {categoria.nombre}
              <button
                className="btn btn-danger btn-sm ms-4"
                onClick={() => confirmarEliminarCategoria(categoria)}
              >
                <BsTrash size={20} />
              </button>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default Navbar;
import React, { useState } from "react";
import Navbar from "./NavPedidos";
import CardList from "./CardsList";
import Animaciones from "../utils/Animaciones";
import { Button, Row } from "react-bootstrap";
import { MdAssignmentAdd, MdDinnerDining } from "react-icons/md";
import Swal from "sweetalert2";

function App() {
  const alimentos = [
    {
      id: 11,
      nombre: "Talyuda de pollo",
      imagenUrl: "../src/img/Login.png",
      categoria: "tlayudas",
    },
    // Resto de datos de alimentos
  ];

  const categorias = [
    { id: "tlayudas", nombre: "Tlayudas" },
    { id: "tacos", nombre: "Tacos" },
    { id: "bebidas", nombre: "Bebidas" },
    { id: "tortas", nombre: "Tortas" },
  ];

  const [categoriaActual, setCategoriaActual] = useState("tlayudas");

  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaActual(categoria);
  };

  const handleAgregarCategoria = () => {
    Swal.fire({
      title: "Agregar Categoría",
      input: "text",
      inputLabel: "Nombre de la categoría",
      showCancelButton: true,
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      inputPlaceholder:"Nombre de la categoría",
      preConfirm: (nombreCategoria) => {
        // Aquí puedes realizar la lógica para agregar la categoría
        return new Promise((resolve) => {
          // Simulando una petición asincrónica
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Categoría agregada!", "", "success");
      }
    });
  };

  const handleAgregarPlatillo = () => {
    Swal.fire({
      title: "Agregar Platillo",
      html:
        '<Label>Nombre del platillo<Label/><input id="nombre" class="swal2-input" placeholder="Nombre del platillo">' +
        '<Label>Precio del platillo<Label/><input id="precio" class="swal2-input" placeholder="Precio">',
      showCancelButton: true,
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;

        if (!nombre || !precio) {
          Swal.showValidationMessage("Por favor, ingresa el nombre y el precio");
          return false;
        }

        return { nombre, precio };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const platillo = result.value;
        // Aquí puedes realizar la lógica para agregar el platillo

        Swal.fire("¡Platillo agregado!", "", "success");
      }
    });
  };

  const handleEliminarCategoria = (categoria) => {
    // lógica para eliminar la categoría
  };

  return (
    <Animaciones>
      <div>
        <Navbar
          categorias={categorias}
          onCategoriaSeleccionada={handleCategoriaSeleccionada}
          onEliminarCategoria={handleEliminarCategoria}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <CardList alimentos={alimentos} categoriaActual={categoriaActual} />
            </div>
            <div className="col-md-4 mt-2">
              <Row className="mb-4">
                <Button
                  size="lg"
                  variant="success"
                  onClick={handleAgregarCategoria}
                  className="mt-3"
                >
                  Categoría <MdAssignmentAdd size={35} />
                </Button>
              </Row>
              <Row>
                <Button
                  size="lg"
                  variant="success"
                  onClick={handleAgregarPlatillo}
                >
                  Platillo <MdDinnerDining size={35} />
                </Button>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Animaciones>
  );
}

export default App;
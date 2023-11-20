import React, { useState, useEffect } from "react";
import Navbar from "./NavPedidos";
import CardList from "./CardsList";
import Animaciones from "../utils/Animaciones";
import { Button, Row } from "react-bootstrap";
import { MdAssignmentAdd, MdDinnerDining } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

function App() {
  let bandera = true
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const products = async () => {
      try {
        await axios.get("http://localhost:3006/producto").then((result) => {
          setProductos(result.data);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    products();
  }, [productos]);

  useEffect(() => {
    const nuevasCategorias = new Set(categorias);

    productos.forEach((producto) => {
      nuevasCategorias.add(producto.categoria);
    });
    setCategorias(Array.from(nuevasCategorias));
  }, [productos]);

  const [categoriaActual, setCategoriaActual] = useState("Tlayuda");
  const handleCategoriaSeleccionada = (categoria) => {
    setCategoriaActual("");
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
      inputPlaceholder: "Nombre de la categoría",
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
  const handleEliminarCategoria = (categoria) => {
    // lógica para eliminar la categoría
  };

  const handleAgregarPlatillo = () => {
    Swal.fire({
      title: "Agregar Platillo",
      html:
        '<label>Nombre del platillo</label><input id="nombre" class="swal2-input" placeholder="Nombre del platillo">' +
        `<label>Precio del platillo</label><input type="number" min=${1} id="precio" class="swal2-input" placeholder="Precio"> ` +
        '<label>Descripción del platillo</label><input id="descripcion" class="swal2-input" placeholder="Descripción del platillo">' +
        '<label for="categoria">Selecciona una categoria:</label> <br />' +
        '<select id="categoria" name="categoria" className="swal2-select">' +
        categorias
          .map(
            (categoria, index) =>
              `<option key=${index} value=${categoria}>${categoria}</option>`
          )
          .join("") +
        "</select>",
      showCancelButton: true,
      confirmButtonText: "Agregar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const descripcion = document.getElementById("descripcion").value;
        const categoria = document.getElementById("categoria").value;

        if (!nombre || !precio || !descripcion) {
          Swal.showValidationMessage(
            "Por favor, ingresa el nombre, el precio y la descripcion"
          );
          return false;
        }
        if (precio < 1) {
          Swal.showValidationMessage("Por favor, ingrese un precio valido");
          return false;
        }
        return { nombre, precio, categoria, descripcion };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result.isConfirmed) {
        const platillo = result.value;
        try {
          await axios
            .post("http://localhost:3006/producto/productos", {
              nombre: platillo.nombre,
              precio: platillo.precio,
              descripcion: platillo.descripcion,
              categoria: platillo.categoria,
            })
            .then(() => {
              Swal.fire("¡Platillo agregado!", "", "success");
              console.log(productos);
            });
        } catch (error) {
          console.log(error.message);
          Swal.showValidationMessage(error.message);
        }
      }
    });
  };
  const eliminarPlatillo =  (id) => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar el platillo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Platillo eliminado!", "", "success");
      }
    });
  }

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
              <CardList
                alimentos={productos}
                categoriaActual={categoriaActual}
                eliminarPlatillo={eliminarPlatillo}
              />
            </div>

            <div className="col-md-4 mt-2">
              <Row className="mb-4">
                <Button
                  size="lg"
                  variant="success"
                  onClick={handleAgregarCategoria}
                  className="mt-3">
                  Categoría <MdAssignmentAdd size={35} />
                </Button>
              </Row>
              <Row>
                <Button
                  size="lg"
                  variant="success"
                  onClick={handleAgregarPlatillo}>
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

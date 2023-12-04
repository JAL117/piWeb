import React, { useState, useEffect } from "react";
import Navbar from "./NavbarMenu";
import CardList from "./Cards";
import Animaciones from "../utils/Animaciones";
import { Button, Row } from "react-bootstrap";
import { MdAssignmentAdd, MdDinnerDining } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

function App() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [id, setId] = useState("");

  const products = async () => {
    try {
      const result = await axios.get("http://localhost:3006/producto");
      setProductos([...result.data]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const categorys = async () => {
    try {
      const result = await axios.get("http://localhost:3006/categoria");
      setId(result.data[0]._id);
      setCategorias([...result.data[0].nombre]);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    products();
  }, []);

  useEffect(() => {
    categorys();
  }, []);

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
      preConfirm: async (nombreCategoria) => {
        const preConfirmado = nombreCategoria.toUpperCase();
        const categoriasUpperCase = categorias.map((categoriaMayus) => categoriaMayus.toUpperCase());
        if (categoriasUpperCase.includes(preConfirmado)) {
          Swal.fire("¡Categoría ya existente!", "", "error");
          return false;
        } else {
             categorias.push(nombreCategoria);
        await axios
          .put(`http://localhost:3006/categoria/${id}`, {
            categoria: categorias,
          })
          .then(() => {
            categorys();
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 1000);
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.showValidationMessage(err.message);
          });
      
        }
     },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Categoría agregada!", "", "success");
      }
    });
  };
  const handleEliminarCategoria = async (cate) => {
    console.log(cate);
    await axios
      .delete(`http://localhost:3006/categoria/${id}&${cate}`, {
        cate: cate,
      })
      .then((res) => {
        console.log(res.data);
        categorys();
        products();
        handleCategoriaSeleccionada(categorias[0]);
        Swal.fire("¡Platillo eliminado!", "", "success");
      })
      .catch((err) => {
        Swal.showValidationMessage(err.message);
      });
  };

  const handleAgregarPlatillo = async () => {
    try {
      const result = await Swal.fire({
        title: "Agregar Platillo",
        html:
          '<label>Nombre del platillo</label><input id="nombre" class="swal2-input" placeholder="Nombre del platillo">' +
          `<label>Precio del platillo</label><input type="number" min=${1} id="precio" class="swal2-input" placeholder="Precio"> ` +
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
          const categoria = document.getElementById("categoria").value;

          if (!nombre || !precio) {
            Swal.showValidationMessage(
              "Por favor, ingresa el nombre y el precio"
            );
            return false;
          }
          if (precio < 1) {
            Swal.showValidationMessage("Por favor, ingrese un precio válido");
            return false;
          }
          return { nombre, precio, categoria };
        },
        allowOutsideClick: () => !Swal.isLoading(),
      });

      if (result.isConfirmed) {
        const platillo = result.value;
        await axios
          .post("http://localhost:3006/producto/productos", {
            nombre: platillo.nombre,
            precio: platillo.precio,
            categoria: platillo.categoria,
          })
          .then(() => {
            products();
            Swal.fire("¡Platillo agregado!", "", "success");
          });
      }
    } catch (error) {
      console.log(error.message);
      Swal.showValidationMessage(error.message);
    }
  };

  const eliminarPlatillo = (id) => {
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
        axios
          .delete(`http://localhost:3006/producto/producto/${id}`)
          .then(() => {
            products();
            Swal.fire("¡Platillo eliminado!", "", "success");
          })
          .catch((err) => {
            console.log(err.message);
            Swal.showValidationMessage(err.message);
          });
      }
    });
  };
  const modificarPrecio = (id) => {
    Swal.fire({
      title: "Modificar el precio",
      icon: "warning",
      html:
        "<label>Ingrese el nuevo precio</label>" +
        '<br /><br /><input id=precio type="number" placeholder="precio"> ',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, modificar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const precio = document.getElementById("precio").value;
        if (!precio) {
          Swal.showValidationMessage("Por favor, ingrese un precio válido");
          return false;
        }
        if (precio < 1) {
          Swal.showValidationMessage("Por favor, ingrese un precio válido");
          return false;
        }
        return { precio };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:3006/producto/productos/${id}`, {
            precio: result.value.precio,
          })
          .then(() => {
            products();
            Swal.fire("¡Precio modificado!", "", "success");
          })
          .catch((err) => {
            console.log(err.message);
            Swal.showValidationMessage(err.message);
          });
      }
    });
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
              <CardList
                alimentos={productos}
                categoriaActual={categoriaActual}
                eliminarPlatillo={eliminarPlatillo}
                modificarPrecio={modificarPrecio}
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

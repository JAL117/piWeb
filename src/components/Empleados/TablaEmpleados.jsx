import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import Swal from "sweetalert2";
import axios from "axios";
import { RiLockPasswordLine } from "react-icons/ri";

function Infor() {
  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const tabla = async () => {
      try {
        const response = await axios.get("http://localhost:3006/usuario");
        setData(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    tabla();
  }, [data]);

  const handleLiquidarCuentaClick = (id_coordinador) => {
    const newData = data.filter(
      (item) => item.id_coordinador !== id_coordinador
    );
    setData(newData);
  };

  const trimmedSearchText = searchText.trim();
  const searchKeywords = trimmedSearchText.split(" ");

  const removeDiacritics = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const filteredData = data.filter((pago) => {
    if (trimmedSearchText === "") {
      return true;
    }

    return searchKeywords.every((keyword) => {
      const lowercasedKeyword = removeDiacritics(keyword.toLowerCase());
      const lowercasedNombres = removeDiacritics(pago.nombres.toLowerCase());
      const lowercasedApellidoPaterno = removeDiacritics(
        pago.apellido_paterno.toLowerCase()
      );
      const lowercasedApellidoMaterno = removeDiacritics(
        pago.apellido_materno.toLowerCase()
      );

      return (
        lowercasedNombres.includes(lowercasedKeyword) ||
        lowercasedApellidoPaterno.includes(lowercasedKeyword) ||
        lowercasedApellidoMaterno.includes(lowercasedKeyword)
      );
    });
  });

  let message = null;

  if (filteredData.length === 0 && !searchText) {
    message = <div>No hay usuarios registrados.</div>;
  }

  const handleViewClick = (usuario) => {
    Swal.fire({
      title: "Ingrese la contraseña de administrador",
      input: "password",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      const user = JSON.parse(localStorage.getItem("Usuario"));
      axios
        .get(
          `http://localhost:3006/usuario/pass/${user.usuario}&${result.value}`
        )
        .then((result) => {
          if (result.data.message) {
             Swal.fire({
               icon: "error",
               title: "Contraseña incorrecta",
             });
          }else{
           Swal.fire({
             title: "Datos de inicio de sesión",
             html: `Usuario: ${usuario.usuario} <br>Contraseña: ${usuario.contraseña}`,
             icon: "info",
           });
          }
        }).catch( (err) => {
          Swal.fire({
            icon: "error",
            title: "Error",
          });
        });
    });
  };

  const handleEditClick = (usuario) => {
    Swal.fire({
      title: "Editar Usuario",
      html:
        `<label for="nombre" class="swal2-label">
        Nombre<input id="nombre" class="swal2-input" value="${usuario.nombre}">
        </label>` +
        `<label for="apellido" class="swal2-label">
        Apellidos<input id="apellido" class="swal2-input" value="${usuario.apellido}">
        </label>` +
        `<label for="direccion" class="swal2-label">
        Direccion<input id="direccion" class="swal2-input" value="${usuario.direccion}">
        </label>` +
        `<label for="telefono" class="swal2-label">
        Telefono<input id="telefono" type="tel" pattern="^\d{10}$" class="swal2-input" value="${usuario.telefono}">
        </label>`,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,

      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector("#nombre").value;
        const apellido = Swal.getPopup().querySelector("#apellido").value;
        const direcciones = Swal.getPopup().querySelector("#direccion").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;
        const regex = /^\d{10}$/;
        if (
          nombre.length == 0 ||
          apellido.length == 0 ||
          direcciones.length == 0 ||
          telefono.length == 0
        ) {
          Swal.fire({
            title: "No pueden haber campos vacios",
            icon: "warning",
          });
          return;
        } else if (telefono.length != 10) {
          Swal.fire({
            title: "El rango del campo telefono debe de ser igual a 10 digitos",
            icon: "warning",
          });
        } else if (!regex.test(telefono)) {
          Swal.fire({
            title: "Valores inavlidos para el campo telefono ",
            icon: "warning",
          });
        }
        // Actualiza los datos en el estado
        data.map((item) => {
          if (item._id === usuario._id) {
            axios.put(`http://localhost:3006/usuario/usuario/${usuario._id}`, {
              nombre: nombre,
              apellido: apellido,
              direccion: direcciones,
              telefono: telefono,
            });
          }
        });
      },
    });
  };
  const handleDeleteClick = (usuario) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3006/usuario/${usuario._id}`);
        Swal.fire("Borrado!", "Usuario eliminado correctamente.", "success");
      }
    });
  };

  return (
    <>
      <section
        className="container mt-3"
        style={{
          boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "15px",
        }}>
        <h1 className="mb-5 mt-2">Empleados</h1>
        <div className="table-responsive">
          <Table striped bordered>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Direccion</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <>
                  {item.rol !== "Administrador" ? (
                    <tr key={item._id}>
                      <td>
                        {item.nombre} {item.apellido}{" "}
                      </td>
                      <td>{item.telefono}</td>
                      <td>{item.direccion}</td>
                      <td>{item.rol}</td>
                      <td
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}>
                        <Button
                          variant="success"
                          onClick={() => handleViewClick(item)}>
                          <RiLockPasswordLine size={25} />
                        </Button>
                        <Button
                          variant="warning"
                          onClick={() => handleEditClick(item)}>
                          <HiPencilAlt size={25} />
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteClick(item)}>
                          <FaTrash size={25} />
                        </Button>
                      </td>
                    </tr>
                  ) : null}
                </>
              ))}
            </tbody>
            {message}
          </Table>
        </div>
      </section>
    </>
  );
}

export default Infor;

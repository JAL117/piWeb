import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaTrash, FaEye } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import Swal from "sweetalert2";
import axios from "axios";

function Infor() {
  const [datos, setData] = useState([]);

  useEffect(() => {
    const tabla = async () => {
      const response = await axios.get("http://localhost:3006/usuario");
      setData(response.data);
    };
    tabla();
  }, [datos]);
  let message = null;
  if (datos.length === 0) {
    message = <div>No hay usuarios registrados.</div>;
  }

  const handleViewClick = (usuario) => {
    Swal.fire({
      title: "Datos de inicio de sesión",
      html: `Usuario:${usuario.usuario} <br>Contraseña: ${usuario.contraseña}`,
      icon: "info",
    });
  };

  const handleEditClick = (usuario) => {
    Swal.fire({
      title: "Editar Usuario",
      html:
        `<input id="nombre" class="swal2-input" value="${usuario.nombre}">` +
        `<input id="apellido" class="swal2-input" value="${usuario.apellido}">` +
        `<input id="direccion" class="swal2-input" value="${usuario.direccion}">` +
        `<input id="telefono" class="swal2-input" value="${usuario.telefono}">`,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,

      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector("#nombre").value;
        const apellido = Swal.getPopup().querySelector("#apellido").value;
        const direcciones = Swal.getPopup().querySelector("#direccion").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;

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
        } else if (telefono.length <= 9) {
          Swal.fire({
            title: "El rango del campo telefono debe de ser mayor a 9 digitos",
            icon: "warning",
          });
        } else {
          datos.map((item) => {
            if (item._id === usuario._id) {
              axios.put(
                `http://localhost:3006/usuario/usuario/${usuario._id}`,
                {
                  nombre: nombre,
                  apellido: apellido,
                  direccion: direcciones,
                  telefono: telefono,
                }
              );
            }
          });
        }
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
        className="container"
        style={{
          boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "15px",
          marginTop: "8%",
        }}>
        {" "}
        <h1 className="mb-5">Empleados</h1>
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
              {datos.map((item) => (
                <tr key={item._id}>
                  <td>
                    {item.nombre} {item.apellido}
                  </td>
                  <td>{item.telefono}</td>
                  <td>{item.direccion}</td>
                  <td>{item.rol}</td>
                  <td
                    style={{ display: "flex", justifyContent: "space-around" }}>
                    <Button
                      variant="success"
                      onClick={() => handleViewClick(item)}>
                      <FaEye size={20} /> Ver
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleEditClick(item)}>
                      <HiPencilAlt size={20} /> Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteClick(item)}>
                      <FaTrash size={20} /> Eliminar
                    </Button>
                  </td>
                </tr>
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

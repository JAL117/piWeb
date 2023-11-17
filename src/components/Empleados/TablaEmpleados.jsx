import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaTrash, FaEye } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import Swal from "sweetalert2";

function Infor() {
  const [data, setData] = useState([
    {
      id_coordinador: 1,
      nombres: "Juan",
      apellido_paterno: "Pérez",
      apellido_materno: "López",
      telefono: "1234567890",
      direccion:"abajo de un carro",
      rango: "Admin",
    },
    {
      id_coordinador: 2,
      nombres: "María",
      apellido_paterno: "Gómez",
      apellido_materno: "Martínez",
      telefono: "9876543210",
      direccion:"en una casa",
      rango: "Usuario",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  

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
      title: "Datos de inicio de sesión",
      html: `Usuario: <br>Contraseña: ********`,
      icon: "info",
    });
  };

  const handleEditClick = (usuario) => {
    Swal.fire({
      title: "Editar Usuario",
      html:
        `<input id="nombres" class="swal2-input" value="${usuario.nombres }">` +
        `<input id="apellidoPaterno" class="swal2-input" value="${usuario.apellido_paterno}">` +
        `<input id="apellidoMaterno" class="swal2-input" value="${usuario.apellido_materno}">` +
        `<input id="direccion" class="swal2-input" value="${usuario.direccion}">`+
        `<input id="telefono" class="swal2-input" value="${usuario.telefono}">`,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      showLoaderOnConfirm: true,
    
      preConfirm: () => {
        const nombres = Swal.getPopup().querySelector("#nombres").value;
        const apellidoPaterno =
          Swal.getPopup().querySelector("#apellidoPaterno").value;
        const apellidoMaterno =
          Swal.getPopup().querySelector("#apellidoMaterno").value;
        const direcciones = Swal.getPopup().querySelector("#direccion").value;
        const telefono = Swal.getPopup().querySelector("#telefono").value;

        // Actualiza los datos en el estado
        const newData = data.map((item) => {
          if (item.id_coordinador === usuario.id_coordinador) {
            return {
              ...item,
              nombres,
              apellido_paterno: apellidoPaterno,
              apellido_materno: apellidoMaterno,
              direccion: direcciones,
              telefono,
            };
          }
          return item;
        });

        setData(newData);
      },
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
        }}
      >
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
                <tr key={item.id_coordinador}>
                  <td>
                    {item.nombres} {item.apellido_paterno}{" "}
                    {item.apellido_materno}
                  </td>
                  <td>{item.telefono}</td>
                  <td>{item.direccion}</td>
                  <td>{item.rango}</td>
                  <td
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Button
                      variant="success"
                      onClick={() => handleViewClick(item)}
                    >
                      <FaEye /> Ver
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => handleEditClick(item)}
                    >
                      <HiPencilAlt /> Editar
                    </Button>
                    <Button variant="danger">
                      <FaTrash /> Eliminar
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

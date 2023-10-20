import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaTrash ,FaEye } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

function Infor() {
  const [data, setData] = useState([
    {
      id_coordinador: 1,
      nombres: "Juan",
      apellido_paterno: "Pérez",
      apellido_materno: "López",
      telefono: "1234567890",
      rango: "Admin",
    },
    {
      id_coordinador: 2,
      nombres: "María",
      apellido_paterno: "Gómez",
      apellido_materno: "Martínez",
      telefono: "9876543210",
      rango: "Usuario",
    },
    {
      id_coordinador: 2,
      nombres: "María",
      apellido_paterno: "Gómez",
      apellido_materno: "Martínez",
      telefono: "9876543210",
      rango: "Usuario",
    },
    {
      id_coordinador: 2,
      nombres: "María",
      apellido_paterno: "Gómez",
      apellido_materno: "Martínez",
      telefono: "9876543210",
      rango: "Usuario",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [coordinadorSeleccionado, setCoordinadorSeleccionado] = useState(null);

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

  return (
    <>
      <section
        className="container mb-5"
        style={{
          boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "15px",
          marginTop: "10%",
        }}
      >
        {" "}
        <h1 className="mb-5">Empleados</h1>
        <div className="table-responsive">
          <Table striped bordered>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
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
                  <td>{item.rango}</td>
                  <td style={{display:"flex",justifyContent:"space-around"}}>
                    <Button variant="success" >
                      <FaEye />
                    </Button>
                    <Button variant="warning" >
                      <HiPencilAlt />
                    </Button>
                    <Button variant="danger" >
                      <FaTrash />
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

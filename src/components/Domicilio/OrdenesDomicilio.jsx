import React from "react";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import "animate.css";

function OrderCard({ order, index, pedidos }) {
  if (!order) {
    return null;
  }
  const {
    _id,
    total,
    envio,
    direccion,
    cliente,
    fecha,
    nota,
    productos,
    cocina,
  } = order;

  const formatDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };

  const credenciales = () => {
    Swal.fire({
      title: "Información de entrega",
      html: `<span style="font-size:20pt;">Cliente: ${cliente}</span><br><span style="font-size:20pt;">Domicilio: ${direccion}</span>`,
      icon: "info",
    });
  };
  const confirmarEntrega = async () => {
    if (cocina === false) {
      Swal.fire({
        title: "Permiso denegado",
        text: "No puedes confirmar algo que aun no esta echo",
        icon: "error",
      });
    } else {
      try {
        await axios
          .put("http://localhost:3006/pedidos/estatus", {
            estatus: "realizado",
            id: _id,
          })
          .then((data) => {
            console.log(data.data);
            Swal.fire({
              position: "center",
              title: "Pedido entregado",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });
            pedidos();
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const eliminarPedido = async () => {
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
        axios
          .delete(`http://localhost:3006/pedidos/eliminar/${_id}`)
          .then(() => {
            Swal.fire(
              "Borrado!",
              "Usuario eliminado correctamente.",
              "success"
            );
            pedidos();
          })
          .catch((error) => {
            Swal.fire("Error!", error);
          });
      }
    });
  };

  return (
    <div
      className="card text-center"
      style={{
        backgroundColor: "rgba(0, 128, 0, 0.2)",
        boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
      }}>
      <div className="card-body">
        <h5 className="card-title">Orden #{index + 1}</h5>
        <p className="card-text">Fecha del pedido: {formatDate(fecha)}</p>
        <h5>Productos:</h5>
        <textarea
          className="form-control text-center"
          style={{ height: "15vh" }}
          value={productos
            .map((producto, i) => `${producto.producto} ${producto.cantidad}`)
            .join("\n")}
          readOnly
        />
        <p className="card-text">Notas: {nota}</p>
        <p className="card-text">Total a pagar: ${total}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-success  mx-1" onClick={credenciales}>
          <FaAddressCard size={25} />
        </button>

        <button className="btn btn-primary mx-1" onClick={confirmarEntrega}>
          <BsClipboard2CheckFill size={25} />
        </button>
        <button className="btn btn-danger mx-1" onClick={eliminarPedido}>
          <MdDeleteForever size={25} />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;

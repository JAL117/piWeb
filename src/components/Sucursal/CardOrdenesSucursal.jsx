import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import Swal from "sweetalert2";
import axios from "axios";
import "animate.css";

const apiUrl = import.meta.env.VITE_API_URL;
function OrderCard({ order, index, pedidos }) {
  if (!order) {
    return null;
  }
  const { _id, total, mesa, fecha, nota, productos, cocina } = order;
  const formatDate = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString();
  };
  const confirmarEntrega = async () => {

    if (cocina === false) {
      Swal.fire({
        title: "Permiso denegado",
        text: "El pedido aún no se ha realizado en cocina",
        icon: "error",
      });
      return
    } else {
      try {
        await axios
          .put(apiUrl+`pedidos/estatus`, {
            estatus: "realizado",
            id: _id,
          })
          .then((data) => {
            console.log(data.data);
            Swal.fire({
              position: "center",
              title: "Pedido pagado",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
              showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
              },
              hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
              },
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
          .delete(apiUrl+`pedidos/eliminar/${_id}`)
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
        backgroundColor: "rgba(209, 35, 35, 0.2)",
        boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.1)",
      }}>
      <div className="card-body">
        <h5 className="card-title">Orden #{index + 1}</h5>
        <p className="card-text">Fecha del pedido: {formatDate(fecha)}</p>
        <br />
        <p className="card-text">Número de mesa: {mesa}</p>
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
        <button className="btn btn-success mx-1" onClick={confirmarEntrega}>
          <GiReceiveMoney size={25} />
        </button>
        <button className="btn btn-danger mx-1" onClick={eliminarPedido}>
          <MdDeleteForever size={25} />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;

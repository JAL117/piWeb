import React from 'react';
import { MdOutdoorGrill } from "react-icons/md";
import Animaciones from "../components/utils/Animaciones"

function Inicio() {
  const usuario = JSON.parse(localStorage.getItem("Usuario"));
  const Nombre = usuario?.usuario;
  const Rol = usuario?.rol;

  return (
    <Animaciones>
      <div style={{ textAlign: 'center' }} className='mt-5'>
        <p className='display-3' style={{ fontWeight: "500" }}>¡Bienvenido a ARDON! <MdOutdoorGrill size={150} /></p>
        <p className='display-5 ' style={{ fontWeight: "500" }}>{Rol}: {Nombre}</p>
      </div>
    </Animaciones>
  );
}

export default Inicio;
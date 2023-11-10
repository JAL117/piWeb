import React, {useEffect, useState} from "react";
import TarjetaDatos from "./Usuario";
import axios from "axios";

function DatosUsuario() {

  const [resultado, setResultado] = useState("");

 useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Usuario"));
    const datos = async () => {
      const resultado = await axios.get(
        `http://localhost:3006/usuario/${user.usuario}`
      );
      setResultado(resultado.data);
    }
  datos();
  
  },[]);

  return (
    <TarjetaDatos 
      nombre={resultado.nombre}
      direccion={resultado.direccion}
      telefono={resultado.telefono}
      rol={resultado.rol}
    />
  );
}

export default DatosUsuario;

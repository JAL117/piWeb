import React from 'react';
import TarjetaDatos from './Usuario'; 

function DatosUsuario() {
  const datos = {
    nombre: 'Saul la piwa',
    direccion: 'Una piña debajo del mar',
    telefono: '911',
    rol: 'Lanchero',
  };

  return (
    <TarjetaDatos
      nombre={datos.nombre}
      direccion={datos.direccion}
      telefono={datos.telefono}
      rol={datos.rol}
    />
  );
}

export default DatosUsuario;

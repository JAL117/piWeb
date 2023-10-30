import React from 'react';
import TarjetaDatos from './Usuario'; 

function App() {
  const datos = {
    nombre: 'Jose Saul Gomez Caballero',
    direccion: 'Casa piwa',
    telefono: '9685623495',
    rol: 'Mesero',
  };

  return (
    <div>
     
      <TarjetaDatos
        nombre={datos.nombre}
        direccion={datos.direccion}
        telefono={datos.telefono}
        rol={datos.rol}
      />
    </div>
  );
}

export default App;

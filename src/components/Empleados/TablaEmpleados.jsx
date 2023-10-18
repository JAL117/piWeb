import React, { Component } from 'react';
import '../styles/Empleados.css'

const datosEmpleados = [
  { id: 1, nombre: 'Juan Pérez', telefono: '123-456-7890', rol: 'Gerente' },
  { id: 2, nombre: 'Ana Gómez', telefono: '987-654-3210', rol: 'Asistente' },
  { id: 3, nombre: 'Luis Rodríguez', telefono: '555-555-5555', rol: 'Empleado' },
];

class EmpleadosTable extends Component {
  render() {
    const { onVerClick, onModificarClick, onEliminarClick } = this.props;

    if (!datosEmpleados || datosEmpleados.length === 0) {
      return <div>No hay empleados para mostrar.</div>;
    }

    return (
      <table className="empleados-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datosEmpleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.nombre}</td>
              <td>{empleado.telefono}</td>
              <td>{empleado.rol}</td>
              <td className="acciones">
                <button className="ver-button" onClick={() => onVerClick(empleado.id)}>Ver</button>
                <button className="modificar-button" onClick={() => onModificarClick(empleado.id)}>Modificar</button>
                <button className="eliminar-button" onClick={() => onEliminarClick(empleado.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default EmpleadosTable;

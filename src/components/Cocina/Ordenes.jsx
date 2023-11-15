import React from 'react';
import Sucursal from './Sucursal';
import Domicilio from './Domicilio';

function Ordenes() {
  return (
    <div className='p-3'>
      <div className="row">
        <div className="col-md-6">
          <Sucursal/>
        </div>
        <div className="col-md-6">
          <Domicilio/>
        </div>
      </div>
    </div>
  );
}

export default Ordenes;
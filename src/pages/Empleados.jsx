import React from 'react'
import TablaEmpleados from '../components/Empleados/TablaEmpleados'
import Animaciones from '../components/utils/Animaciones'

function Empleados() {
  return (
    <Animaciones className='mt-5'>
     <TablaEmpleados/>
    </Animaciones>
  )
}

export default Empleados
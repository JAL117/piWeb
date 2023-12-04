import React from 'react'
import PanelGrafica from '../components/Panel/PanelGrafica'
import Ventas from '../components/Panel/Ventas'
import TablaHistorial from '../components/Panel/TablaDeHistorial'

function Panel() {
  return (
    <div className='p-5'>
      <div>
        <Ventas/>
      </div>
      <div className='p-2 mt-5'>
            <PanelGrafica/>
      </div>
      <div className='me-5'>
        <TablaHistorial/>
      </div>
    </div>
  )
}

export default Panel
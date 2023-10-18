import React from 'react'
import PanelVentas from '../components/PanelVentas'
import PanelOrdenes from '../components/PanelOrdenes'
import PanelGrafica from '../components/PanelGrafica'

function Panel() {
  return (
    <div className='panel_principal'>
      
      <PanelVentas/>
      <PanelOrdenes/>
      <PanelGrafica/>
    </div>
  )
}

export default Panel
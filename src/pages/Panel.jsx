import React from 'react'
import PanelVentas from '../components/Panel/PanelVentas'
import PanelOrdenes from '../components/Panel/PanelOrdenes'
import PanelGrafica from '../components/Panel/PanelGrafica'

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
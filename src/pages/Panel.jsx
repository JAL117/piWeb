import React from 'react'
import PanelGrafica from '../components/Panel/PanelGrafica'
import Ventas from '../components/Panel/Ventas'

function Panel() {
  return (
    <div style={{marginLeft:'10%'}}>
      <div style={{display: 'flex'}}>
        <Ventas></Ventas>
      </div>
      <div>
            <PanelGrafica/>
      </div>
    </div>
  )
}

export default Panel
import React from 'react'
import PanelGrafica from '../components/Panel/PanelGrafica'
import Ventas from '../components/Panel/Ventas'
import { Row } from 'react-bootstrap'

function Panel() {
  return (
    <Row className='ms-5'>
      <div className='mt-2 ms-5'>
        <Ventas/>
      </div>
      <div className='p-2 mt-5'>
            <PanelGrafica/>
      </div>
    </Row>
  )
}

export default Panel
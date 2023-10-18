import React from 'react'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import '../styles/Panel.css'

function PanelVentas() {
  return (
    <div>
        <div className='panel'>
            <RiMoneyDollarCircleFill/>
            <h1>Ventas del  dia:</h1>
            <p>$120.00</p>

        </div>
    </div>
  )
}

export default PanelVentas
import React from 'react'
import CardCocina from "../components/Cocina/CardOrdenesCocina"
import NavBarCocina from "../components/Cocina/NavBarCocina"
import { Outlet } from 'react-router-dom'


function Cocina() {
  return (
    <>
    <NavBarCocina/>
    <Outlet> </Outlet>
    </>
  )
}

export default Cocina
import { Outlet } from "react-router-dom"
import Footer from "../components/Principal/Footer"


function LayoutInicial() {
  return (
    <>

      <Outlet/>
      <Footer/>
     
    </>
   
  )
}

export default LayoutInicial
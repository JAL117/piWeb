import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/Navbar";
import Animaciones from "../components/utils/Animaciones";


function Layout() {
  return (
    <Animaciones>
      <SideMenu/> 
      <div>
        <Outlet/>
      </div>
   
    </Animaciones>
  );
}

export default Layout;

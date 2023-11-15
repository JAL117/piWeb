import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/Navbar";
import Animaciones from "../components/utils/Animaciones";
import '../App.css'

function Layout() {
  return (
    <Animaciones>
      <SideMenu/>
      <div className="mt-3">
        <Outlet/>
      </div>
   
    </Animaciones>
  );
}

export default Layout;

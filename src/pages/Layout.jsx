import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/SideMenu";
import '../App.css'

function Layout() {
  return (
    <div>
      <SideMenu/>
      <div style={{marginTop:"6%",marginLeft:"5%"}}>
        <Outlet/>
      </div>
   
    </div>
  );
}

export default Layout;

import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/SideMenu";
import Footer from "../components/Principal/Footer";
import '../App.css'

function Layout() {
  return (
    <div>
      <SideMenu/>
      <div style={{marginTop:"8%",marginLeft:"5%" , marginBottom:"15%"}}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;

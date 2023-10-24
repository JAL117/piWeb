import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/SideMenu";
import Footer from "../components/Principal/Footer";

function Layout() {
  return (
    <>
      <SideMenu />
         <div style={{ marginLeft:"10%", marginTop:"7%"}}>
         <Outlet/>
      </div>
   
     
      <Footer />
    </>
  );
}

export default Layout;

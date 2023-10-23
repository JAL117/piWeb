import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/SideMenu";
import Footer from "../components/Principal/Footer";

function Layout() {
  return (
    <>
      <SideMenu />
      <div className="mt-5">
         <Outlet/>
      </div>
      <Footer />
    </>
  );
}

export default Layout;

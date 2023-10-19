import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/SideMenu";
import Footer from "../components/Principal/Footer";

function Layout() {
  return (
    <>
      <SideMenu>
        <Outlet />
      </SideMenu>
      <Footer />
    </>
  );
}

export default Layout;

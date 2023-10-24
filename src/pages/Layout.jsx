import { Outlet, useLocation } from "react-router-dom";
import SideMenu from "../components/Principal/SideMenu";
import Footer from "../components/Principal/Footer";

function Layout() {
  return (
    <div className="layout-container">
      <SideMenu />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

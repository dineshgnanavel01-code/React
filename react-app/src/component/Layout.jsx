import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

export default Layout;
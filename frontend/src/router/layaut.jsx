import { Outlet } from "react-router-dom";
import Head from "../components/Head";
import DrawerMenu from "../components/drawer/DrawerMenu";

import "@router/layaut.css";

import FAVICON from "../assets/favicon.ico";

//! Personalizar la web en el inicio
document.title = "Fuerza de Trabajo";
const favicon = document.querySelector("link[rel*='icon']");
favicon.href = FAVICON;

export default function Layout() {
  return (
    <div className="layaut-container">
      <header className="header">
        <Head />
      </header>
      <div className="main-container">
        <div className="drawer-container">
          <DrawerMenu />
        </div>
        <main className="body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

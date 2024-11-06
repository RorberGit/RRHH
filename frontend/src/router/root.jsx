import { Outlet } from "react-router-dom";
import Head from "../components/Head";
import DrawerMenu from "../components/DrawerMenu";
import { Box, Container, Toolbar } from "@mui/material";
import { useEffect } from "react";

import FAVICON from "../assets/favicon.ico";

export default function Layout() {
  //Configurar parametros del documento
  useEffect(() => {
    document.title = "Fuerza de Trabajo";

    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = FAVICON;
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Head />
      <DrawerMenu />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}

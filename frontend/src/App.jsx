import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Empleados } from "./pages";
import { Layout } from "./components";
import { Dashboard } from "./pages/dashboard";
import { Suspense } from "react";
import Usuarios from "./pages/usuarios";
import { useEffect } from "react";

import FAVICON from "./assets/favicon.ico";
import Asistencia from "./pages/asistencia";

function App() {
  //Configurar parametros del documento
  useEffect(() => {
    document.title = "Fuerza de Trabajo";

    const favicon = document.querySelector("link[rel*='icon']");
    favicon.href = FAVICON;
  }, []);

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ontime" element={<Asistencia />} />
          <Route
            path="users/*"
            element={
              <Suspense fallback={<>...Cargando</>}>
                <Usuarios />
              </Suspense>
            }
          />
          <Route
            path="employee/*"
            element={
              <Suspense fallback={<>...Cargando</>}>
                <Empleados />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import useQueryParams from "@hooks/use-QueryParams";
import Titulo from "../components/titulo";
import { Paper } from "@mui/material";

import Historico from "../components/historico";
import { PropiedadesEmpleado } from "./components/propiedades-empleado";
import { Botones } from "./components/botones";
import { DetalleProvider } from "./contexts/detail-context";
import { Desactivar } from "./components/desactivar";
import { useState } from "react";
import { Activar } from "./components/activar";

export default function DetailEmpleado() {
  //! Estado que controla el renderizado de los componentes
  const [refresh, setRefresh] = useState(false);

  //! Controla si se muestran o no los botones de activar y desativar
  const [isActive, setIsActive] = useState(true);

  const [action, setAction] = useState(null);

  //! Capturar los query desde la url
  const { id } = useQueryParams();

  return (
    <>
      <DetalleProvider
        value={{ id, isActive, setIsActive, setAction, refresh, setRefresh }}
      >
        <Paper sx={{ padding: 2 }}>
          <Titulo title="Detalles del empleado" />

          {
            //! Botones de acción
            !action && <Botones />
          }

          {
            //! Activar empleado
            action === "activate" && <Activar />
          }

          {
            //! Desactivar empleado
            action === "deactivate" && <Desactivar />
          }

          <PropiedadesEmpleado />
        </Paper>

        <Historico />
      </DetalleProvider>
    </>
  );
}

import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Jornada from "./views/Jornada";
import Reloj from "./views/Reloj";
import PonerEntradaSalida from "./views/PonerEntradaSalida";
import Empleado from "./views/Empleado";
import Registro from "./views/Registro";
import { useState } from "react";
import useGetData from "../../hooks/use-GetData";
import useRecuperarJornada from "./hooks/use-RecuperarJornada";

export default function Asistencia() {
  /*Mantiene vinculado el estado de empleados entre componentes 
  ponerEntradaSalida y empleado */
  const [employee, setEmployee] = useState();

  /* Recuperar jornada*/
  const { horaEntrada, horaSalida } = useRecuperarJornada();

  /* Recupera los registros de entrada o salida,
  enlaza la función refresData con el componente PonerEntraSalida
  data y loading se pasan a component registro*/
  const { data, loading, refresData } = useGetData(
    "asistencia/registroentrada/"
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }} gap="10px">
          <Paper sx={{ p: 2 }}>
            <Jornada horaEntrada={horaEntrada} horaSalida={horaSalida} />
          </Paper>
          <Paper sx={{ mt: 2, p: 2, overflow: "hidden" }}>
            <Reloj />
          </Paper>
          <Paper sx={{ mt: 2, p: 2 }}>
            <PonerEntradaSalida
              setEmployee={setEmployee}
              refresData={refresData}
            />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Empleado employee={employee} />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Paper>
            <Registro
              data={data}
              loading={loading}
              horaEntrada={horaEntrada}
              horaSalida={horaSalida}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

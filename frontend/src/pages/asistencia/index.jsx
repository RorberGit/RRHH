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
import moment from "moment";
import useReduxUsuario from "../../redux/hooks/use-ReduxUsuario";
import { ASISTENCIA } from "@constants";

export default function Asistencia() {
  //! Recuperar el id del usuario logueado
  const { proyecto } = useReduxUsuario().list.user;

  //! Mantiene vinculado el estado de empleados entre componentes ponerEntradaSalida y empleado
  const [employee, setEmployee] = useState();

  //! Recuperar jornada
  const { horaEntrada, horaSalida } = useRecuperarJornada();

  /* 
    Recupera los registros de entrada o salida con los criterios de filtros:
    - Solo los guardados en la fecha actual
    - Los registros que coencidan con el proyecto del usuario logueado
    - Se enlaza la función refresData con el componente PonerEntraSalida
      data y loading se pasan a component registro
  */
  const fecha_entrada = moment().format("yyyy-MM-DD");
  const { data, error, loading, refresData } = useGetData(
    `${ASISTENCIA.ENTRADA_SALIDA}?fecha_entrada=${fecha_entrada}&proyecto=${proyecto}`
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
              proyecto={proyecto}
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
              error={error}
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

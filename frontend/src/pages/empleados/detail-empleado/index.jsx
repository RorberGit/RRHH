import useQueryParams from "@hooks/use-QueryParams";
import useFetching from "@hooks/use-Fetching.js";
import { PATH_API } from "@constants/rutas.api";
import Titulo from "../components/titulo";
import { Paper } from "@mui/material";

import Historico from "../components/historico";
import DetalleEmpleado from "./components/detalle-empleado";

export default function DetailEmpleado() {
  const { id } = useQueryParams();

  const { data, loading } = useFetching(
    `${PATH_API.EMPLOYEE.RETRIEVE}?id=${id}`
  );

  if (loading) return <h2>Cargango...</h2>;

  return (
    <>
      <Paper sx={{ padding: 2 }}>
        <Titulo title="Detalles del empleado" />
        <DetalleEmpleado data={data} />
      </Paper>
      <Historico id={id} />
    </>
  );
}

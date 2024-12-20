import { Paper } from "@mui/material";
import Tabla from "@components/mui/Tabla";
import useFetching from "@hooks/use-Fetching.js";
import { EMPLEADO } from "@constants/rutas.api.js";
import { columns } from "./models/columnas";
import Titulo from "@pages/empleados/components/titulo";
import { useNavigate } from "react-router-dom";

export default function ListarEmpleados() {
  const navigate = useNavigate();

  const { data, error, loading } = useFetching(
    `${EMPLEADO.RETRIEVE}?is_active=True`
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <Paper sx={{ padding: 2 }}>
      <Titulo title="Listado de empleados" />
      <Tabla rows={data} columns={columns(navigate)} loading={loading} />
    </Paper>
  );
}

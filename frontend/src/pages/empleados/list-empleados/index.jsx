import { Paper } from "@mui/material";
import Tabla from "@components/mui/Tabla";
import { useFetching } from "@hooks/use-Fetching.js";
import { PATH_API } from "@constants/rutas.api.js";
import { columns } from "./models/columnas";
import Titulo from "@pages/empleados/components/titulo";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../../../hooks/use-GetUser";
import useQueryParams from "../../../hooks/use-QueryParams";

export default function ListarEmpleados() {
  //! Capturar los query desde la url
  const { active } = useQueryParams();

  const { user } = useGetUser();

  const navigate = useNavigate();

  const { data, error, loading } = useFetching(
    `${PATH_API.EMPLOYEE.LISTING}?is_active=${active}&proyecto=${
      (active === "True" && user?.proyecto) || ""
    }`
  );

  if (loading) return <h2>Cargando...</h2>;

  if (error) return <h2>{error.detail}</h2>;

  return (
    <Paper sx={{ padding: 2 }}>
      <Titulo title="Listado de empleados" />
      <Tabla rows={data} columns={columns(navigate)} loading={loading} />
    </Paper>
  );
}

import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import {useFetching} from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { PATH_API } from "@constants";

export default function Afiliacion() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(PATH_API.integracion.AFILIACION);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="afp"
      label="Afiliación política"
      options={data}
      span="2"
      multiple={true}
    />
  );
}

import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import {useFetching} from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { PATH_API } from "@constants";

export default function Calzado() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(PATH_API.vestimenta.CALZADO);

  return loading ? (
    <h3>Cargando...</h3>
  ) : (
    <AutoCompletar
      control={control}
      name="v"
      label="Talla Calzado"
      options={data}
      span="2"
    />
  );
}

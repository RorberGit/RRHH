import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import {useFetching} from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { OTHER } from "@constants";

export default function Pase() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(OTHER.PASE);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="pase"
      label="Pase (RTD)"
      options={data}
      span="3"
    />
  );
}

import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import {useFetching} from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { OTHER } from "@constants";

export default function Albergado() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(OTHER.ALBERGADO);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="ajtvjt"
      label="Albergado / Viajante"
      options={data}
      span="6"
    />
  );
}

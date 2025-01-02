import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import {useFetching} from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { ORGANITATION } from "@constants";

export default function Cargo() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(ORGANITATION.CARGO);

  if (loading) return <h3>Cargando...</h3>

  return (
    <AutoCompletar
      control={control}
      name="cargo"
      label="Cargo"
      options={data}
      span="9"
    />
  );
}

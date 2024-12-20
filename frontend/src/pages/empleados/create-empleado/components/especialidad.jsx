import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { ORGANITATION } from "@constants";
import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";

export default function Especialidad() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(ORGANITATION.ESPECIALIDAD);

  if (loading) return <h3>Cargando...</h3>;
  return (
    <AutoCompletar
      control={control}
      name="especialidad"
      label="Especialidad"
      options={data}
      span="6"
    />
  );
}

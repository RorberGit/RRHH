import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { OTHER } from "@constants";

export default function Turno() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(OTHER.TURNO);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="turno"
      label="Turno"
      options={data}
      span="3"
    />
  );
}

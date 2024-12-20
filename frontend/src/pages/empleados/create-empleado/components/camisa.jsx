import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { RUTAS_API } from "@constants";

export default function Camisa() {
  const { control } = useEmpleadoContext();

  const { data, loading } = useFetching(RUTAS_API.vestimenta.CAMISA);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="camisa"
      label="Talla Camisa / Blusa"
      options={data}
      span="2"
    />
  );
}

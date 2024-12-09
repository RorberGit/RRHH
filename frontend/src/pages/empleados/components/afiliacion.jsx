import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { RUTAS_API } from "@constants";

export default function Afiliacion() {
  const { control } = useComponentContext();

  const { data, loading } = useFetching(RUTAS_API.integracion.AFILIACION);

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

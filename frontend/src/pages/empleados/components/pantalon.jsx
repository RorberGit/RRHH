import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { RUTAS_API } from "@constants";

export default function Pantalon() {
  const { control } = useComponentContext();

  const { data, loading } = useFetching(RUTAS_API.vestimenta.PANTALON);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="pantalon"
      label="Talla pantalón"
      options={data}
      span="2"
    />
  );
}

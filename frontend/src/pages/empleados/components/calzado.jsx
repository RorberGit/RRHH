import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { RUTAS_API } from "@constants";

export default function Calzado() {
  const { control } = useComponentContext();
  const { data, loading } = useFetching(RUTAS_API.vestimenta.CALZADO);

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
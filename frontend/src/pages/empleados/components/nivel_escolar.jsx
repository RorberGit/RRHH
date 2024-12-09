import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import { OTHER } from "@constants";
import AutoCompletar from "@components/mui/AutoCompletar";

export default function NivelEscolar() {
  const { control } = useComponentContext();

  const { data, loading } = useFetching(OTHER.NIVEL_ESCOLAR);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="ne"
      label="Nivel Escolar"
      options={data}
      span="6"
    />
  );
}

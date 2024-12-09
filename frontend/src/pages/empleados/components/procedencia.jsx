import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { OTHER } from "@constants";

export default function Procedencia() {
  const { control } = useComponentContext();

  const { data, loading } = useFetching(OTHER.PROCEDENCIA);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoCompletar
      control={control}
      name="procedencia"
      label="Procedencia"
      options={data}
      span="6"
    />
  );
}

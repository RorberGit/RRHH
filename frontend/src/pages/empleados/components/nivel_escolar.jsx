import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import { OTHER } from "@constants";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";

export default function NivelEscolar() {
  const { control } = useComponentContext();

  const { data, loading } = useFetching(OTHER.NIVEL_ESCOLAR, {
    suspense: true,
  });

  if (loading) return <h3>Cargando...</h3>;

  return (
    <Suspense fallback={<h1>Loading posts...</h1>}>
      <AutoCompletar
        control={control}
        name="ne"
        label="Nivel Escolar"
        options={data}
        span="6"
      />
    </Suspense>
  );
}

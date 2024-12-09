import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { ORGANITATION } from "@constants";

export default function Area() {
  const { control } = useComponentContext();

  const { data } = useFetching(ORGANITATION.AREA, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="areadpt"
        label="Área / Departamento"
        options={data}
        span="5"
      />
    </Suspense>
  );
}

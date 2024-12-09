import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { ORGANITATION } from "@constants";

export default function Especialidad() {
  const { control } = useComponentContext();

  const { data } = useFetching(ORGANITATION.ESPECIALIDAD, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="especialidad"
        label="Especialidad"
        options={data}
        span="6"
      />
    </Suspense>
  );
}

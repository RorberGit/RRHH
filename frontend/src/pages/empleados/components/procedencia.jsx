import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { OTHER } from "@constants";

export default function Procedencia() {
  const { control } = useComponentContext();

  const { data } = useFetching(OTHER.PROCEDENCIA, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="procedencia"
        label="Procedencia"
        options={data}
        span="6"
      />
    </Suspense>
  );
}

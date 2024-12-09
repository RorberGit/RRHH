import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { OTHER } from "@constants";

export default function Pase() {
  const { control } = useComponentContext();

  const { data } = useFetching(OTHER.PASE, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="pase"
        label="Pase (RTD)"
        options={data}
        span="3"
      />
    </Suspense>
  );
}

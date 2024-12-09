import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { OTHER } from "@constants";

export default function Turno() {
  const { control } = useComponentContext();

  const { data } = useFetching(OTHER.TURNO, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="turno"
        label="Turno"
        options={data}
        span="3"
      />
    </Suspense>
  );
}

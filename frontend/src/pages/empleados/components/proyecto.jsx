import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { ORGANITATION } from "@constants";

export default function Proyecto() {
  const { control } = useComponentContext();

  const { data } = useFetching(ORGANITATION.PROYECTO, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="proyecto"
        label="Proyecto"
        options={data}
        span="4"
      />
    </Suspense>
  );
}

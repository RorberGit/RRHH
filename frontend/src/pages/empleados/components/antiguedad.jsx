import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { OTHER } from "@constants";

export default function Antiguedad() {
  const { control } = useComponentContext();

  const { data } = useFetching(OTHER.ANTIGUEDAD, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="antdd"
        label="Antigüedad"
        options={data}
        span="5"
      />
    </Suspense>
  );
}

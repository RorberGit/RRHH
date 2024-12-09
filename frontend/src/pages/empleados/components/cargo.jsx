import { useComponentContext } from "@context/use-ComponentContext";
import useFetching from "@hooks/use-Fetching";
import AutoCompletar from "@components/mui/AutoCompletar";
import { Suspense } from "react";
import { ORGANITATION } from "@constants";

export default function Cargo() {
  const { control } = useComponentContext();

  const { data } = useFetching(ORGANITATION.CARGO, {
    suspense: true,
  });

  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <AutoCompletar
        control={control}
        name="cargo"
        label="Cargo"
        options={data}
        span="9"
      />
    </Suspense>
  );
}

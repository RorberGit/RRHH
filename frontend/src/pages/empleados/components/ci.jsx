import { useComponentContext } from "@context/use-ComponentContext";
import CampoTexto from "@components/mui/CampoTexto";
import useValidarCI from "@pages/empleados/hooks/use-ValidarCI";

export default function Ci() {
  const { control, setError } = useComponentContext();

  const ValidarCI = useValidarCI();

  const handleOnBlur = async (event) => {
    const ci = event.target.value;

    if (!ci) return true;

    const resp = await ValidarCI(ci);

    if (!resp)
      setError("ci", {
        type: "manual",
        message: "Número de identidad: ya esta registrado",
      });
  };

  return (
    <CampoTexto
      control={control}
      name="ci"
      label="Número de Identidad"
      type="number"
      span="3"
      onBlur={handleOnBlur}
    />
  );
}

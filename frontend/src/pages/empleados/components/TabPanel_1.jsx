import { TabPanel } from "@mui/lab";
import { Box, Divider } from "@mui/material";
import { field_color_piel, field_sexo } from "../models/campos";
import { RUTAS_API } from "../../../constants";
import useGetData from "../../../hooks/use-GetData";
import {
  renderACompletar,
  renderCampoTexto,
  renderFecha,
} from "../../../components/mui/helpers/formHelpers";
import { useComponentContext } from "../../../context/use-ComponentContext";

import useValidarCI from "../hooks/use-ValidarCI";

export default function TabPanel_1() {
  const { control, setError } = useComponentContext();

  const nivel_escolar = useGetData(RUTAS_API.OTHER.NIVEL_ESCOLAR);
  const especialidad = useGetData(RUTAS_API.organization.ESPECIALIDAD);
  const procedencia = useGetData(RUTAS_API.OTHER.PROCEDENCIA);

  /*
  ! Si se lanza el evento de salir del campo de texto CI
  ! se valida si existe en la base de datos y en caso de existir
  ! se crea el error al respecto
  */

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
    <TabPanel value="1">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {renderCampoTexto(control, "nombre", "Nombre", "4")}
        {renderCampoTexto(control, "apellido_paterno", "Apellido paterno", "4")}
        {renderCampoTexto(control, "apellido_materno", "Apellido materno", "4")}
        {renderCampoTexto(
          control,
          "ci",
          "Número de Identidad",
          "3",
          "number",
          null,
          null,
          handleOnBlur
        )}

        {renderACompletar(control, "sexo", field_sexo, "Sexo", "3")}
        {renderACompletar(
          control,
          "color_piel",
          field_color_piel,
          "Color de la piel",
          "3"
        )}

        {renderCampoTexto(control, "telefono", "Teléfono", "3")}
      </Box>

      <Divider />

      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {/*//! Nivel espcolar */}
        {!nivel_escolar.loading &&
          renderACompletar(
            control,
            "ne",
            nivel_escolar.data,
            "Nivel Escolar",
            "6"
          )}

        {/* //! Especialidad */}
        {!especialidad.loading &&
          renderACompletar(
            control,
            "especialidad",
            especialidad.data,
            "Especialidad",
            "6"
          )}

        {/* //! Año de graduado */}
        {renderFecha(control, "ag", "Año de graduado", "6", ["year"])}

        {/* //! Procedencias */}
        {!procedencia.loading &&
          renderACompletar(
            control,
            "procedencia",
            procedencia.data,
            "Procedencia",
            "6"
          )}
      </Box>
    </TabPanel>
  );
}

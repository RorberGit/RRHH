import { TabPanel } from "@mui/lab";
import { Box, Divider } from "@mui/material";
import { field_color_piel, field_sexo } from "../resources/campos";
import { RUTAS_API } from "../../../constants";
import useGetData from "../../../hooks/use-GetData";
import {
  renderACompletar,
  renderCampoTexto,
  renderFecha,
} from "../../../components/mui/helpers/formHelpers";
import { useComponentContext } from "../../../context/use-ComponentContext";

export default function TabPanel_1() {
  const control = useComponentContext();
  
  const nivel_escolar = useGetData(RUTAS_API.OTHER.NIVEL_ESCOLAR);
  const especialidad = useGetData(RUTAS_API.organization.ESPECIALIDAD);
  const procedencia = useGetData(RUTAS_API.OTHER.PROCEDENCIA);

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
        {renderCampoTexto(control, "ci", "Número de Identidad", "3", "number")}

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

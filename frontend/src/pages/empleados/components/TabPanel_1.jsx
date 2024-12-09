import { TabPanel } from "@mui/lab";
import { Box, Divider } from "@mui/material";
import { field_color_piel, field_sexo } from "../models/campos";
import {
  renderACompletar,
  renderCampoTexto,
  renderFecha,
} from "../../../components/mui/helpers/formHelpers";
import { useComponentContext } from "@context/use-ComponentContext";
import NivelEscolar from "./nivel_escolar";
import Especialidad from "./especialidad";
import Procedencia from "./procedencia";
import Ci from "./ci";

export default function TabPanel_1() {
  const { control } = useComponentContext();

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

        <Ci />

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
        <NivelEscolar />

        {/* //! Especialidad */}
        <Especialidad />

        {/* //! Año de graduado */}
        {renderFecha(control, "ag", "Año de graduado", "6", ["year"])}

        {/* //! Procedencias */}
        <Procedencia />
      </Box>
    </TabPanel>
  );
}

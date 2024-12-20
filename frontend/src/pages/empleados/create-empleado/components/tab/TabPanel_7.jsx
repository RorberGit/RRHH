import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import { renderCampoTexto } from "@components/mui/helpers/formHelpers";
import Albergado from "../albergado";

export default function TabPanel_7() {
  const { control } = useEmpleadoContext();

  return (
    <TabPanel value="7">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {/* //! Albergado */}
        <Albergado />

        {renderCampoTexto(control, "aptoabg", "Apartamento", "6")}
        {renderCampoTexto(control, "bloque", "Bloque", "6")}
        {renderCampoTexto(control, "cuarto", "Cuarto", "6")}
        {renderCampoTexto(control, "po", "Parada omnibus", "6")}
        {renderCampoTexto(control, "ruta", "Ruta", "6")}
        {renderCampoTexto(control, "pantry", "Pantry", "6")}
      </Box>
    </TabPanel>
  );
}

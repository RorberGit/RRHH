import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { RUTAS_API } from "../../../constants/rutas.api";
import useGetData from "../../../hooks/use-GetData";
import { useComponentContext } from "../../../context/use-ComponentContext";
import {
  renderACompletar,
  renderCampoTexto,
} from "../../../components/mui/helpers/formHelpers";

export default function TabPanel_7() {
  const control = useComponentContext();

  const albergado = useGetData(RUTAS_API.OTHER.ALBERGADO);

  return (
    <TabPanel value="7">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {/* //! Albergado */}
        {!albergado.loading &&
          renderACompletar(
            control,
            "ajtvjt",
            albergado.data,
            "Albergado / Viajante",
            "6"
          )}

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

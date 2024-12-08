import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { RUTAS_API } from "../../../constants";
import useGetData from "../../../hooks/use-GetData";
import { useComponentContext } from "../../../context/use-ComponentContext";
import { renderACompletar } from "../../../components/mui/helpers/formHelpers";

export default function TabPanel_4() {
  const {control} = useComponentContext();

  const afiliacion = useGetData(RUTAS_API.integracion.AFILIACION);
  const organizacion = useGetData(RUTAS_API.integracion.ORGANIZACIONES);
  const defensa = useGetData(RUTAS_API.integracion.DEFENSA);

  return (
    <TabPanel value="4">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {/* //! Afiliacion*/}
        {!afiliacion.loading &&
          renderACompletar(
            control,
            "afp",
            afiliacion.data,
            "Afiliación política",
            "2",
            null,
            true
          )}

        {/* //! Organizacion*/}
        {!organizacion.loading &&
          renderACompletar(
            control,
            "orm",
            organizacion.data,
            "Organizaciones de masa",
            "2",
            null,
            true
          )}

        {/* //! Defensa*/}
        {!defensa.loading &&
          renderACompletar(
            control,
            "defensa",
            defensa.data,
            "Ubicación defensa",
            "2",
            null,
            true
          )}
      </Box>
    </TabPanel>
  );
}

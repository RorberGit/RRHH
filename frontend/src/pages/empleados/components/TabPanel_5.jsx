import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { RUTAS_API } from "../../../constants/rutas.api";
import useGetData from "../../../hooks/use-GetData";
import { useComponentContext } from "../../../context/use-ComponentContext";
import { renderACompletar } from "../../../components/mui/helpers/formHelpers";

export default function TabPanel_5() {
  const {control} = useComponentContext();

  const pantalon = useGetData(RUTAS_API.vestimenta.PANTALON);
  const camisa = useGetData(RUTAS_API.vestimenta.CAMISA);
  const calzado = useGetData(RUTAS_API.vestimenta.CALZADO);

  return (
    <TabPanel value="5">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {/*//! Calzado */}
        {!calzado.loading &&
          renderACompletar(
            control,
            "calzado",
            calzado.data,
            "Talla Calzado",
            "2"
          )}

        {/*//! Camisa */}
        {!camisa.loading &&
          renderACompletar(
            control,
            "camisa",
            camisa.data,
            "Talla Camisa / Blusa",
            "2"
          )}

        {/*//! Pantalon */}
        {!pantalon.loading &&
          renderACompletar(
            control,
            "pantalon",
            pantalon.data,
            "Talla pantalón",
            "2"
          )}
      </Box>
    </TabPanel>
  );
}

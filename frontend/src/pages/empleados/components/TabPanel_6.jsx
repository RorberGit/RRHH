import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import CuadroChequeo from "../../../components/mui/CuadroChequeo";
import { field_estado_vivienda } from "../resources/campos";
import { useComponentContext } from "../../../context/use-ComponentContext";
import { renderACompletar } from "../../../components/mui/helpers/formHelpers";

export default function TabPanel_6() {
  const control = useComponentContext();

  return (
    <TabPanel value="6">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {renderACompletar(
          control,
          "estado_vivienda",
          field_estado_vivienda,
          "Estado de la vivienda",
          "2"
        )}

        <CuadroChequeo
          name="propietario"
          label="Propietario"
          control={control}
          span="2"
        />

        <CuadroChequeo
          name="vivienda_vinculada"
          label="Vivienda vinculada"
          control={control}
          span="2"
        />
      </Box>
    </TabPanel>
  );
}

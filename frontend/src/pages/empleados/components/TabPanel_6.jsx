import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import CuadroChequeo from "../../../components/mui/CuadroChequeo";
import { AutoCompletar } from "../../../components/mui";
import { field_estado_vivienda } from "../resources/campos";

export default function TabPanel_6({ comun }) {
  return (
    <TabPanel value="6">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        <AutoCompletar
          name="estado_vivienda"
          label="Estado de la vivienda"
          options={field_estado_vivienda}
          span="2"
          {...comun}
        />

        <Box gridColumn="span 2" textAlign="center">
          <CuadroChequeo
            name="propietario"
            label="Propietario"            
            {...comun}
          />
        </Box>

        <Box gridColumn="span 2" textAlign="center">
          <CuadroChequeo
            name="vivienda_vinculada"
            label="Vivienda vinculada"            
            {...comun}
          />
        </Box>
      </Box>
    </TabPanel>
  );
}

TabPanel_6.propTypes = {
  comun: PropTypes.object,
};

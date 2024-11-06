import { TabPanel } from "@mui/lab";
import { AutoCompletar, CampoTexto } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { RUTAS_API } from "../../../constants/rutas.api";
import useGetData from "../../../hooks/use-GetData";

export default function TabPanel_7({ comun }) {
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
        {!albergado.loading && (
          <AutoCompletar
            name="ajtvjt"
            label="Albergado / Viajante"
            span="6"
            options={albergado.data}
            {...comun}
          />
        )}

        <CampoTexto
          name="aptoabg"
          label="Apartamento"
          span="6"
          {...comun}
        />

        <CampoTexto
          name="bloque"
          label="Bloque"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="cuarto"
          label="Cuarto"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="po"
          label="Parada omnibus"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="ruta"
          label="Ruta"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="pantry"
          label="Pantry"
          span="6"
          {...comun}
        />
      </Box>
    </TabPanel>
  );
}

TabPanel_7.propTypes = {
  comun: PropTypes.object,
};

import { TabPanel } from "@mui/lab";
import { AutoCompletar, CampoTexto } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import useGetData from "../../../hooks/use-GetData";

export default function TabPanel_2({ comun, setValue }) {
  const [municipioData, setMunicipioData] = useState(null);

  const provincia = useGetData("localidad/provincia/");
  const municipio = useGetData("localidad/municipio/");

  useEffect(() => {
    setMunicipioData(municipio.data);
  }, [municipio.data]);

  return (
    <TabPanel value="2">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <CampoTexto
          name="no"
          label="No"
          span="2"
          {...comun}
        />
        <CampoTexto
          name="calle"
          label="Calle"
          span="10"
          {...comun}
        />
        <CampoTexto
          name="entre"
          label="Entre"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="y"
          label="Y"
          span="6"
          {...comun}
        />
        <CampoTexto
          name="edif"
          label="Edificio"
          span="2"
          {...comun}
        />
        <CampoTexto
          name="apto"
          label="Apartamento"
          span="3"
          {...comun}
        />
        <CampoTexto
          name="poblado_barrio"
          label="Barrio/Poblado"
          span="7"
          {...comun}
        />

        {/* //! Provincia */}
        {!provincia.loading && (
          <AutoCompletar
            name="provincia"
            options={provincia.data}
            label="Provincia"
            onChange={(event, value) => {
              setValue("provincia", value);
              setMunicipioData(
                municipio.data.filter((item) => item.provincia.id === value.id)
              );
              setValue("municipio", null);
            }}
            span="6"
            {...comun}
          />
        )}

        {/* //! Municipio */}
        {!municipio.loading && (
          <AutoCompletar
            name="municipio"
            options={municipioData}
            label="Municipio"
            span="6"
            {...comun}
          />
        )}
      </Box>
    </TabPanel>
  );
}

TabPanel_2.propTypes = {
  comun: PropTypes.object,
  setValue: PropTypes.func,
};

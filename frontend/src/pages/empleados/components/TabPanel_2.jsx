import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import useGetData from "../../../hooks/use-GetData";
import {
  renderACompletar,
  renderCampoTexto,
} from "../../../components/mui/helpers/formHelpers";
import { useComponentContext } from "../../../context/use-ComponentContext";

export default function TabPanel_2({ setValue }) {
  const control = useComponentContext();

  const [municipios, setMunicipios] = useState([]);

  const { data: provincias, loading: provinciasLoading } = useGetData(
    "localidad/provincia/"
  );
  const { data: municipiosFull, loading: municipiosLoading } = useGetData(
    "localidad/municipio/"
  );

  useEffect(() => {
    if (!provinciasLoading && provincias) {
      setMunicipios(
        municipiosFull?.filter((item) => item.provincia.id === provincias[0].id)
      );
    }
  }, [provinciasLoading, provincias, municipiosFull]);

  return (
    <TabPanel value="2">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {renderCampoTexto(control, "no", "No", "2")}
        {renderCampoTexto(control, "calle", "Calle", "10")}
        {renderCampoTexto(control, "entre", "Entre", "6")}
        {renderCampoTexto(control, "y", "Y", "6")}
        {renderCampoTexto(control, "edif", "Edificio", "2")}
        {renderCampoTexto(control, "apto", "Apartamento", "3")}
        {renderCampoTexto(control, "poblado_barrio", "Barrio/Poblado", "7")}

        {/* //! Provincia */}
        {!provinciasLoading &&
          provincias &&
          renderACompletar(
            control,
            "provincia",
            provincias,
            "Provincia",
            "6",
            (event, value) => {
              if (value) {
                setValue("provincia", value);
                setMunicipios(
                  municipiosFull?.filter(
                    (item) => item.provincia.id === value.id
                  )
                );
                setValue("municipio", null);
              }
            }
          )}

        {/* //! Municipio */}
        {!municipiosLoading &&
          municipios &&
          renderACompletar(control, "municipio", municipios, "Municipio", "6")}
      </Box>
    </TabPanel>
  );
}

TabPanel_2.propTypes = {
  setValue: PropTypes.func,
};

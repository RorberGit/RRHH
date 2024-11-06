import { TabPanel } from "@mui/lab";
import { AutoCompletar, CampoTexto, Fecha } from "../../../components/mui";
import { Box, Divider } from "@mui/material";
import PropTypes from "prop-types";
import { field_color_piel, field_sexo } from "../resources/campos";
import { RUTAS_API } from "../../../constants";
import useGetData from "../../../hooks/use-GetData";

export default function TabPanel_1({ comun }) {
  const nivel_escolar = useGetData(RUTAS_API.OTHER.NIVEL_ESCOLAR);
  const especialidad = useGetData(RUTAS_API.organization.ESPECIALIDAD);
  const procedencia = useGetData(RUTAS_API.OTHER.PROCEDENCIA);

  return (
    <TabPanel value="1">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <CampoTexto
          name="nombre"
          label="Nombre"
          span="4"
          {...comun}
        />
        <CampoTexto
          name="apellido_paterno"
          label="Apellido paterno"
          span="4"
          {...comun}
        />
        <CampoTexto
          name="apellido_materno"
          label="Apellido materno"
          span="4"
          {...comun}
        />
        <CampoTexto
          type="number"
          name="ci"
          label="Número de Identidad"
          span="3"
          {...comun}
        />
        <AutoCompletar
          name="sexo"
          options={field_sexo}
          label="Sexo"
          span="3"
          {...comun}
        />
        <AutoCompletar
          name="color_piel"
          options={field_color_piel}
          label="Color de la Piel"
          span="3"
          {...comun}
        />
        <CampoTexto
          name="telefono"
          label="Teléfono"
          span="3"
          {...comun}
        />
      </Box>

      <Divider />

      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        {/*//! Nivel espcolar */}
        {!nivel_escolar.loading && (
          <AutoCompletar
            name="ne"
            label="Nivel Escolar"
            options={nivel_escolar.data}
            span="6"
            {...comun}
          />
        )}

        {/* //! Especialidad */}
        {!especialidad.loading && (
          <AutoCompletar
            name="especialidad"
            label="Especialidad"
            options={especialidad.data}
            span="6"
            {...comun}
          />
        )}

        {/* //! Año de graduado */}
        <Fecha
          name="ag"
          label="Año de graduado"
          span="6"
          views={["year"]}
          {...comun}
        />

        {/* //! Procedencias */}
        {!procedencia.loading && (
          <AutoCompletar
            name="procedencia"
            label="Procedencia"
            options={procedencia.data}
            span="6"
            {...comun}
          />
        )}
      </Box>
    </TabPanel>
  );
}

TabPanel_1.propTypes = {
  comun: PropTypes.object,
};

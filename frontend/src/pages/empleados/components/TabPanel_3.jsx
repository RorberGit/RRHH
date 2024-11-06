import { TabPanel } from "@mui/lab";
import { AutoCompletar } from "../../../components/mui";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { RUTAS_API } from "../../../constants";
import CuadroChequeo from "../../../components/mui/CuadroChequeo";
import Fecha from "../../../components/mui/Fecha";
import useGetData from "../../../hooks/use-GetData";

export default function TabPanel_3({ comun }) {
  const proyecto = useGetData(RUTAS_API.organization.PROYECTO);
  const area = useGetData(RUTAS_API.organization.AREA);
  const cargo = useGetData(RUTAS_API.organization.CARGO);

  const antiguedad = useGetData(RUTAS_API.OTHER.ANTIGUEDAD);

  const turno = useGetData(RUTAS_API.OTHER.TURNO);
  const pase = useGetData(RUTAS_API.OTHER.PASE);

  return (
    <TabPanel value="3">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(12, 1fr)"
      >
        <Box
          gridColumn="span 3"
          textAlign="center"
        >
          {/*//! Nuevo ingreso */}
          <CuadroChequeo
            name="nuevo_ingreso"
            label="Nuevo ingreso"
            {...comun}
          />
        </Box>

        {/* //! Proyectos*/}
        {!proyecto.loading && (
          <AutoCompletar
            name="proyecto"
            label="Proyecto"
            options={proyecto.data}
            span="4"
            {...comun}
          />
        )}

        {/* //! Área / Departamento */}
        {!area.loading && (
          <AutoCompletar
            name="areadpt"
            label="Área / Departamento"
            options={area.data}
            span="5"
            {...comun}
          />
        )}

        {/* //! Cargo */}
        {!cargo.loading && (
          <AutoCompletar
            name="cargo"
            label="Cargo"
            options={cargo.data}
            span="9"
            {...comun}
          />
        )}

        {/* //! Fecha */}
        <Fecha
          name="fecha_cc"
          label="Fecha de contrato en el cargo"
          span="3"
          {...comun}
        />

        {/* //! Antiguedad */}
        {!antiguedad.loading && (
          <AutoCompletar
            name="antdd"
            label="Antigüedad"
            options={antiguedad.data}
            span="3"
            {...comun}
          />
        )}
        <Box
          gridColumn="span 3"
          textAlign="center"
        >
          {/* //! Cobra por tarjeta */}
          <CuadroChequeo
            name="cpt"
            label="Cobra por tarjeta"
            {...comun}
          />
        </Box>

        {/* //! Turno */}
        {!turno.loading && (
          <AutoCompletar
            name="turno"
            label="Turno"
            options={turno.data}
            span="3"
            {...comun}
          />
        )}

        {/* //! Pase */}
        {!pase.loading && (
          <AutoCompletar
            name="pase"
            label="Pase (RTD)"
            options={pase.data}
            span="3"
            {...comun}
          />
        )}

        {/* //! Fecha de captado */}
        <Fecha
          name="fecha_captado"
          label="Fecha de captado"
          span="3"
          {...comun}
        />
      </Box>
    </TabPanel>
  );
}

TabPanel_3.propTypes = {
  comun: PropTypes.object,
};

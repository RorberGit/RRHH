import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { RUTAS_API } from "../../../constants";
import CuadroChequeo from "../../../components/mui/CuadroChequeo";
import useGetData from "../../../hooks/use-GetData";
import { field_mano_obra } from "../models/campos";
import { useComponentContext } from "../../../context/use-ComponentContext";
import {
  renderACompletar,
  renderFecha,
} from "../../../components/mui/helpers/formHelpers";

export default function TabPanel_3() {
  const {control} = useComponentContext();

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
        {/*//! Nuevo ingreso */}
        {renderACompletar(
          control,
          "mano_obra",
          field_mano_obra,
          "Mano de obra",
          "3"
        )}
        {/* //! Proyectos*/}
        {!proyecto.loading &&
          renderACompletar(control, "proyecto", proyecto.data, "Proyecto", "4")}
        {/* //! Área / Departamento */}
        {!area.loading &&
          renderACompletar(
            control,
            "areadpt",
            area.data,
            "Área / Departamento",
            "5"
          )}
        {/* //! Cargo */}
        {!cargo.loading &&
          renderACompletar(control, "cargo", cargo.data, "Cargo", "9")}
        {/* //! Fecha */}
        {renderFecha(control, "fecha_cc", "Fecha de contrato en el cargo", "3")}

        {/* //! Antiguedad */}
        {!antiguedad.loading &&
          renderACompletar(
            control,
            "antdd",
            antiguedad.data,
            "Antigüedad",
            "3"
          )}

        {/* //! Cobra por tarjeta */}
        <CuadroChequeo
          name="cpt"
          label="Cobra por tarjeta"
          control={control}
          span="3"
        />

        {/* //! Turno */}
        {!turno.loading &&
          renderACompletar(control, "turno", turno.data, "Turno", "3")}
        {/* //! Pase */}
        {!pase.loading &&
          renderACompletar(control, "pase", pase.data, "Pase (RTD)", "3")}
        {/* //! Fecha de captado */}
        {renderFecha(control, "fecha_captado", "Fecha de captado", "4")}
      </Box>
    </TabPanel>
  );
}

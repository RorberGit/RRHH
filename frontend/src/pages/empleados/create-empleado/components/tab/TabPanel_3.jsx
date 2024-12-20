import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import CuadroChequeo from "@components/mui/CuadroChequeo";
import { field_mano_obra } from "../../models/campos";
import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import {
  renderACompletar,
  renderFecha,
} from "@components/mui/helpers/formHelpers";
import Proyecto from "../proyecto";
import Area from "../area";
import Cargo from "../cargo";
import Antiguedad from "../antiguedad";
import Turno from "../turno";
import Pase from "../pase";

export default function TabPanel_3() {
  const { control } = useEmpleadoContext();

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
        <Proyecto />

        {/* //! Área / Departamento */}
        <Area />

        {/* //! Cargo */}
        <Cargo />

        {/* //! Fecha */}
        {renderFecha(control, "fecha_cc", "Fecha de contrato en el cargo", "3")}

        {/* //! Antiguedad */}
        <Antiguedad />

        {/* //! Cobra por tarjeta */}
        <CuadroChequeo
          name="cpt"
          label="Cobra por tarjeta"
          control={control}
          span="3"
        />

        {/* //! Turno */}
        <Turno />

        {/* //! Pase */}
        <Pase />

        {/* //! Fecha de captado */}
        {renderFecha(control, "fecha_captado", "Fecha de captado", "4")}
      </Box>
    </TabPanel>
  );
}

import { Box } from "@mui/material";
import { AutocompletarProyecto } from "./autocompletar_proyecto";
import { AutocompletarCargo } from "./autocompletar_cargo";

export function Activar() {
  return (
    <Box>
      <AutocompletarProyecto />
      <AutocompletarCargo />
    </Box>
  );
}

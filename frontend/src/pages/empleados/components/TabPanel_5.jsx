import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import Calzado from "./calzado";
import Camisa from "./camisa";
import Pantalon from "./pantalon";

export default function TabPanel_5() {
  return (
    <TabPanel value="5">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {/*//! Calzado */}
        <Calzado />

        {/*//! Camisa */}
        <Camisa />

        {/*//! Pantalon */}
        <Pantalon />
      </Box>
    </TabPanel>
  );
}

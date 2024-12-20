import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import Afiliacion from "../afiliacion";
import Organizacion from "../organizacion";
import Defensa from "../defensa";

export default function TabPanel_4() {
  return (
    <TabPanel value="4">
      <Box
        display="grid"
        gap="15px 10px"
        m={2}
        gridTemplateColumns="repeat(6, 1fr)"
      >
        {/* //! Afiliacion*/}
        <Afiliacion />

        {/* //! Organizacion*/}
        <Organizacion />

        {/* //! Defensa*/}
        <Defensa />
      </Box>
    </TabPanel>
  );
}

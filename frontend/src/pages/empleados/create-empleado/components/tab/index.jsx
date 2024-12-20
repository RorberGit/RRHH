import TabContenedor from "@pages/empleados/create-empleado/components/tab/TabContenedor";
import TabPanel_1 from "@pages/empleados/create-empleado/components/tab/TabPanel_1";
import TabPanel_2 from "@pages/empleados/create-empleado/components/tab/TabPanel_2";
import TabPanel_3 from "@pages/empleados/create-empleado/components/tab/TabPanel_3";
import TabPanel_4 from "@pages/empleados/create-empleado/components/tab/TabPanel_4";
import TabPanel_5 from "@pages/empleados/create-empleado/components/tab/TabPanel_5";
import TabPanel_6 from "@pages/empleados/create-empleado/components/tab/TabPanel_6";
import TabPanel_7 from "@pages/empleados/create-empleado/components/tab/TabPanel_7";
export default function Tab() {
  return (
    <TabContenedor>
      {/* //! Datos personales */}
      <TabPanel_1 />

      {/* //! Dirección particular */}
      <TabPanel_2 />

      {/* //! Datos laborales */}
      <TabPanel_3 />

      {/*//! Afiliaciones */}
      <TabPanel_4 />

      {/* //! Vestimenta de trabajo */}
      <TabPanel_5 />

      {/* //! Vivienda */}
      <TabPanel_6 />

      {/* //! Alojamiento */}
      <TabPanel_7 />
    </TabContenedor>
  );
}

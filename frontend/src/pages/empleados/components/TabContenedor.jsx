import { TabContext, TabList } from "@mui/lab";
import { Tab } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
export default function TabContenedor(props) {
  const [value, setValue] = useState("1");

  const handleChangeTabList = (_, Value) => {
    setValue(Value);
  };

  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChangeTabList}
        aria-label="lab API tabs example"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Datos personales" value="1"></Tab>
        <Tab label="Dirección particular" value="2"></Tab>
        <Tab label="Datos laborales" value="3"></Tab>
        <Tab label="Afiliaciones" value="4"></Tab>
        <Tab label="Vestimenta de trabajo" value="5"></Tab>
        <Tab label="Vivienda" value="6"></Tab>
        <Tab label="Alojamiento" value="7"></Tab>
      </TabList>
      {props.children}
    </TabContext>
  );
}
TabContenedor.propTypes = {
  children: PropTypes.any,
};

import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PropTypes from "prop-types";
import ListItemButtonMUI from "./ListItemButtonMUI";
import { ExpandLess } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import generarUUID from "../utilities/generarUUID";

const MapItem = (item) => {
  if (!item.length) return;

  return item.map((item) => (
    <ListItemButtonMUI
      key={generarUUID()}
      icon={item.icon}
      title={item.title}
      path={item.path}
      sx={{pl:4}}
    />
  ));
};

function CollapseMUI(props) {
  const { icon, title, item } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <ListItemButton onClick={() => setOpen((prev) => !prev)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {/**CHILDREN */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            //Listar Items
            MapItem(item)
          }
        </List>
      </Collapse>
    </>
  );
}

CollapseMUI.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  item: PropTypes.array,
};

export default CollapseMUI;

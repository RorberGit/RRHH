//Make a List Item Button with Material UI

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListItemButtonMUI(props) {
  const { icon, title, path, sx } = props;

  return (
    <ListItemButton sx={sx} component={Link} to={path}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}

ListItemButtonMUI.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  path: PropTypes.string,
  sx: PropTypes.object,
};

export default ListItemButtonMUI;

import { Divider, List } from "@mui/material";
import PropTypes from "prop-types";
import ListItemButtonMUI from "./ListItemButtonMUI";
import CollapseMUI from "./CollapseMUI";
import generarUUID from "../utilities/generarUUID";

function MenuItem(props) {
  const { items } = props;

  return (
    <List component="nav">
      {items.map((item) => {
        //Si existe imprimir un divisor
        if (item.divider) return <Divider key={generarUUID()} sx={{ my: 1 }} />;

        if (item.children?.length)
          return (
            <CollapseMUI
              key={generarUUID()}
              icon={item.icon}
              title={item.title}
              item={item.children}
            />
          );
        else
          return (
            <ListItemButtonMUI
              key={generarUUID()}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          );
      })}
    </List>
  );
}

MenuItem.propTypes = {
  items: PropTypes.array,
};

export default MenuItem;

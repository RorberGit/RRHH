import MuiDrawer from "@mui/material/Drawer";
import { IconButton, Toolbar, styled } from "@mui/material";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { ListItems } from "./constants/ListItems";
import { ArrowBack } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "&": {
    //! El & hace referencia a MuiDrawer-root
    height: "100%",
  },
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(6),
      },
    }),
  },
}));

export default function PermanentDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Drawer variant="permanent" open={isDrawerOpen}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={() => setIsDrawerOpen((prev) => !prev)}>
          {isDrawerOpen ? (
            <ArrowBack color="primary" />
          ) : (
            <ArrowForward color="primary" />
          )}
        </IconButton>
      </Toolbar>
      {isDrawerOpen && <MenuItem items={ListItems} />}
    </Drawer>
  );
}

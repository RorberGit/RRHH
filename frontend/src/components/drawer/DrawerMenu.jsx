import MuiDrawer from "@mui/material/Drawer";
import { IconButton, Toolbar, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { ListItems } from "./constants/ListItems";

/* const Drawer = styled(MuiDrawer)({
  width: 240,
  transition: 'width 0.2s ease-in-out',
});

const drawerWidth = 240; */

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    marginTop: 65,
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
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function PermanentDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

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
          {isDrawerOpen ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Toolbar>
      {ListItems && <MenuItem items={ListItems} />}
    </Drawer>
  );
}

import MuiDrawer from "@mui/material/Drawer";
import { IconButton, Toolbar, styled } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { Dashboard } from "@mui/icons-material";
import { Person } from "@mui/icons-material";
import { PersonAdd } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import { People } from "@mui/icons-material";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    marginTop: 65,
    width: drawerWidth,
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

const ListItems = [
  {
    divider: true,
  },
  {
    icon: <Dashboard />,
    title: "Dashboard",
    path: "/",
  },
  {
    icon: <Person />,
    title: "Asistencia",
    path: "ontime",
  },
  {
    icon: <Person />,
    title: "Empleados",
    children: [
      {
        icon: <Person />,
        title: "Listar",
        path: "employee/listing",
      },
      {
        icon: <PersonAdd />,
        title: "Crear",
        path: "employee/create",
      },
    ],
  },
  {
    divider: true,
  },
  {
    icon: <Person />,
    title: "Usuarios",
    children: [
      {
        title: "Listar",
        icon: <People />,
        path: "users/listing",
      },
      {
        title: "Crear",
        icon: <PersonAdd />,
        path: "users/form",
      },
    ],
  },
  {
    divider: true,
  },
  {
    icon: <Logout />,
    title: "Cerrar Sesión",
    path: "login",
  },
];

export default function DrawerMenu() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Toolbar>

      <MenuItem items={ListItems} />
    </Drawer>
  );
}

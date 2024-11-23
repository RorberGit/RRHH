import {
  Dashboard,
  Person,
  PersonAdd,
  People,
  Logout,
} from "@mui/icons-material";

export const ListItems = [
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

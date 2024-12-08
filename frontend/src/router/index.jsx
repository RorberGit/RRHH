import { createBrowserRouter } from "react-router-dom";
import Layaut from "./root";
import Dashboard from "../pages/dashboard";
import Asistencia from "../pages/asistencia";
import Listado from "../pages/empleados/Listado";
import FormEmpleado from "../pages/empleados/views/FormEmpleado";
import Login from "../pages/login";
import Persist from "../components/Persist";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    element: <Persist />,
    children: [
      {
        path: "/",
        element: <Layaut />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "ontime",
            element: <Asistencia />,
          },
          {
            path: "employee",
            children: [
              {
                path: "listing",
                element: <Listado />,
              },
              {
                path: "create",
                element: <FormEmpleado />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

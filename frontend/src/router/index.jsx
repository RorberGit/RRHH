import { createBrowserRouter } from "react-router-dom";
import Layaut from "./layaut";
import Dashboard from "@pages/dashboard";
import Asistencia from "@pages/asistencia";
import ListarEmpleados from "@pages/empleados/list-empleados";
import CreateEmpleado from "@pages/empleados/create-empleado";
import DetailEmpleado from "@pages/empleados/detail-empleado";
import Login from "@pages/login";
import Persist from "@components/Persist";

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
                element: <ListarEmpleados />,
              },
              {
                path: "create",
                element: <CreateEmpleado />,
              },
              {
                path: "detail",
                element: <DetailEmpleado />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

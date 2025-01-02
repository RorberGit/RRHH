import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import Layaut from "./layaut";
import Login from "@pages/login";
import Persist from "@components/Persist";

import { Asistencia, Dashboard } from "./lazy";
import { employeeRoutes } from "./employeeRoutes";

const router = createBrowserRouter([
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
            children: employeeRoutes,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;

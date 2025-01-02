import { lazy } from "react";

export const Dashboard = lazy(() => import("@pages/dashboard"));
export const Asistencia = lazy(() => import("@pages/asistencia"));
export const CreateEmpleado = lazy(() =>
  import("@pages/empleados/create-empleado")
);
export const ListarEmpleados = lazy(() =>
  import("@pages/empleados/list-empleados")
);
export const DetailEmpleado = lazy(() =>
  import("@pages/empleados/detail-empleado")
);

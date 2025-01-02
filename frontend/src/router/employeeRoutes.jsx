import { CreateEmpleado, ListarEmpleados, DetailEmpleado } from "./lazy";

export const employeeRoutes = [
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
];

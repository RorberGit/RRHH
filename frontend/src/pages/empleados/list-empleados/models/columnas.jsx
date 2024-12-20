import { Visibility } from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";
import getFullName from "@pages/empleados/helpers/getFullName";

export const columns = (navigate) => [
  {
    field: "actions",
    type: "actions",
    width: 100,
    getActions: (params) => [
      <GridActionsCellItem
        key={`deltails-${params.id}`}
        icon={<Visibility color="primary" />}
        label="Detalles"
        onClick={() => {
          navigate(`/employee/detail?id=${params.row.id}`);
        }}
      />,
    ],
  },
  { field: "nip", type: "string", headerName: "NIP", width: 50 },
  { field: "ci", type: "string", headerName: "C. Identidad", width: 110 },
  {
    field: "nombrecompleto",
    headerName: "Nombre y Apellidos",
    width: 200,
    valueGetter: (_value, row) => getFullName(row),
  },
  {
    field: "proyecto",
    type: "string",
    headerName: "Proyecto",
    width: 120,
    valueGetter: (_, row) => row.proyecto?.nombre,
  },
  {
    field: "areadpt",
    type: "string",
    headerName: "Área / Departamento",
    width: 160,
    valueGetter: (_, row) => row.areadpt?.nombre,
  },
  {
    field: "cargo",
    type: "string",
    headerName: "Cargo",
    width: 180,
    valueGetter: (_, row) => row.cargo?.nombre,
  },
  {
    field: "mano_obra",
    type: "string",
    headerName: "Mano de Obra",
    width: 120,
    valueGetter: (_, row) =>
      row.mano_obra === "MOD" ? "Directa" : "Indirecta",
  },
  {
    field: "fecha_cc",
    type: "date",
    headerName: "Fecha de contratado",
    width: 150,
    valueGetter: (value) => {
      return value && new Date(value);
    },
  },
];

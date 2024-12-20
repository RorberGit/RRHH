import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { RUTAS_API } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import { Tabla } from "../../components/mui";
import { useCallback, useMemo } from "react";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { useRouter } from "@hooks/use-router";

export default function Lista() {
  const { data, error, loading } = useFetch(RUTAS_API.USERS.LISTING);
  const router = useRouter();

  const deleteUser = useCallback(
    (value) => () => {
      console.info("Delete :>", value);
    },
    []
  );

  const editUser = useCallback(
    (value) => () => {
      console.info("Edit :>", value);
    },
    []
  );

  const handleAddUser = () => {
    router.push("/usuarios/formulario");
  };

  const columns = useMemo(
    () => [
      {
        type: "number",
        field: "id",
        headerName: "id",
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        type: "string",
        field: "username",
        headerName: "Usuario",
        width: 100,
        align: "center",
        headerAlign: "center",
      },
      {
        field: "nombre",
        headerName: "Nombre y Apellidos",
        width: 200,
        align: "left",
        headerAlign: "left",
        valueGetter: (_, row) => {
          if (!row || !row.empleados) {
            return "";
          }
          const { nombre, apellido_paterno, apellido_materno } = row.empleados;
          return `${nombre} ${apellido_paterno} ${apellido_materno}`;
        },
      },
      {
        type: "date",
        field: "date_joined",
        headerName: "Creado",
        width: 100,
        valueGetter: (_, row) => {
          if (!row) return;
          return new Date(row.date_joined);
        },
      },
      {
        type: "dateTime",
        field: "last_login",
        headerName: "Último inicio de sesión",
        width: 200,
        valueGetter: (_, row) => {
          if (!row) return;
          return new Date(row.last_login);
        },
      },
      {
        field: "actions",
        type: "actions",
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            key={1}
            icon={<Delete color="error" />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            key={2}
            icon={<Edit color="success" />}
            label="Delete"
            onClick={editUser(params.id)}
          />,
        ],
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  if (loading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, display: "block", flexDirection: "column" }}>
          <>
            <Stack spacing={2}>
              <Typography variant="h5">Lista de usuarios</Typography>
              <Button variant="contained" onClick={handleAddUser}>
                Agregar Usuario
              </Button>
              {error && <Alert severity="error">{error}</Alert>}
              <Tabla rows={data} columns={columns} />
            </Stack>
          </>
        </Paper>
      </Container>
    </>
  );
}

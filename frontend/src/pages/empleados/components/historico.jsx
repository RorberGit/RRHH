import PropTypes from "prop-types";
import Titulo from "./titulo";
import {
  Chip,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useFetching } from "@hooks/use-Fetching";
import { PATH_API } from "@constants";
import { useDetalleContext } from "../detail-empleado/contexts/useDetalleContext";

import { mutate } from "swr";
import { useEffect } from "react";

//! Establecer estilo de la celdas
const Cell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
  },
}));

//! Establecer el color dependiendo del estado
const getColor = (estado = "") => {
  return estado === "Contratado"
    ? "primary"
    : estado === "Modificado"
    ? "default"
    : estado === "Activado"
    ? "success"
    : estado === "Desactivado"
    ? "error"
    : "info";
};

export default function Historico() {
  const { id, refresh } = useDetalleContext();

  //! Obtener los datos
  const { data, loading } = useFetching(
    `${PATH_API.EMPLOYEE.HISTORIC.LISTING}?id=${id}`
  );

  useEffect(() => {
    if (refresh) {
      // Forzar revalidación de datos usando mutate
      mutate(`${PATH_API.EMPLOYEE.HISTORIC.LISTING}?id=${id}`);
    }
  }, [refresh, id]); // Dependencias en refresh e id

  //! Si loading mostrar cargando
  if (loading) return <h2>Cargando...</h2>;

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 1 }}>
        <Titulo title="Historico" />
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <Cell>Estado</Cell>
              <Cell>Creado por</Cell>
              <Cell>Fecha</Cell>
              <Cell>Descripción</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Cell sx={{ width: "30px" }}>
                    <Chip
                      key={item.id}
                      label={item.estado}
                      color={getColor(item.estado)}
                      sx={{ width: "100px" }}
                    />
                  </Cell>
                  <Cell sx={{ width: "220px" }}>{item.creado_por}</Cell>
                  <Cell sx={{ width: "120px" }}>{item.fecha}</Cell>
                  <Cell>{item.descripcion}</Cell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

Historico.propTypes = {
  refresh: PropTypes.bool,
};

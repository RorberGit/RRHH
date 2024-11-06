import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import PropTypes from "prop-types";
import RegistroAsistencia from "../components/RegistroAsistencia";
import generarUUID from "../../../utilities/generarUUID";
import { StyledTableCell, StyledTableRow } from "../components/FilasCeldas";

export default function Registro({ data, loading, horaEntrada, horaSalida }) {
  if (loading) {
    return (
      <div>
        <b>Cargando...</b>
      </div>
    );
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>NIP</StyledTableCell>
              <StyledTableCell>Nombre y Apellidos</StyledTableCell>
              <StyledTableCell>Hora de Entrada</StyledTableCell>
              <StyledTableCell>Diferencia</StyledTableCell>
              <StyledTableCell>Hora de Salida</StyledTableCell>
              <StyledTableCell>Diferencia</StyledTableCell>
              <StyledTableCell>Horas Trabajadas</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((registro) => (
                <RegistroAsistencia
                  key={generarUUID()}
                  registro={registro}
                  HoraInicio={horaEntrada ? horaEntrada : null}
                  HoraFin={horaSalida ? horaSalida : null}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

Registro.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  horaEntrada: PropTypes.string,
  horaSalida: PropTypes.string,
};

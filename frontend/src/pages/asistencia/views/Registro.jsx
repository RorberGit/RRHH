import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import moment from "moment";
import { useCallback } from "react";
import calcularDiferenciaTiempo from "./calcularDiferenciaTiempo";
import calcularHorasTrabajadas from "./calcularHorasTrabajadas";
import uuid from "../../../utilities/generarUUID";
import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Registro({ data, loading, horaEntrada, horaSalida }) {
  const renderRow = useCallback(
    (row) => {
      const NIP = row.empleado.nip;
      const NombreCompleto = `${row.empleado.nombre} ${row.empleado.apellido_paterno} ${row.empleado.apellido_materno}`;
      const EntradaRegistrada = moment(row.fecha_y_hora_entrada)
        .utc()
        .format("h:mm A");
      const DiferenciaEntrada = horaEntrada
        ? calcularDiferenciaTiempo(EntradaRegistrada, horaEntrada)
        : "No definido";

      const SalidaRegistrada = row.fecha_y_hora_salida
        ? moment(row.fecha_y_hora_salida).utc().format("h:mm A")
        : "Trabajando";

      const DiferenciaSalida =
        SalidaRegistrada !== "Trabajando"
          ? horaSalida
            ? calcularDiferenciaTiempo(SalidaRegistrada, horaSalida)
            : "No Definido"
          : "Trabajando";

      //! Si existe entrada registrada y SalidaRegistrada diferente de "Trabajando" calcular las horas trabajadas
      const HorasTrabajadas =
        EntradaRegistrada && SalidaRegistrada !== "Trabajando"
          ? calcularHorasTrabajadas(EntradaRegistrada, SalidaRegistrada)
          : "No definido";

      //! Si existe una hora de entrada calcular la diferencia con la hora de entrada
      const entradaTarde = EntradaRegistrada
        ? moment(EntradaRegistrada, "h:mm A")
            .subtract(10, "minutes")
            .isAfter(moment(horaEntrada, "h:mm A"))
        : null;

      //! Si SalidaRegistrada no es "Trabajando" y existe la hora de salida calcular la diferencia con la hora de salida
      const salidaTemprana =
        SalidaRegistrada !== "Trabajando" && horaSalida
          ? moment(SalidaRegistrada, "h:mm A").isBefore(
              moment(horaSalida, "h:mm A")
            )
          : null;

      return (
        <StyledTableRow key={uuid()}>
          <StyledTableCell>{NIP}</StyledTableCell>
          <StyledTableCell style={{ minWidth: "200px" }}>
            {NombreCompleto}
          </StyledTableCell>
          <StyledTableCell style={{ minWidth: "110px" }}>
            {EntradaRegistrada}
          </StyledTableCell>
          <StyledTableCell>
            <span style={{ color: entradaTarde ? "red" : "inherit" }}>
              {DiferenciaEntrada}
            </span>
          </StyledTableCell>
          <StyledTableCell style={{ minWidth: "110px" }}>
            {SalidaRegistrada}
          </StyledTableCell>
          <StyledTableCell>
            <span style={{ color: salidaTemprana ? "red" : "inherit" }}>
              {DiferenciaSalida}
            </span>
          </StyledTableCell>
          <StyledTableCell>{HorasTrabajadas}</StyledTableCell>
        </StyledTableRow>
      );
    },
    [horaEntrada, horaSalida]
  );

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
          <TableBody>{data && data.map(renderRow)}</TableBody>
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

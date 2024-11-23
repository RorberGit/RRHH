import moment from "moment";
import PropTypes from "prop-types";
import calcularDiferenciaTiempo from "../helpers/calcularDiferenciaTiempo";
import { StyledTableCell, StyledTableRow } from "./FilasCeldas";
import calcularHorasTrabajadas from "../helpers/calcularHorasTrabajadas";

export default function RegistroAsistencia({ registro, HoraInicio, HoraFin }) {
  //! Renderizar los datos
  const { empleado, fecha_y_hora_entrada, fecha_y_hora_salida } = registro;
  const { nip, nombre, apellido_paterno, apellido_materno } = empleado;
  const NombreCompleto = `${nombre} ${apellido_paterno} ${apellido_materno}`;

  //! Convertir HoraEntrada y HoraSalida si existe en formato de 12 horas
  const HoraEntrada = moment(fecha_y_hora_entrada).utc().format("h:mm A");

  const HoraSalida = fecha_y_hora_salida
    ? moment(fecha_y_hora_salida).utc().format("h:mm A")
    : "Trabajando";

  //! Si existe la hora de comezar a laborar se calcula la diferencia con la Hora de Entrada
  const DiferenciaEntrada = HoraInicio
    ? calcularDiferenciaTiempo(HoraEntrada, HoraInicio)
    : "No definido";

  //! Si existe la hora de salida y a terminado de laborar calcular la diferencia de tiempo
  const DiferenciaSalida =
    HoraSalida !== "Trabajando"
      ? HoraFin
        ? calcularDiferenciaTiempo(HoraSalida, HoraFin)
        : "No Definido"
      : "Trabajando";

  //! Si existe hora de entrada y Salida diferente de "Trabajando" calcular las horas trabajadas
  const HorasTrabajadas =
    HoraEntrada && HoraSalida !== "Trabajando"
      ? calcularHorasTrabajadas(HoraEntrada, HoraSalida)
      : "No definido";

  //! Si existe una hora de entrada y la hora de inicio calcular la diferencia con la hora de entrada
  const llegadaTarde =
    HoraEntrada && HoraInicio
      ? moment(HoraEntrada, "h:mm A")
          .subtract(10, "minutes")
          .isAfter(moment(HoraInicio, "h:mm A"))
      : null;

  //! Si Salida no es "Trabajando" y existe la hora de salida calcular la diferencia con la hora de salida
  const salidaTemprana =
    HoraSalida !== "Trabajando" && HoraFin
      ? moment(HoraSalida, "h:mm A").isBefore(moment(HoraFin, "h:mm A"))
      : null;

  return (
    <StyledTableRow>
      <StyledTableCell>{nip}</StyledTableCell>
      <StyledTableCell style={{ minWidth: "200px" }}>
        {NombreCompleto}
      </StyledTableCell>
      <StyledTableCell style={{ minWidth: "110px" }}>
        {HoraEntrada}
      </StyledTableCell>
      <StyledTableCell>
        <span style={{ color: llegadaTarde ? "red" : "inherit" }}>
          {DiferenciaEntrada}
        </span>
      </StyledTableCell>
      <StyledTableCell style={{ minWidth: "110px" }}>
        {HoraSalida}
      </StyledTableCell>
      <StyledTableCell>
        <span style={{ color: salidaTemprana ? "red" : "inherit" }}>
          {DiferenciaSalida}
        </span>
      </StyledTableCell>
      <StyledTableCell>{HorasTrabajadas}</StyledTableCell>
    </StyledTableRow>
  );
}

RegistroAsistencia.propTypes = {
  registro: PropTypes.object,
  HoraInicio: PropTypes.string,
  HoraFin: PropTypes.string,
};

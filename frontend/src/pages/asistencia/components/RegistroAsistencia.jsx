import moment from "moment";
import PropTypes from "prop-types";
import calcularDiferenciaTiempo from "../views/calcularDiferenciaTiempo";

export default function RegistroAsistencia({ registro, HoraInicio, HoraFin }) {
  //! Renderizar los datos
  const { empleado, fecha_y_hora_entrada, fecha_y_hora_salida } = registro;
  const { nip, nombre, apellido_paterno, apellido_materno } = empleado;
  const NombreCompleto = `${nombre} ${apellido_paterno} ${apellido_materno}`;

  //! Convertir HoraEntrada y HoraSalida si existe en formato de 12 horas
  const HoraEntrada = moment(fecha_y_hora_entrada).format("h.mm A");
  const HoraSalida = HoraSalida
    ? moment(fecha_y_hora_salida).format("h:mm A")
    : "Trabajando";

  //! Si existe la hora de comezar a laborar se calcula la diferencia con la Hora de Entrada
  const DiferenciaEntrada = HoraInicio
    ? calcularDiferenciaTiempo(HoraEntrada, HoraInicio)
    : "No definido";

  return (
    <div>
      RegistroAsistencia
      <div>NIP: {nip}</div>
      <div>Nombre Completo: {NombreCompleto}</div>
    </div>
  );
}

RegistroAsistencia.propTypes = {
  registro: PropTypes.object,
};

import { useMemo } from "react";
import moment from "moment/min/moment-with-locales";
import PropTypes from "prop-types";

export default function Jornada({ horaEntrada, horaSalida }) {
  //! Obtener el dia de la semana actual en español
  const diaActualES = useMemo(() => moment().locale("es").format("dddd"), []);

  return (
    <>
      <strong>{diaActualES}</strong>
      <br />
      Entrada: {horaEntrada ? horaEntrada : "No definida"}
      <br />
      Salida: {horaSalida ? horaSalida : "No definida"}
    </>
  );
}

Jornada.propTypes = {
  horaEntrada: PropTypes.string,
  horaSalida: PropTypes.string,
};

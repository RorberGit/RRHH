import moment from "moment";

/**
 * Calcula la diferencia de tiempo entre dos horas y la formatea.
 * @param {string} hora1 - Primera hora en formato "HH:mm A"
 * @param {string} hora2 - Segunda hora en formato "HH:mm A"
 * @returns {string} Diferencia de tiempo formateada como "HH:mm:ss"
 */
const calcularDiferenciaTiempo = (hora1, hora2) => {
  const momento1 = moment(hora1, "h:mm A");
  const momento2 = moment(hora2, "h:mm A");

  const diferencia = moment.duration(momento1.diff(momento2));

  const horas = Math.abs(diferencia.hours());
  const minutos = Math.abs(diferencia.minutes());
  const segundos = Math.abs(diferencia.seconds());

  return `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
};

export default calcularDiferenciaTiempo;

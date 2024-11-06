import moment from 'moment';

const calcularHorasTrabajadas = (entradaRegistrada, salidaRegistrada) => {
  // Si no hay salida registrada, retornar "No registrada"
  if (salidaRegistrada === "No registrada") {
    return "No registrada";
  }

  // Convertir las horas de entrada y salida a objetos moment
  const entrada = moment(entradaRegistrada, "h:mm A");
  const salida = moment(salidaRegistrada, "h:mm A");

  // Calcular la diferencia en minutos
  let diferenciaMinutos = salida.diff(entrada, 'minutes');

  // Restar 60 minutos (1 hora) por el almuerzo
  diferenciaMinutos -= 60;

  // Si la diferencia es negativa, retornar "0:00"
  if (diferenciaMinutos <= 0) {
    return "0:00";
  }

  // Convertir los minutos a horas y minutos
  const horas = Math.floor(diferenciaMinutos / 60);
  const minutos = diferenciaMinutos % 60;

  // Formatear el resultado
  return `${horas}:${minutos.toString().padStart(2, '0')}`;
};

export default calcularHorasTrabajadas;

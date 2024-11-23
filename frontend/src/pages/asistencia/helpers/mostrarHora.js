import moment from "moment";

function mostrarHora() {
  //const horaActual = moment().format('HH:mm:ss');
  const horaActual = moment().format("LTS");

  return horaActual;
}

export default mostrarHora;

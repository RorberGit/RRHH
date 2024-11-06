import moment from "moment";
import diasSemana from "./diasSemana";

const obtenerFechaActual = () => {
    const fecha = new Date();
    const diaSemana = diasSemana[fecha.getDay()];
    const fechaFormateada = fecha.toLocaleDateString();
    const horaFormateada = moment().format('LTS');

    return {
        diaSemana,
        fecha: fechaFormateada,
        hora: horaFormateada
    };
};

export default obtenerFechaActual;

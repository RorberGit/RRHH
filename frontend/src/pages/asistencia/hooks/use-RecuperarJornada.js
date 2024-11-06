import moment from "moment";
import { useMemo } from "react";
import diasSemana from "../views/diasSemana";
import useGetData from "../../../hooks/use-GetData";
import { RUTAS_API } from "../../../constants";
import { useEffect } from "react";
import { useState } from "react";

export default function useRecuperarJornada() {
  const [horaEntrada, setHoraEntrada] = useState(null);
  const [horaSalida, setHoraSalida] = useState(null);

  //! Obtener el día de la semana actual
  const ActualDiaSemana = useMemo(() => diasSemana[moment().day()], []);

  //! Recuperar Jornada dado el dia semana actual
  const { data, loading } = useGetData(
    `${RUTAS_API.asistencia.JORNADA}/${ActualDiaSemana}`
  );

  //! Si existen datos formatear la hora entrada y la salida, poner en el estado
  useEffect(() => {
    if (!loading && data) {
      const { hora_entrada, hora_salida } = data;
      setHoraEntrada(moment(hora_entrada, "HH:mm:ss").format("h:mm A"));
      setHoraSalida(moment(hora_salida, "HH:mm:ss").format("h:mm A"));
    }
  }, [data, loading]);

  return { horaEntrada, horaSalida };
}

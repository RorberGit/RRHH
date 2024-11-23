import moment from "moment";
import { useMemo } from "react";
import diasSemana from "../constants/diasSemana";
import useGetData from "../../../hooks/use-GetData";
import { ASISTENCIA } from "../../../constants";
import { useEffect } from "react";
import { useState } from "react";

export default function useRecuperarJornada() {
  const [horaEntrada, setHoraEntrada] = useState(null);
  const [horaSalida, setHoraSalida] = useState(null);

  //! Obtener el día de la semana actual
  const ActualDiaSemana = useMemo(() => diasSemana[moment().day()], []);

  //! Recuperar Jornada dado el dia semana actual
  const { data, loading } = useGetData(
    `${ASISTENCIA.JORNADA}/${ActualDiaSemana}`
  );

  //! Si existen datos formatear la hora entrada y la salida, poner en el estado
  useEffect(() => {
    if (!loading && data) {
      const { hora_entrada, hora_salida } = data;
      //! Poner stados de entrada o salida si existen sino null
      setHoraEntrada(
        hora_entrada && moment(hora_entrada, "HH:mm:ss").format("h:mm A")
      );
      setHoraSalida(
        hora_salida && moment(hora_salida, "HH:mm:ss").format("h:mm A")
      );
    }
  }, [data, loading]);

  return { horaEntrada, horaSalida };
}

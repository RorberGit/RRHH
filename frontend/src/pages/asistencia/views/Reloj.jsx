import { useState, useEffect } from "react";
import mostrarHora from "../helpers/mostrarHora";

// Componente para mostrar un reloj en pantalla
export default function Reloj() {
  const [hora, setHora] = useState(mostrarHora());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(mostrarHora());
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return <h2 style={{ textAlign: "center" }}>{hora}</h2>;
}

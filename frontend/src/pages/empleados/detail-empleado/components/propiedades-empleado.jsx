import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import getFullName from "@helpers/getFullName";

import styles from "./propiedades-empleado.module.css";

import persona from "@assets/person.png";
import { useFetching } from "../../../../hooks/use-Fetching.js";
import { useDetalleContext } from "../contexts/useDetalleContext";
import { PATH_API } from "../../../../constants/rutas.api.js";
import { useEffect } from "react";
import { mutate } from "swr";

const renderAtributo = (key = "", value = "") => {
  return (
    <Typography>
      <b>{key}: </b>
      {value}
    </Typography>
  );
};

export function PropiedadesEmpleado() {
  const { id, refresh, setIsActive } = useDetalleContext();

  //! Obtener los datos
  const { data, error, loading } = useFetching(
    `${PATH_API.EMPLOYEE.RETRIEVE}?id=${id}`
  );

  if (data && !loading) setIsActive(data.is_active);

  //! Sirefresh a cambiado entonces mutar los datos del swr en el fetching
  useEffect(() => {
    if (refresh) {
      // Forzar revalidación de datos usando mutate
      mutate(`${PATH_API.EMPLOYEE.RETRIEVE}?id=${id}`);
    }
  }, [refresh, id]); // Dependencias en refresh e id

  if (loading) return <h2>Cargando...</h2>;

  if (error) return <h2>{error.detail}</h2>;

  return (
    <div className={styles.container_detail}>
      <div className={styles.body_detail}>
        <img className={styles.piture_detail} src={data?.foto || persona} />
        <main className={styles.main_detail}>
          {renderAtributo("Número de identificación personal", data?.nip)}
          {renderAtributo("Nombre y apellidos", getFullName(data))}
          {renderAtributo("Número de documento de identidad", data.ci)}
          {renderAtributo(
            "Sexo",
            data?.sexo === "M" ? "Masculino" : "Femenino"
          )}
          {renderAtributo(
            "Color de la piel",
            data?.color_piel === "B"
              ? "Blanca"
              : data?.color_piel === "N"
              ? "Negra"
              : "Mestiza"
          )}
          {renderAtributo(
            "Mano de obra",
            data?.mano_obra === "MOD" ? "Directa" : "Indirecta"
          )}
          {renderAtributo("Cargo", data?.cargo?.nombre)}
          {renderAtributo("Área / Departamento", data?.areadpt?.nombre)}
          {renderAtributo("Proyecto", data?.proyecto?.nombre)}
          {renderAtributo("Activo", data?.is_active ? "Si" : "No")}
        </main>
      </div>
    </div>
  );
}

PropiedadesEmpleado.propTypes = {
  data: PropTypes.object,
};

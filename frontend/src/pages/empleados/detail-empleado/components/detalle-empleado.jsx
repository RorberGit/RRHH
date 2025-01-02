import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import getFullName from "@helpers/getFullName";
import resumen from "@pages/empleados/mocks/resumen.json";

import styles from "./detalle-empleado.module.css";

const renderAtributo = (key = "", value = "") => {
  return (
    <Typography>
      <b>{key}: </b>
      {value}
    </Typography>
  );
};

export default function PropiedadesEmpleado({ data }) {
  console.log("data :>> ", data);
  return (
    <div className={styles.container_detail}>
      <header className={styles.header_detail}>
        <Button variant="contained" color="primary" sx={{ margin: "5px" }}>
          Modificar
        </Button>
        <Button variant="contained" color="error" sx={{ margin: "5px" }}>
          Desactivar
        </Button>
      </header>
      <div className={styles.body_detail}>
        <img className={styles.piture_detail} src={resumen?.foto} />
        <main className={styles.main_detail}>
          {renderAtributo("Número de identificación personal", resumen?.nip)}
          {renderAtributo("Nombre y apellidos", getFullName(resumen))}
          {renderAtributo("Número de documento de identidad", resumen.ci)}
          {renderAtributo(
            "Sexo",
            resumen?.sexo === "M" ? "Masculino" : "Femenino"
          )}
          {renderAtributo(
            "Color de la piel",
            resumen?.color_piel === "B"
              ? "Blanca"
              : resumen?.color_piel === "N"
              ? "Negra"
              : "Mestiza"
          )}
          {renderAtributo(
            "Mano de obra",
            resumen?.mano_obra === "MOD" ? "Directa" : "Indirecta"
          )}
          {renderAtributo("Cargo", resumen?.cargo?.nombre)}
          {renderAtributo("Área / Departamento", resumen?.areadpt?.nombre)}
          {renderAtributo("Proyecto", resumen?.proyecto?.nombre)}
          {renderAtributo("Activo", resumen?.is_active ? "Si" : "No")}
        </main>
      </div>
    </div>
  );
}

PropiedadesEmpleado.propTypes = {
  data: PropTypes.object,
};

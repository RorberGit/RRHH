import { Button } from "@mui/material";
import Box from "@mui/material/Box"
import PropTypes from "prop-types";
import { useDetalleContext } from "../contexts/useDetalleContext";

export function Botones() {
  const { isActive, setAction } = useDetalleContext();

  return (
    <div style={{ display: "flex", gap: 10, justifyContent: "end" }}>
      <Box />
      <Button variant="contained" color="primary">
        Modificar
      </Button>

      {
        //! Si is_active es falso mostrar Activar
        !isActive && (
          <Button
            variant="contained"
            color="success"
            onClick={() => setAction("activate")}
          >
            Activar
          </Button>
        )
      }
      {
        //! Si is_active es verdadero mostrar Desactivar
        isActive && (
          <Button
            variant="contained"
            color="error"
            onClick={() => setAction("deactivate")}
          >
            Desactivar
          </Button>
        )
      }
    </div>
  );
}

Botones.propTypes = {
  is_active: PropTypes.bool,
  id: PropTypes.string,
};

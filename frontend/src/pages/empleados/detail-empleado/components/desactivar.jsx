import { Box, Button, TextField } from "@mui/material";
import { useDetalleContext } from "../contexts/useDetalleContext";
import axios from "@api/axios_interceptor";

import { toast } from "sonner";
import { useGetUser } from "@hooks/use-GetUser";
import { PATH_API } from "@constants";
import { crearHistorico } from "../../helpers/crearHistorico";

export function Desactivar() {
  const { setAction, id: id_empleado, setRefresh } = useDetalleContext();
  const { user } = useGetUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    const descripcion = new FormData(event.currentTarget).get("descripcion");

    if (!descripcion) {
      toast.error("El motivo de la desactivación es obligatorio");
      return;
    }

    try {
      const put_employee = await axios.put(
        `${PATH_API.EMPLOYEE.UPDATE}/?id=${id_empleado}`,
        { is_active: false }
      );

      if (put_employee?.status === 200) {
        toast.success("Empleado desactivado satisfactoriamente");

        const response_historic = await crearHistorico({
          estado: "Desactivado",
          id_empleado: id_empleado,
          descripcion: descripcion,
          creado_por: user?.nombre_completo,
        });

        if (response_historic?.status === 201) {
          toast.success("Registro de historico almacenado satisfactoriamente");
        } else {
          toast.error("Error al almacenar el registro histórico");
        }
      } else {
        toast.error("Error al desactivar el empleado");
      }

      setRefresh((prev) => !prev);
      setAction(null);
    } catch {
      toast.error("Error al desactivar el empleado");
    }
  };

  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <TextField
        multiline
        fullWidth
        name="descripcion"
        label="Motivo de la desactivación"
        placeholder="Motivo de la desactivación"
        variant="outlined"
      ></TextField>

      <div
        style={{
          display: "flex",
          gap: 10,
          padding: 5,
          justifyContent: "end",
        }}
      >
        <Button variant="contained" type="submit">
          Aceptar
        </Button>
        <Button
          variant="contained"
          color="error"
          type="reset"
          onClick={() => setAction(null)}
        >
          Cancelar
        </Button>
      </div>
    </Box>
  );
}

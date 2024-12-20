import { Paper, Box, Button, Grid2 as Grid } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { crearRegistro } from "./helpers/crearRegistro";
import { EMPLEADO } from "@constants";
import { defaultEmpleado } from "./models/defaultEmpleado";
import { toast } from "sonner";
import { useMemo } from "react";
import useValidaForm from "@pages/empleados/hooks/use-ValidaForm";
import axios from "@api/axios_interceptor.js";
import { useRouter } from "@hooks/use-router";
import Foto from "./components/foto";
import { ProviderEmpleado } from "./context/empleado-context";
import Tab from "./components/tab";
import Titulo from "@pages/empleados/components/titulo";

export default function CreateEmpleado() {
  const { resolver } = useValidaForm();

  const router = useRouter();

  //! Configurarción del react-hook-form
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: defaultEmpleado,
    resolver: resolver,
  });

  /*
    ! - Si existen errores en los componentes definidos en validar
    ! - Se crea un array con keys, para evaluar si existen atributos con length
    ! - Se usa entries para crear un array, con el que recorrer los param key y value con map
    ! - Se muestra los mensajes con toast de sonner y se usa la option id = key, como identificador único
  */
  const entries = useMemo(() => Object.entries(errors), [errors]);

  useEffect(() => {
    if (entries.length) {
      entries.map(([key, value]) => {
        toast.error(value.message, { id: key });
      });
    }
  }, [entries]);

  //! Funsion submit del formulario
  const onSubmit = async (data) => {
    console.log("data :>", data);

    const row = crearRegistro(data);

    console.info("renderizado :>", row);

    const create = await axios.post(EMPLEADO.CREATE, row);

    console.log("create :>> ", create);

    if (create.status === 201) toast.success("Empleado creado con exito");

    router.push("/employee/listing");
  };

  //Mostrar fecha actual
  

  
  

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProviderEmpleado value={{ control, setValue, setError, clearErrors }}>
          <Paper sx={{ padding: 2 }}>
            <Titulo title="Crear nuevo empleado" />
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                <div
                  style={{ padding: "8px", width: "275px", height: "400px" }}
                >
                  <Foto />
                </div>
              </Grid>
              <Grid size={{ xs: 12, md: 8, lg: 9 }}>
                <div style={{ p: 2 }}>
                  <Tab />
                  <Box sx={{ textAlign: "right", pr: 4 }}>
                    <Button type="submit" variant="contained">
                      Aceptar
                    </Button>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </ProviderEmpleado>
      </form>
    </>
  );
}

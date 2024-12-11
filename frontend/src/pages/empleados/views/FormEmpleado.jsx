import {
  Paper,
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { crearRegistro } from "../helpers/crearRegistro";
import useGetData from "@hooks/use-GetData";
import { EMPLEADO } from "@constants";
import { defaultEmpleado } from "../models/defaultEmpleado";
import { FormProvider } from "@context/formContext";
import { toast } from "sonner";
import { useMemo } from "react";
import useValidaForm from "@pages/empleados/hooks/use-ValidaForm";
import {
  TabContenedor,
  TabPanel_1,
  TabPanel_2,
  TabPanel_3,
  TabPanel_4,
  TabPanel_5,
  TabPanel_6,
  TabPanel_7,
} from "@pages/empleados/components";
import axios from "@api/axios_interceptor.js";
import { useRouter } from "@hooks/use-router";
import Foto from "../components/foto";

export default function FormEmpleado() {
  const { resolver } = useValidaForm();

  const router = useRouter();

  //! Configurarción del react-hook-form
  const {
    register,
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

  //! Octener el último numero de empleado
  const nipData = useGetData(EMPLEADO.MAX);

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

  useEffect(() => {
    setValue("nip", nipData?.data?.max_nip + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nipData.data]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider value={{ control, setValue, setError, clearErrors }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4, lg: 3 }}>
              <Foto />
            </Grid>
            <Grid size={{ xs: 12, md: 8, lg: 9 }}>
              <Paper sx={{ p: 2 }}>
                {/* //!Campo para el numero de identificacion personal */}
                <Stack spacing={2} direction="row" sx={{ ml: 5 }}>
                  <Typography variant="subtitle1">
                    Número de Identificación Personal
                  </Typography>
                  <TextField
                    {...register("nip")}
                    variant="standard"
                    type="text"
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                    sx={{ maxWidth: "60px", textAlign: "center", fontSize: 40 }}
                  />
                </Stack>

                {/* //!Contenedor global de los Tab*/}
                <TabContenedor>
                  {/* //! Datos personales */}
                  <TabPanel_1 />

                  {/* //! Dirección particular */}
                  <TabPanel_2 setValue={setValue} />

                  {/* //! Datos laborales */}
                  <TabPanel_3 />

                  {/*//! Afiliaciones */}
                  <TabPanel_4 />

                  {/* //! Vestimenta de trabajo */}
                  <TabPanel_5 />

                  {/* //! Vivienda */}
                  <TabPanel_6 />

                  {/* //! Alojamiento */}
                  <TabPanel_7 />
                </TabContenedor>

                <Box sx={{ textAlign: "right", pr: 4 }}>
                  <Button type="submit" variant="contained">
                    Aceptar
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </FormProvider>
      </form>
    </>
  );
}

import {
  Paper,
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  styled,
  Grid2 as Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { validar } from "./models/validar";
import {
  TabPanel_1,
  TabPanel_2,
  TabPanel_3,
  TabPanel_4,
  TabPanel_5,
  TabPanel_6,
  TabPanel_7,
} from "./components";
import TabContenedor from "./components/TabContenedor";
import { crearRegistro } from "./utilities/crearRegistro";
import { MuiFileInput } from "mui-file-input";
import { AttachFile } from "@mui/icons-material";
import useGetData from "../../hooks/use-GetData";
import { EMPLEADO } from "../../constants";
import { useBase64 } from "../../hooks/useBase64";
import axios from "../../api/axios";
import { initEmpleado } from "./models/init_Empleado";
import { FormProvider } from "../../context/formContext";
import { toast, Toaster } from "sonner";

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Formulario() {
  const [loading, setLoading] = useState(true);

  const [file, setFile] = useState(null);

  //! Configurarción del react-hook-form
  const { register, handleSubmit, control, formState, setValue } = useForm({
    defaultValues: initEmpleado,
    resolver: validar(),
  });

  const { errors } = formState;

  /*
    ! - Si existen errores en los componentes definidos en validar
    ! - Se crea un array con keys, para evaluar si existen atributos con length
    ! - Se usa entries para crear un array, con el que recorrer los param key y value con map
    ! - Se muestra los mensajes con toast de sonner y se usa la option id = key, como identificador único
  */
  useEffect(() => {
    if (Object.keys(errors).length) {
      Object.entries(errors).map(([key, value]) => {
        toast.error(value.message, { id: key });
      });
    }
  }, [errors]);

  //! Atributos comunes para todos los componentes
  const comun = { control: control, formState: formState };

  //! Octener el último numero de empleado
  const nipData = useGetData(EMPLEADO.MAX);

  const base64 = useBase64();

  //! Funsion submit del formulario
  const onSubmit = async (data) => {
    console.log("data :>", data);

    const row = crearRegistro(data);

    console.info("renderizado:>", row);

    const create = await axios.post(EMPLEADO.CREATE, row);

    console.log("create :>> ", create);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  useEffect(() => {
    setValue("nip", nipData?.data?.max_nip + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nipData.data]);

  /* //!Funcion para manupular archivos */
  const handleChangeFile = (newFile) => {
    console.log(newFile);

    base64(newFile).then((response) => {
      setFile(response);
      setValue("foto", response);
    });
  };

  if (loading)
    return (
      <>
        <h1>Cargando...</h1>
      </>
    );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                gap: "10px",
              }}
            >
              <Img src={file}></Img>
              <MuiFileInput
                value={file}
                onChange={handleChangeFile}
                size="medium"
                variant="outlined"
                InputProps={{
                  inputProps: {
                    accept: "image/*",
                  },
                  startAdornment: <AttachFile />,
                }}
              />
            </Paper>
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

              <FormProvider value={control}>
                {/* //!Contenedor global de los Tab*/}
                <TabContenedor>
                  {/* //! Datos personales */}
                  <TabPanel_1 comun={comun} />

                  {/* //! Dirección particular */}
                  <TabPanel_2 comun={comun} setValue={setValue} />

                  {/* //! Datos laborales */}
                  <TabPanel_3 comun={comun} />

                  {/*//! Afiliaciones */}
                  <TabPanel_4 comun={comun} />

                  {/* //! Vestimenta de trabajo */}
                  <TabPanel_5 comun={comun} />

                  {/* //! Vivienda */}
                  <TabPanel_6 comun={comun} />

                  {/* //! Alojamiento */}
                  <TabPanel_7 comun={comun} />
                </TabContenedor>
              </FormProvider>
              <Box sx={{ textAlign: "right", pr: 4 }}>
                <Button type="submit" variant="contained">
                  Aceptar
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </form>
      <Toaster position="bottom-left" richColors visibleToasts={10} />
    </>
  );
}

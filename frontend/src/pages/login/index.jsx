import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Avatar,
  Stack,
  Alert,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "@services/auth";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLogout } from "@hooks/useLogout";

import BBI from "@assets/img/bbi.jpg";
import UCM from "@assets/img/ucm.jpg";
import useStorageToken from "@hooks/use-StorageToken";

const defaultTheme = createTheme();

export default function Login() {
  const logout = useLogout();
  //! Hooks control del localstore
  const token = useStorageToken();

  //Limpiar los valores de la session en el inicio de sesion
  useEffect(() => {
    const cerrarSesion = async () => {
      try {
        //Llamo a la api para cerrar la session
        await logout();
      } catch (error) {
        console.log(error);
      }
    };

    cerrarSesion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [errMsg, setErrMsg] = useState("");

  /*  
  ! funcion manipulacion de los datos de login 
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    //! Recopilar datos en los controles
    const data = new FormData(event.currentTarget);

    try {
      //! Comprobar si existe el usuario y es correcta la contraseña
      const response = await auth.Login({
        username: data.get("username"),
        password: data.get("password"),
      });

      token.setToken({
        id: response.id,
        access_token: response.access_token,
        refresh_token: response.refresh_token,
      });

      navigate(from, { replace: true });
    } catch (error) {
      setErrMsg(error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <Avatar src={UCM} variant="square" sx={{ width: 60, height: 50 }} />
            <Avatar src={BBI} variant="square" sx={{ width: 80, height: 50 }} />
          </Stack>

          <Typography component="h1" variant="h5">
            Formulario de Autenticación
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuario"
              name="username"
              onChange={() => setErrMsg("")}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={() => setErrMsg("")}
            />

            {errMsg ? <Alert severity="error">{errMsg}</Alert> : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

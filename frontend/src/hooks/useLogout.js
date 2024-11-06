import { RUTAS_API } from "../constants";
import axios from "../api/axios";
import { Token } from "../services";
import useReduxUsuario from "../redux/hooks/use-ReduxUsuario";

export const useLogout = () => {
  const usuario = useReduxUsuario();

  const logout = async () => {
    const token = Token.getToken();

    if (!token?.access_token) throw "Usuarios sin inicio de sesión";

    await axios
      .post(
        RUTAS_API.USERS.LOGOUT,
        {
          refresh_token: token.refresh_token,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        Token.removeToken();

        usuario.reset();
        console.info("response", response);
      })
      .catch((error) => {
        console.error("error:>", error);
      });
  };

  return logout;
};

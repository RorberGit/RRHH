import { PATH_API } from "@constants";
import axios from "@api/axios_create";
import { Token } from "@services/token";
import useReduxUsuario from "../redux/hooks/use-ReduxUsuario";

export const useLogout = () => {
  const usuario = useReduxUsuario();

  const logout = async () => {
    const token = Token.getToken();

    if (!token?.access_token) throw "Usuarios sin inicio de sesión";

    await axios
      .post(PATH_API.USERS.LOGOUT, {
        refresh_token: token.refresh_token,
      })
      .then(() => {
        Token.removeToken();

        usuario.reset();
      })
      .catch((error) => {
        console.error("error:>", error);
      });
  };

  return logout;
};

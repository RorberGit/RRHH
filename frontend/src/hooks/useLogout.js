import { PATH_API } from "@constants";
import axios from "@api/axios_create";
import { STORAGE } from "../services/token";
import { mutate } from "swr";

export const useLogout = () => {
  //! Función de limiesa del inicio de session del usuario
  const logout = async () => {
    //! Si existe el token
    if (STORAGE.list()) {
      //! Eliminar el token de usuario
      STORAGE.delToken();

      //! Limpiar la cache del usuario
      mutate(null);
    }

    await axios
      .post(PATH_API.USERS.LOGOUT, {
        refresh_token: STORAGE.getRefreshToken(),
      })
      .then((error) => {
        console.log("Error en logout => ", error);
        //Token.removeToken();
      })
      .catch((error) => {
        console.error("error:>", error);
      });
  };

  return logout;
};

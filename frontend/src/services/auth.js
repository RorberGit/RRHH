//import axios from "../api/axios";
import axios from "@api/axios_create";
import { PATH_API } from "@constants";

export const Login = async (credenciales) => {
  return await axios
    .post(PATH_API.USERS.LOGIN, credenciales)
    .then((response) => response.data)
    .catch((error) => {
      console.error("error :> ", error);

      if (error.response) throw error?.response?.data?.detail;

      if (error.code === "ERR_NETWORK") throw "Servidor no encontrado.";

      throw error;
    });
};

export const auth = {
  Login,
};

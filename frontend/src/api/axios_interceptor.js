import axios from "@api/axios_create";

import { STORAGE } from "../services/token";

//Interceptor para las solicitudes
axios.interceptors.request.use(
  (config) => {
    //! Si existe el access token
    if (STORAGE.getAccessToken()) {
      config.headers["Authorization"] = `Bearer ${STORAGE.getAccessToken()}`;
    }

    console.info("config :>> ", config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Interceptor para las respuestas
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error AXIOS response :>", error);

    if (error?.response?.status === 401) {
      STORAGE.delToken();
      //Token.removeToken();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axios;

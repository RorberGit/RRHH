import axios from "@api/axios";

import { Token } from "@services/token";

//Interceptor para las solicitudes
axios.interceptors.request.use(
  (config) => {
    //Obteniendo el token
    const token = Token.getToken();

    //Si existe el access token
    if (token?.access_token) {
      config.headers["Authorization"] = `Bearer ${token.access_token}`;
    }

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
      Token.removeToken();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default axios;

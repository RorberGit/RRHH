import axios from "axios";
import { SERVER_API } from "./../constants/rutas.api";
import { Token } from "./token";

const api = axios.create({
  baseURL: SERVER_API,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

//Interceptor para las solicitudes
api.interceptors.request.use(
  function (config) {
    //Obteniendo el token
    const token = Token.getToken();

    //Si existe el access token
    if (token.access_token) {
      config.headers["Authorization"] = `Bearer ${token?.access_token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//Interceptor para las respuestas
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;

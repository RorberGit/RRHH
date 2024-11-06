import axios from "axios";
import { SERVER_API } from "./../constants/rutas.api";

export default axios.create({
  baseURL: SERVER_API,
});

export const axiosToken = axios.create({
  baseURL: SERVER_API,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

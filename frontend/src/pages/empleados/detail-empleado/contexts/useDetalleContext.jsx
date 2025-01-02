import { useContext } from "react";
import { DetalleContext } from "./detail-context";

//! Custom Hooks para el contexto creado

export const useDetalleContext = () => {
  return useContext(DetalleContext);
};

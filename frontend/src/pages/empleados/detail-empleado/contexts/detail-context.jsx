import { createContext } from "react";
import PropTypes from "prop-types";

//! Crear un contexto
export const DetalleContext = createContext();

//! Proveedor del contexto
export const DetalleProvider = ({ children, value }) => {
  return (
    <DetalleContext.Provider value={value}>{children}</DetalleContext.Provider>
  );
};

DetalleProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
};

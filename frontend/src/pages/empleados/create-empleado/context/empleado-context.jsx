import { createContext } from "react";
import PropTypes from "prop-types";

// Crear un contexto
export const EmpleadoContext = createContext();

// Proveedor del contexto
export const ProviderEmpleado = ({ children, value }) => {
  return <EmpleadoContext.Provider value={value}>{children}</EmpleadoContext.Provider>;
};

ProviderEmpleado.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
};

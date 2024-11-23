import { createContext } from "react";
import PropTypes from "prop-types";

// Crear un contexto
export const FormContext = createContext();

// Proveedor del contexto
export const FormProvider = ({ children, value }) => {
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
};

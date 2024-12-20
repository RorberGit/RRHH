import { useContext } from "react";
import {EmpleadoContext} from "./empleado-context";
const useEmpleadoContext = () => {
  return useContext(EmpleadoContext);
};

export default useEmpleadoContext;

import { useContext } from "react";
import { FormContext } from "./formContext";

export const useComponentContext = () => {
  return useContext(FormContext);
};

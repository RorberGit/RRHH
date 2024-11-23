import { useContext } from "react";
import { FormContext } from "./formContext";

export const useFormContext = () => {
  return useContext(FormContext);
};

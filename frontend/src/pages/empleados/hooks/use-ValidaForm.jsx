import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "@api/axios_interceptor";

export default function useFormValidation() {
  const validateCI = async (ci) => {
    if (!ci) return true;

    try {
      const response = await axios.get(`employee/getone?ci=${ci}`);
      return response.status !== 200;
    } catch {
      return true;
    }
  };

  const schema = yup.object().shape({
    nombre: yup.string().required("Nombre: no puede estar vacio"),
    apellido_paterno: yup
      .string()
      .required("Apellido paterno: no puede estar vacio"),
    apellido_materno: yup
      .string()
      .required("Apellido materno: no puede estar vacio"),
    ci: yup
      .number()
      .typeError("Número de identidad: no puede estar vacio")
      .test(
        "length",
        "Número de identidad: debe tener 11 digitos",
        (value) => value?.toString().length === 11
      )
      .test("unique", "Número de identidad: ya esta registrado", validateCI),
    sexo: yup.object().required("Sexo: no puede estar vacio"),
    color_piel: yup.object().required("Color de la piel: no puede estar vacio"),
    mano_obra: yup.object().required("Mano de obra: no puede estar vacio"),
    proyecto: yup.object().required("Proyecto: no puede estar vacioy"),
    areadpt: yup.object().required("Área/Departamento: no puede estar vacio"),
    cargo: yup.object().required("Cargo: no puede estar vacio"),
  });

  return { resolver: yupResolver(schema) };
}

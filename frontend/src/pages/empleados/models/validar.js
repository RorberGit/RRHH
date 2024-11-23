import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  nombre: yup.string().required("Campo requerido"),
  apellido_paterno: yup.string().required("Campo requerido"),
  apellido_materno: yup.string().required("Campo requerido"),
  ci: yup.number().required("Campo requerido"),
  //provincia: yup.object().nonNullable().required("Campo requerido"),
  //municipio: yup.object().nonNullable().required("Campo requerido"),
});

export const validar = () => {
  return yupResolver(schema);
};

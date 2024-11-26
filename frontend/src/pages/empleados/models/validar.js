import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  nombre: yup.string().required("Nombre: valor nulo"),
  apellido_paterno: yup.string().required("Apellido paterno: valor nulo"),
  apellido_materno: yup.string().required("Apellido materno: valor nulo"),
  ci: yup
    .number()
    .integer("Número de identidad: debe ser un # entero")
    .typeError("Número de identidad: debe ser un número")
    .test(
      "length",
      "Número de identidad: debe tener 11 dígitos",
      (value) => value.toString().length === 11
    ),
    sexo: yup.object().nonNullable().required("Sexo: valor nulo"),
    color_piel: yup.object().nonNullable().required("Color de la piel: valor nulo"),
    mano_obra: yup.object().nonNullable().required("Mano de obra: valor nulo"),
    proyecto: yup.object().nonNullable().required("Proyecto: valor nulo"),
    areadpt: yup.object().nonNullable().required("Área/Departamento: valor nulo"),
    cargo: yup.object().nonNullable().required("Cargo: valor nulo"),
  //provincia: yup.object().nonNullable().required("Campo requerido"),
  //municipio: yup.object().nonNullable().required("Campo requerido"),
});

export const validar = () => {
  return yupResolver(schema);
};

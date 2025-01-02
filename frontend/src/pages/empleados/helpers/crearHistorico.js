import axios from "@api/axios_interceptor";
import { PATH_API } from "@constants/rutas.api";
// Prototipo de datos con valores predeterminados
import { historicInterface } from "../interfaces/historic";

// Función para crear un histórico
export const crearHistorico = async (data = historicInterface) => {
  // Validación de datos
  const estadosValidos = [
    "Contratado",
    "Modificado",
    "Activado",
    "Desactivado",
  ];

  if (!estadosValidos.includes(data.estado)) {
    throw new Error(
      `Estado inválido. Debe ser uno de los siguientes: ${estadosValidos.join(
        ", "
      )}`
    );
  }

  if (!data.id_empleado) {
    throw new Error("El campo 'id_empleado' es obligatorio.");
  }

  try {
    const respuesta = await axios.post(PATH_API.EMPLOYEE.HISTORIC.CREATE, {
      estado: data.estado,
      id_empleado: data.id_empleado,
      descripcion: data.descripcion,
      creado_por: data.creado_por,
    });

    return respuesta; // Devolver solo los datos de la respuesta
  } catch (error) {
    console.error("Error al crear el histórico:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el llamador
  }
};

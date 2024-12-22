import axios from "@api/axios_interceptor";
import { PATH_API } from "@constants/rutas.api";

export default function useValidarCI() {
  const validateCI = async (ci) => {
    if (!ci) return true;

    try {
      const response = await axios.get(
        `${PATH_API.EMPLOYEE.RETRIEVE}?ci=${ci}`
      );

      //! Si existe el número en la base de datos retornar false
      return !response.status === 200;
    } catch (error) {
      //! Si no existe el número en la base de datos retornar true
      return error.status !== 200;
    }
  };

  return validateCI;
}

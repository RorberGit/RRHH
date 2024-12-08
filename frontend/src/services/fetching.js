import axios from "@api/axios_interceptor";

const fetching = async (url) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 404: {
          const err = {
            detail: error.response.data.detail,
            status: error.response.status,
          };
          throw err; // Lanza el error
        }
        default:
          throw new Error("Ocurrió un error inesperado.");
      }
    } else if (error.request)
      throw new Error("No se pudo conectar al servidor.");
    else throw new Error("Error: " + error.message);
  }
};

export default fetching;

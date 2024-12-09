export const RUTAS_API = {
  USERS: {
    LOGIN: "users/login/",
    LOGOUT: "users/logout/",
    LISTING: "users/listing/",
    RETRIEVE: "users/retrieve/",
  },

  integracion: {
    AFILIACION: "integration/afp/",
    ORGANIZACIONES: "integration/orm/",
    DEFENSA: "integration/ued/",
  },
  vestimenta: {
    PANTALON: "attire/pants/",
    CAMISA: "attire/shirt/",
    CALZADO: "attire/footwear/",
  },
};

export const OTHER = {
  ANTIGUEDAD: "other/antique/",
  NIVEL_ESCOLAR: "other/school/",
  PROCEDENCIA: "other/procedence/",
  TURNO: "/other/turn/",
  PASE: "/other/pass/",
  ALBERGADO: "other/ajtvjt/",
};

export const EMPLEADO = {
  LISTING: "employee/listing/",
  CREATE: "employee/create/",
  getOne: "employee/getone",
  getFull: "",
  RETRIEVE: "employee/retrieve",
  MAX: "employee/max/",
};

export const ASISTENCIA = {
  JORNADA: "asistencia/timeworkforday",
  ENTRADA_SALIDA: "asistencia/registroentrada",
};

export const ORGANITATION = {
  PROYECTO: "organization/projects/",
  AREA: "organization/areadpto/",
  CARGO: "organization/positions/",
  ESPECIALIDAD: "organization/specialties/",
};

export const PATH_API = {
  EMPLOYEE: {
    LISTING: "employee/listing",
    CREATE: "employee/create",
    RETRIEVE: "employee/retrieve",
    UPDATE: "employee/update",
    DELETE: "employee/delete",
    HISTORIC: {
      LISTING: "employee/historic/listing",
      CREATE: "employee/historic/create",
      RETRIEVE: "employee/historic/retrieve",
      UPDATE: "employee/historic/update",
      DELETE: "employee/historic/delete",
    },
  },
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

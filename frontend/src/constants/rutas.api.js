export const SERVER_API = "http://localhost:8000/";

export const RUTAS_API = {
  USERS: {
    LOGIN: "users/login/",
    LOGOUT: "users/logout/",
    LISTING: "users/listing/",
    RETRIEVE: "users/retrieve/",
  },
  EMPLOYEE: {
    LISTING: "employee/listing/",
    CREATE: "employee/create/",
    RETRIEVE: "employee/retrieve/",
    MAX: "employee/max/",
  },
  OTHER: {
    ANTIGUEDAD: "other/antique/",
    NIVEL_ESCOLAR: "other/school/",
    PROCEDENCIA: "other/procedence/",
    TURNO: "/other/turn/",
    PASE: "/other/pass/",
    ALBERGADO: "other/ajtvjt/",
  },
  organization: {
    PROYECTO: "organization/projects/",
    AREA: "organization/areadpto/",
    CARGO: "organization/positions/",
    ESPECIALIDAD: "organization/specialties/",
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
  asistencia: {
    JORNADA: "asistencia/timeworkforday",
  },
};

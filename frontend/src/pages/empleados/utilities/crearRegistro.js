import dayjs from "dayjs";
import "dayjs/locale/es";

export const crearRegistro = (data) => {
  const {
    sexo,
    color_piel,
    ne,
    especialidad,
    ag,
    procedencia,
    provincia,
    municipio,
    proyecto,
    areadpt,
    cargo,
    fecha_cc,
    antdd,
    turno,
    pase,
    fecha_captado,
    afp,
    orm,
    defensa,
    pantalon,
    camisa,
    calzado,
    estado_vivienda,
    ajtvjt,
  } = data;

  return {
    ...data,
    sexo: sexo?.id || null,
    color_piel: color_piel?.id || null,
    ne: ne?.id || null,
    especialidad: especialidad?.id || null,
    ag: ag ? dayjs(ag).format("YYYY") : null,
    procedencia: procedencia?.id || null,
    provincia: provincia?.id || null,
    municipio: municipio?.id || null,
    proyecto: proyecto?.id || null,
    areadpt: areadpt?.id || null,
    cargo: cargo?.id || null,
    fecha_cc: fecha_cc ? dayjs(fecha_cc).format("YYYY-MM-DD") : null,
    antdd: antdd?.id || null,
    turno: turno?.id || null,
    pase: pase?.id || null,
    fecha_captado: fecha_captado
      ? dayjs(fecha_captado).format("YYYY-MM-DD")
      : null,
    afp: afp ? { data: afp } : [],
    orm: orm ? { data: orm } : [],
    defensa: defensa ? { data: defensa } : [],
    pantalon: pantalon?.id || null,
    camisa: camisa?.id || null,
    calzado: calzado?.id || null,
    estado_vivienda: estado_vivienda?.id || null,
    ajtvjt: ajtvjt?.id || null,
  };
};

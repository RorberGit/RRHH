import { TextField } from "@mui/material";
import debounce from "just-debounce-it";
import { useEffect, useCallback } from "react";
import axios from "@api/axios_interceptor";
import useFetching from "@hooks/use-Fetching";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useState } from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { EMPLEADO } from "@constants";

export default function PonerEntradaSalida({
  setEmployee,
  refresData,
  proyecto,
}) {
  const [nip, setNip] = useState("");
  const [search, setSearch] = useState(null);

  //! Custom Hooks para las solicitudes al API
  const { data, error } = useFetching(search);

  useEffect(() => {
    error && toast.error(error?.detail);
  }, [error]);

  const empleado = useMemo(() => {
    return (
      data && {
        foto: data?.foto,
        nip: data?.nip,
        ci: data?.ci,
        nombre_completo: `${data?.nombre} ${data?.apellido_paterno} ${data?.apellido_materno}`,
        area: data?.areadpt.nombre,
        cargo: data?.cargo.nombre,
        proyecto: data?.proyecto.nombre,
        mano_obra: data?.mano_obra,
        estado: data?.estado,
        is_active: data?.is_active,
      }
    );
  }, [data]);

  //! Poblar el setEmployee con los datos del empleado
  useEffect(() => {
    setEmployee(empleado);
  }, [empleado, setEmployee]);

  /*  - Esperar 5 segundos para buscar el empleado 
      - Si existe un nip almacena la url sino devuelve nulo
      - Se creala url API con los filtros nip y proyecto*/
  const debouncedNip = useMemo(
    () =>
      debounce(
        (nip) =>
          setSearch(
            nip ? `${EMPLEADO.getOne}?nip=${nip}&proyecto=${proyecto}` : null
          ),
        500
      ),
    [proyecto]
  );

  //! Catura los cambios en el cuadro de texto NIP
  const handleChange = (event) => {
    const tempNip = event.target.value;
    setNip(tempNip);
    debouncedNip(tempNip);
  };

  //! Lógica para almacenar la información obtenida en la base de datos
  const handleEntradaSalida = useCallback(async () => {
    if (!data) return;

    const { estado, nip } = data;

    const { title, url } =
      estado === "SALIDA"
        ? {
            title: "¿Desea registrar la hora de entrada?",
            url: "/asistencia/empleados/crear-entrada/",
          }
        : {
            title: "¿Desea registrar la hora de salida?",
            url: `/asistencia/empleados/${nip}/actualizar-salida/`,
          };

    const result = await Swal.fire({
      title,
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    });

    if (result.isConfirmed) {
      try {
        await (estado === "SALIDA" ? axios.post : axios.put)(
          url,
          estado === "SALIDA" ? { nip } : undefined
        );
        toast.success("Registro exitoso");
      } catch {
        toast.error("Error al registrar");
      }

      //! Refrescar los datos del componente Registro
      refresData();
    }
  }, [data, refresData]);

  //! Se ejecuta al emitir un submit desde el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    handleEntradaSalida();
    setSearch(null);
    setNip("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="nip"
          type="number"
          label="NIP del trabajador"
          onChange={handleChange}
          value={nip}
        />
      </form>
    </div>
  );
}

PonerEntradaSalida.propTypes = {
  setEmployee: PropTypes.func,
  refresData: PropTypes.func,
  proyecto: PropTypes.string,
};

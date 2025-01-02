import { STORAGE } from "../services/token";
import useSWR from "swr";
import fetching from "@services/fetching";
import { PATH_API } from "@constants/rutas.api";
import getFullName from "@helpers/getFullName";

const userPrototype = {
  id: null,
  username: null,
  is_admin: null,
  is_active: null,
  last_login: null,
  nombre_completo: null,
  proyecto: null,
  cargo: null,
  area: null,
  empleado: null,
};

export function useGetUser() {
  const { data, error, isLoading, mutate } = useSWR(
    `${PATH_API.USERS.RETRIEVE}${STORAGE.getId()}`,
    fetching
  );

  const user = Object.create(userPrototype);

  if (data) {
    user.id = data.id;
    user.username = data.username;
    user.is_admin = data.is_admin;
    user.is_active = data.is_active;
    user.last_login = data.last_login;
    user.nombre_completo = getFullName(data.empleados);
    user.proyecto = data.empleados.proyecto.nombre;
    user.cargo = data.empleados.cargo.nombre;
    user.area = data.empleados.areadpt.nombre;
    user.empleado = data.empleados;
  }

  /* const user = useMemo(() => {
    if (data) {
      return Object.create(userPrototype, {
        id: { value: data.id },
        username: { value: data.username },
        is_admin: { value: data.is_admin },
        is_active: { value: data.is_active },
        last_login: { value: data.last_login },
        nombre_completo: { value: getFullName(data.empleados) },
        proyecto: { value: data.empleados.proyecto.nombre },
        cargo: { value: data.empleados.cargo.nombre },
        area: { value: data.empleados.areadpt.nombre },
        empleado: { value: data.empleados },
      });
    } else {
      return Object.create(userPrototype);
    }
  }, [data]); */

  return {
    user,
    error,
    loading: isLoading && !user && !error,
    setUser: mutate,
  };
}

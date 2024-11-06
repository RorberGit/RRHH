import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import useStorageToken from "../hooks/use-StorageToken";

import useAxiosToken from "../hooks/use-AxiosToken";
import useReduxUsuario from "../redux/hooks/use-ReduxUsuario";

import musuario from "../mocks/usuario.json";

export default function Persist() {
  const [isLoading, setIsLoading] = useState(true);

  const usuario = useReduxUsuario();

  const token = useStorageToken();

  const axiosToken = useAxiosToken();

  useEffect(() => {
    let isMounted = true;

    const refresh = async () => {
      axiosToken
        .get(`/users/retrieve/${token.id}`)
        .then((response) => {
          //Si existe el usuario y los id son iguales crear el redux usuario
          if (response.status === 200 && response.data.id === token.id) {
            usuario.create({
              idUsuario: musuario.data.id,
              usuario: musuario.data.username,
              fullname: `${musuario.data.empleados.nombre} 
                       ${musuario.data.empleados.apellido_paterno} 
                       ${musuario.data.empleados.apellido_materno}`,
              idProyecto: musuario.data.empleados.proyecto.id,
              proyecto: musuario.data.empleados.proyecto.nombre,
              departamento: musuario.data.empleados.areadpt.nombre,
              cargo: musuario.data.empleados.cargo.nombre,
            });
          }
        })
        .finally(() => {
          isMounted && setIsLoading(false);
        });
    };

    // Si no existe un usuario y si un token refrescar
    !usuario?.list?.user && token?.list?.session
      ? refresh()
      : setIsLoading(false);

    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {usuario?.list?.usuario ? (
        <Outlet />
      ) : isLoading ? (
        <p>Cargando...</p>
      ) : (
        <Outlet />
      )}
    </>
  );
}

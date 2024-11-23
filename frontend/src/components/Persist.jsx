import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import useStorageToken from "../hooks/use-StorageToken";

import useAxiosToken from "../hooks/use-AxiosToken";
import useReduxUsuario from "../redux/hooks/use-ReduxUsuario";
import { useNavigate } from "react-router-dom";

export default function Persist() {
  const [isLoading, setIsLoading] = useState(true);

  const { list: usuarioList, create: createUsuario } = useReduxUsuario();
  const { list: tokenList } = useStorageToken();
  const axiosToken = useAxiosToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!tokenList?.id) {
      navigate("/login");
    } else if (!usuarioList?.user) {
      axiosToken
        .get(`/users/retrieve/${tokenList.id}`)
        .then((response) => response.data)
        .then((data) =>
          createUsuario({
            idUsuario: data.id,
            usuario: data.username,
            is_active: data.is_active,
            is_admin: data.is_admin,
            fullname: `${data.empleados.nombre} ${data.empleados.apellido_paterno} ${data.empleados.apellido_materno}`,
            proyecto: data.empleados.proyecto.nombre,
            departamento: data.empleados.areadpt.nombre,
            cargo: data.empleados.cargo.nombre,
          })
        )
        .finally(() => setIsLoading(false));
    }
  }, [axiosToken, createUsuario, navigate, tokenList, usuarioList]);

  return isLoading ? <p>Cargando...</p> : <Outlet />;
}

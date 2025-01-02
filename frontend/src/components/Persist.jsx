import { Outlet } from "react-router-dom";
import { STORAGE } from "../services/token";
import { useRouter } from "../hooks/use-router";

export default function Persist() {
  const router = useRouter();

  //! Si no existe el id de usuario regresar al login
  if (!STORAGE.getId()) router.push("/login");

  return <Outlet />;
}

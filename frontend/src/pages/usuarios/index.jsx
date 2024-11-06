import { Route, Routes } from "react-router-dom";
import Lista from "./Lista";
import Formulario from "./Formulario";

export default function Usuarios() {
  return (
    <>
      <Routes>
        <Route path="listing" element={<Lista />} />
        <Route path="form" element={<Formulario />} />
      </Routes>
    </>
  );
}

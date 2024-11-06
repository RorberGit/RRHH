import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser, resetUser } from "../redux/slices/userSlice";

export default function Actions() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <p>Actions</p>
      <Button
        variant="contained"
        onClick={() =>
          dispatch(
            createUser({
              username: "rorber",
              firstname: "Rorber ra",
              lastname: "rodriguez",
            })
          )
        }
      >
        Crear
      </Button>
      <hr />
      <Button variant="contained" onClick={() => dispatch(resetUser())}>
        Limpiar
      </Button>
      <hr />
      <span>{user?.user?.username}</span>
    </>
  );
}

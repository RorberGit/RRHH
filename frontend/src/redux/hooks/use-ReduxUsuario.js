import { useDispatch, useSelector } from "react-redux";
import { create, reset } from "../slices/userSlice";
import { useMemo } from "react";

export default function useReduxUsuario() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.user);

  const action = useMemo(
    () => ({
      list: list,
      create: (body = {}) => dispatch(create(body)),
      reset: () => dispatch(reset()),
    }),
    [dispatch, list]
  );

  return action;
}

import { useDispatch, useSelector } from "react-redux";
import { create, reset } from "../slices/empleadoSlice";
import { useMemo } from "react";

export const useReduxEmpleado = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.empleado);

  const store = useMemo(
    () => ({
      list: list,
      create: (body = {}) => dispatch(create(body)),
      reset: () => dispatch(reset()),
    }),
    [dispatch, list]
  );

  return store;
};

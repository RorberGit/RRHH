import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../slices/counterSlice";
import { useMemo } from "react";

export default function useReduxCounter() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.counter);

  const action = useMemo(
    () => ({
      list: list,
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset()),
    }),
    [dispatch, list]
  );

  return action;
}

import { configureStore } from "@reduxjs/toolkit";
import empleadoReducer from "./slices/empleadoSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    empleado: empleadoReducer,
    counter: counterReducer,
  },
});

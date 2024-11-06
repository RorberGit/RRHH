import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import empleadoReducer from "./slices/empleadoSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    empleado: empleadoReducer,
    counter: counterReducer,
  },
});

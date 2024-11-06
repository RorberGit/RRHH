import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nip: "",
  foto: "",
  nombre: "",
  apellido_paterno: "",
  apellido_materno: "",
  ci: "",
  cargo: "",
  proyecto: "",
  estado: "",
  is_active: null,
};

export const empleadoSlice = createSlice({
  name: "empleado",
  initialState,
  reducers: {
    create: (state, action) => action.payload,
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { create, reset } = empleadoSlice.actions;

export default empleadoSlice.reducer;

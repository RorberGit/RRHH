import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Toaster } from "sonner";

const theme = createTheme({
  palette: {
    background: { default: grey[50] },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <Toaster position="bottom-left" richColors visibleToasts={10} />
    </ThemeProvider>
  </Provider>
);

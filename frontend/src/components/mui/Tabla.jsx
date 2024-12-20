import { ThemeProvider, createTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";

import PropTypes from "prop-types";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);

function Tabla({ rows, columns, loading = true }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
          />
        </div>
      </ThemeProvider>
    </>
  );
}
Tabla.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  loading: PropTypes.bool,
};
export default Tabla;

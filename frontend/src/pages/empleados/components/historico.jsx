import PropTypes from "prop-types";
import Titulo from "./titulo";
import { Paper } from "@mui/material";

export default function Historico({ id = "" }) {
  console.log("id :>> ", id);
  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Titulo title="Historico" />
    </Paper>
  );
}

Historico.propTypes = {
  id: PropTypes.string,
};

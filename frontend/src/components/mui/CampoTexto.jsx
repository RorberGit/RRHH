import { Box, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

export default function CampoTexto({
  control,
  name,
  label,
  span,
  type = "text",
  multiline = false,
  rows = 1,
}) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Box sx={span ? { gridColumn: `span ${span}` } : null}>
      <TextField
        {...field}
        size="small"
        variant="outlined"
        label={label}
        type={type}
        multiline={multiline}
        rows={rows}
        error={!!error}
        helperText={error?.message}
      />
    </Box>
  );
}

CampoTexto.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  span: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

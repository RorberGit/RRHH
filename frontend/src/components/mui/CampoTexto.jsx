import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

export default function CampoTexto({
  name,
  control,
  label,
  type,
  span,
  multiline,
  rows,
}) {
  const { field, formState } = useController({ name, control });

  const { errors } = formState;

  return (
    <TextField
      {...field}
      size="small"
      variant="outlined"
      label={label}
      type={type || "text"}
      sx={span ? { gridColumn: `span ${span}` } : null}
      multiline={!!multiline}
      rows={rows ? rows : 1}
      error={!!errors[name]}
      helperText={errors[name] ? errors[name].message : ""}
    />
  );
}

CampoTexto.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.object,
  span: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

import { Autocomplete, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

export default function AutoCompletar({
  name,
  control,
  label,
  options,
  onChange,
  span,
  multiple,
}) {
  const { field, formState } = useController({ name, control });

  const { errors } = formState;

  return (
    <Autocomplete
      multiple={!!multiple}
      disablePortal
      options={options}
      value={field.value}
      defaultValue={field.value}
      onChange={onChange ? onChange : (_, value) => field.onChange(value)}
      getOptionLabel={(option) => option.nombre}
      isOptionEqualToValue={(option, value) =>
        value === undefined || value === "" || option.id === value.id
      }
      size="small"
      sx={span ? { gridColumn: `span ${span}` } : null}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          onBlur={field.onBlur}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name].message : ""}
        />
      )}
    />
  );
}

AutoCompletar.propTypes = {
  label: PropTypes.string,
  control: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  span: PropTypes.string,
  multiple: PropTypes.bool,
};

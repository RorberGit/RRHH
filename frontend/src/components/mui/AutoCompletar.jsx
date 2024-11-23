import { Autocomplete, Box, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

export default function AutoCompletar({
  control,
  name,
  label,
  options,
  span,
  onChange,
  multiple = false,
}) {
  console.log("control", control);
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Box sx={span ? { gridColumn: `span ${span}` } : null}>
      <Autocomplete
        multiple={multiple}
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
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            onBlur={field.onBlur}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
    </Box>
  );
}

AutoCompletar.propTypes = {
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  span: PropTypes.string,
  onChange: PropTypes.func,
  multiple: PropTypes.bool,
};

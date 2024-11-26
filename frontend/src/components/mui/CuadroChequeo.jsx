import { Box, Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

function CuadroChequeo({ name, control, label, span }) {
  const { field } = useController({ name, control });

  return (
    <Box sx={span ? { gridColumn: `span ${span}` } : null}>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        }
        label={label}
      />
    </Box>
  );
}

CuadroChequeo.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  span: PropTypes.string,
};

export default CuadroChequeo;

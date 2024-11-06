import { Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

function CuadroChequeo({ name, control, label, span }) {
  const { field } = useController({ name, control });

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            checked={field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        }
        label={label}
        sx={span ? { gridColumn: `span ${span}` } : null}
      />
    </>
  );
}

CuadroChequeo.propTypes = {
  name: PropTypes.string,  
  control: PropTypes.object,
  label: PropTypes.string,
  formState: PropTypes.object,
  span: PropTypes.string,
};

export default CuadroChequeo;

import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { esES } from "@mui/x-date-pickers/locales";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import "moment/locale/es";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

export default function Fecha({ name, control, label, span, views }) {
  const { field, formState } = useController({ name, control });

  const { errors } = formState;

  return (
    <Box sx={{ gridColumn: `span ${span}`, marginTop: "-8px" }}>
      {/*Campo Fecha*/}
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="es"
        localeText={
          esES.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <DatePicker
          {...field}
          label={label}
          value={field.value}
          views={views ? views : ["year", "month", "day"]}
          onChange={(e) => field.onChange(e)}
          slotProps={{
            textField: {
              size: "small",
              helperText: errors[name] ? errors[name].message : "",
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}

Fecha.propTypes = {
  name: PropTypes.string,
  control: PropTypes.object,
  label: PropTypes.string,
  views: PropTypes.array,
  field: PropTypes.string,
  errors: PropTypes.string,
  span: PropTypes.string,
};

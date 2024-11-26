import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { esES } from "@mui/x-date-pickers/locales";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es";
import "moment/locale/es";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

export default function Fecha({
  name,
  control,
  label,
  span,
  views = ["year", "month", "day"],
}) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <Box sx={{ gridColumn: `span ${span}` }}>
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
          views={views}
          onChange={(e) => field.onChange(e)}
          slotProps={{
            textField: {
              size: "small",
              helperText: error?.message,
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  );
}

Fecha.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  views: PropTypes.array,
  span: PropTypes.string,
};

import { TextField, Autocomplete } from "@mui/material";
import { ORGANITATION } from "../../../../constants";
import { useFetching } from "../../../../hooks/use-Fetching";

export function AutocompletarCargo() {
  const { data, loading } = useFetching(ORGANITATION.CARGO);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <Autocomplete
      disablePortal
      options={data}
      getOptionLabel={(option) => option.nombre}
      isOptionEqualToValue={(option, value) =>
        value === undefined || value === "" || option.id === value.id
      }
      getoptio
      renderInput={(params) => <TextField {...params} label="Cargo" />}
    />
  );
}

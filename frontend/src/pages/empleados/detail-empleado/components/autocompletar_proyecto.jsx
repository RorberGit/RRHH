import { TextField } from "@mui/material";
import AutoComplete from "@mui/material/AutoComplete";
import { ORGANITATION } from "../../../../constants";
import { useFetching } from "../../../../hooks/use-Fetching";
import { useGetUser } from "../../../../hooks/use-GetUser";

export function AutocompletarProyecto() {
  const { data, loading } = useFetching(ORGANITATION.PROYECTO);
  const { user } = useGetUser();

  console.log(user);

  if (loading) return <h3>Cargando...</h3>;

  return (
    <AutoComplete
      disablePortal
      disabled
      options={data}
      defaultValue={data.find((e) => e.nombre === user.proyecto)}
      getOptionLabel={(option) => option.nombre}
      isOptionEqualToValue={(option, value) =>
        value === undefined || value === "" || option.id === value.id
      }
      getoptio
      renderInput={(params) => <TextField {...params} label="Proyecto" />}
    />
  );
}

import AutoCompletar from "../AutoCompletar";
import CampoTexto from "../CampoTexto";
import Fecha from "../Fecha";

export const renderCampoTexto = (
  control,
  name,
  label,
  span,
  type,
  multiline,
  rows
) => (
  <CampoTexto
    control={control}
    name={name}
    label={label}
    span={span}
    type={type}
    multiline={multiline}
    rows={rows}
  />
);

export const renderACompletar = (
  control,
  name,
  options,
  label,
  span,
  onChange,
  multiple
) => (
  <AutoCompletar
    control={control}
    name={name}
    options={options}
    label={label}
    span={span}
    onChange={onChange}
    multiple={multiple}
  />
);

export const renderFecha = (control, name, label, span, views) => (
  <Fecha
    control={control}
    name={name}
    label={label}
    span={span}
    views={views}
  />
);

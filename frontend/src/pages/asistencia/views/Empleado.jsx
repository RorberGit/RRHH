import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import person from "../../../assets/person.jpg";
import PropTypes from "prop-types";

export default function Empleado({ employee }) {
  //! Retornar un Typography formateado  con los datos del empleado
  const renderTypography = (label, value) => (
    <Typography gutterBottom>
      <strong>{label}:</strong> <em>{value}</em>
    </Typography>
  );

  if (!employee) return <div>Sin resultados</div>;

  return (
    <Box sx={{ display: "flex" }}>
      <LazyLoadImage
        alt="empleado"
        width={250}
        height={300}
        placeholder={<img src={person} />}
        style={{ marginRight: 20 }}
        src={employee?.foto}
      ></LazyLoadImage>

      <Box>
        {renderTypography("NIP", employee?.nip)}
        {renderTypography("Número identidad", employee?.ci)}
        {renderTypography("Empleado", employee?.fullname)}
        {renderTypography("Área / Departamento", employee?.area)}
        {renderTypography("Cargo", employee?.cargo)}
        {renderTypography("Proyecto", employee?.proyecto)}
        {renderTypography("Jefe inmediato", employee?.jefe_inmediato)}
        {renderTypography("Estado", employee?.estado)}
      </Box>
    </Box>
  );
}

Empleado.propTypes = {
  employee: PropTypes.object,
};

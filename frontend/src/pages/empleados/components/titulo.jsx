import { Box, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Titulo({ title = "" }) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">{title}</Typography>
      <Divider></Divider>
    </Box>
  );
}

Titulo.propTypes = {
  title: PropTypes.string,
};

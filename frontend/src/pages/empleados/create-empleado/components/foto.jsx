import { Box, Button } from "@mui/material";
import person from "@assets/add_person.png";
import { useState } from "react";
import useEmpleadoContext from "@pages/empleados/create-empleado/context/use-EmpleadoContext";
import { Upload } from "@mui/icons-material";
import createBase64 from "@helpers/createBase64.js";

export default function Foto() {
  const { setValue } = useEmpleadoContext();

  const [selectedFile, setSelectedFile] = useState(null); //Estado para almacenar la imagen seleccionada

  const [isHovered, setIsHovered] = useState(false); // Estado para controlar la visibilidad del botón

  //! Función para cuando cambie el component file
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      createBase64(file).then((response) => {
        setSelectedFile(response);
        setValue("foto", response);
      });
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${selectedFile || person})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "275px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ display: "flex" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="upload-button-file"
        />
        {isHovered && (
          <label htmlFor="upload-button-file">
            <Button
              variant="text"
              color="error"
              component="span"
              sx={{ height: "400px", width: "275px" }}
            >
              Seleccionar Imagen
              <Upload />
            </Button>
          </label>
        )}
      </Box>
    </Box>
  );
}

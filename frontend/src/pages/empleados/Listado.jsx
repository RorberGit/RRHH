import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

import persona from "@assets/add_person.png";
import { Upload } from "@mui/icons-material";

export default function Listado() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const [isHovered, setIsHovered] = useState(false); // Estado para controlar la visibilidad del botón

  const handleFileChange = (event) => {
    //setSelectedFile(event.target.files[0]);

    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedFile(imageUrl); // Actualiza el estado con la URL de la imagen
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Por favor, selecciona un archivo antes de subirlo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setIsUploading(true);
    setUploadProgress(0); // Reiniciar el progreso

    try {
      await axios.post("https://api.example.com/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentage); // Actualiza el estado con el progreso
        },
      });
      alert("Archivo subido con éxito");
    } catch (error) {
      console.error("Error al subir el archivo", error);
      alert("Hubo un error al subir el archivo.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom>
            Subir Imagen
          </Typography>

          <div style={{ backgroundImage: persona }}>rorber</div>
          <Box
            sx={{
              backgroundImage: `url(${selectedFile || persona})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "300px",
              width: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
                  sx={{ height: "100%" }}
                >
                  Seleccionar Imagen
                  <Upload />
                </Button>
              </label>
            )}
          </Box>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleUpload}
            disabled={isUploading || !selectedFile}
            sx={{ marginTop: 2 }}
          >
            {isUploading ? "Subiendo..." : "Subir Imagen"}
          </Button>
          {isUploading && (
            <Box sx={{ marginTop: 2 }}>
              <LinearProgress variant="determinate" value={uploadProgress} />
              <Typography
                variant="body2"
                color="textSecondary"
              >{`${uploadProgress}%`}</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}

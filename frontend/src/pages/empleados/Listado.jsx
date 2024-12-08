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
import fetching from "@services/fetching";
import { useEffect } from "react";
import useSWR from "swr";

export default function Listado() {
  const { data, error } = useSWR("employee/getone/?ci=78080324904", fetching);

  useEffect(() => {
    console.log("Data swr => ", data);
    console.log("Error swr => ", error);
  }, [data, error]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="upload-button-file"
          />
          <label htmlFor="upload-button-file">
            <Button
              variant="outlined"
              color="primary"
              component="span"
              sx={{ marginTop: 2 }}
            >
              Seleccionar Imagen
            </Button>
          </label>
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

import { Avatar, Container, Paper, Box, Stack } from "@mui/material";
import { useBase64 } from "../../hooks/useBase64";
import { useState } from "react";
import { MuiFileInput } from "mui-file-input";

export default function Listado() {
  const [image, setImage] = useState();
  const getBase64 = useBase64();

  const [file, setFile] = useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  const handleFile = async (event) => {
    event.preventDefault();

    console.info(event.target.files);

    getBase64(event.target.files[0])
      .then((response) => {
        console.info(response);

        setImage(() => {
          return response;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ mt: 4, mb: 4 }}
      >
        <Stack
          spacing={2}
          direction="row"
        >
          <Paper sx={{ p: 2, maxWidth: 200 }}>
            <Stack spacing={2}>
              <Box
                component="img"
                src={image}
              ></Box>
              <input
                type="file"
                onChange={handleFile}
              />
            </Stack>
          </Paper>
          <Paper>444444444</Paper>
        </Stack>
        <Paper sx={{ p: 2, display: "block", flexDirection: "column" }}>
          <Avatar
            src={image}
            variant="square"
          />
          <MuiFileInput
            value={file}
            onChange={handleChange}
          />
        </Paper>
      </Container>
    </>
  );
}

import { Paper } from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";
import { AttachFile } from "@mui/icons-material";
import Px from "./pp";

export default function Formulario() {
  const [file, setFile] = useState(null);

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  return (
    <>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <h1>Form1</h1>

        <Px>
          <h1>Suerte</h1>
          <p>esto es de los hijos al padre</p>
        </Px>

        <MuiFileInput
          value={file}
          onChange={handleChange}
          size="medium"
          variant="outlined"
          InputProps={{
            inputProps: {
              accept: "image/*",
            },
            startAdornment: <AttachFile />,
          }}
        />
      </Paper>
    </>
  );
}

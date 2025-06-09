import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Toolbar,
  AppBar,
} from "@mui/material";
import FileUpload from "./FileUpload";
import Editor from "./Editor";
import { InlineMath } from "react-katex";

const Layout: React.FC = () => {
  const [htmlInput, setHtmlInput] = useState("");
  const [latexInput, setLatexInput] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">School Test Converter</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        <Box sx={{ mb: 4 }}></Box>
        <Stack spacing={2} sx={{ mb: 4 }}>
          <FileUpload
            multiple
            accept=".tex"
            label="Upload .tex file"
            value={files.find((f: File) => f.type === "text/plain")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFiles([
                ...Array.from(e.target.files || []).filter(
                  (f: File) => f.type === "text/plain"
                ),
              ])
            }
          />
          <FileUpload
            multiple
            accept=".png"
            label="Upload .png file"
            value={files.find((f: File) => f.type === "image/png")}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFiles([
                ...Array.from(e.target.files || []).filter(
                  (f: File) => f.type === "image/png"
                ),
              ])
            }
          />
        </Stack>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6">HTML output:</Typography>
          <Typography>
            Sporządź wykres funkcji
            {`<InlineMath>g(x) = f(x -2) + 3</InlineMath>`}
          </Typography>
          <Typography variant="h6">LaTeX output:</Typography>
          <Typography>
            Sporządź wykres funkcji
            <InlineMath>g(x) = f(x -2) + 3</InlineMath>
          </Typography>
        </Box>
        <Editor />
      </Box>
    </>
  );
};

export default Layout;

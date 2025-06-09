import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = ({
  multiple,
  accept,
  label,
  value,
  onChange,
}: {
  multiple?: any;
  accept?: any;
  label?: any;
  value?: any;
  onChange?: any;
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <VisuallyHiddenInput
        multiple={multiple}
        accept={accept}
        value={value}
        onChange={(e) => onChange(e.target.files)}
        sx={{ mt: 2 }}
      />
      <Box>
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          {label}{" "}
          <Button variant="contained" size="small" color="primary">
            Upload
          </Button>
        </label>
      </Box>
    </Box>
  );
};

export default FileUpload;

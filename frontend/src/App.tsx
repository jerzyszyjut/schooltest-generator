import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./Layout";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    },
    text: {
      primary: "#333",
    },
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}
export default App;

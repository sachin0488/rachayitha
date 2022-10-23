import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5122C0",
    },
    secondary: {
      main: "#5629C5",
    },
    headingColor: {
      main: "#2F2D5C",
    },
    subHeadingColor: {
      main: "#000000",
    },
    lightColor: {
      main: "white",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});

export default lightTheme;

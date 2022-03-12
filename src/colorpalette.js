import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#33383b",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      paper: "#111111",
      default: "#630E0D",
    },
  },
  typography: {
    h8: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "white",
    },
    h7: {
      fontFamily: ["Roboto Serif", "serif"].join(","),
      color: "white",
    },
    h6: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "white",
    },
    h5: {
      fontFamily: ["Henny Penny", "cursive"].join(","),
      color: "white",
    },
    h4: {
      fontFamily: ["Merriweather", "serif"].join(","),
      color: "white",
    },
    h3: {
      fontFamily: ["Henny Penny", "cursive"].join(","),
      color: "white",
    },
  },
});

export default theme;

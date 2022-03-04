import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#33383b",
    },
    secondary: {
      main: "#9d3132",
    },
    background: {
      paper: "#fff",
      default: "#1d2026",
    },
  },
  typography: {
    h5: {
      fontFamily: ["Henny Penny", "cursive"].join(","),
    },
    h3: {
      fontFamily: ["Henny Penny", "cursive"].join(","),
    },
    h8: {
      fontFamily: ["Merriweather", "serif"].join(","),
    },
    h7: {
      fontFamily: ["Roboto Serif", "serif"].join(","),
    },
  },
});

export default theme;

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
      paper: "#000000",
      default: "#630E0D",
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

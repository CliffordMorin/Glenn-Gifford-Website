import { makeStyles } from "@mui/styles";
import glenn1 from "../../images/glenn1.jpeg";

export default makeStyles((theme) => ({
  images: {
    width: "100%",
    height: "auto",
  },
  container: {
    backgroundImage: `url(${glenn1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      backgroundPosition: "-780px",
    },
  },
  textContainer: {
    paddingTop: "25%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "10%",
      width: "56%",
    },
  },
}));

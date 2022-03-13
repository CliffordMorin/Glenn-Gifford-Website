import React from "react";
import { Container, Grow, Paper, Box, Typography, Grid } from "@mui/material";
import glenn1 from "../../images/glenn1.jpeg";
import Roll from "react-reveal/Roll";
import makeStyles from "./styles";
import glenn2 from "../../images/glenn2.jpg";

const Home = () => {
  const classes = makeStyles();
  return (
    <div>
      <img className={classes.images} src={glenn1} alt="glenn home" />
    </div>
  );
};

export default Home;

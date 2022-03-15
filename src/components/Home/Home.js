import React from "react";
import { Container, Grow, Paper, Box, Typography, Grid } from "@mui/material";
import glenn1 from "../../images/glenn1.jpeg";
import Roll from "react-reveal/Roll";
import makeStyles from "./styles";
import glenn2 from "../../images/glenn2.jpg";

const Home = () => {
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Container className={classes.textContainer}>
        <Typography variant="h3">
          <Roll left cascade>
            GLENNDON
          </Roll>
        </Typography>
        <Typography variant="h3" sx={{ marginBottom: "20px" }}>
          <Roll delay={500} left cascade>
            GIFFORD
          </Roll>
        </Typography>
        <Typography variant="h5">
          <Roll delay={1000} left cascade>
            Trumpeter, Teacher,
          </Roll>
        </Typography>
        <Typography variant="h5">
          <Roll delay={1500} left cascade>
            Vocalist and Arranger
          </Roll>
        </Typography>
      </Container>
    </div>
  );
};

export default Home;

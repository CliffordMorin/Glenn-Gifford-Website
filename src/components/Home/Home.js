import React from "react";
import { Container, Typography } from "@mui/material";

import Rollin from "../Animations/Rollin";
import makeStyles from "./styles";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const classes = makeStyles();
  return (
    <div className={classes.container}>
      <Helmet>
        <title>Glenndon Gifford | Home</title>
        <meta name="description" content="Glenndon Gifford's Home Page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Container className={classes.textContainer}>
        <Typography variant="h1">
          <Rollin text="GLENNDON" delay={0} />
        </Typography>
        <Typography variant="h1" sx={{ marginBottom: "20px" }}>
          <Rollin text="GIFFORD" delay={500} />
        </Typography>
        <Typography variant="h3">
          <Rollin text="Trumpeter, Teacher," delay={1000} />
        </Typography>
        <Typography variant="h3">
          <Rollin text="Vocalist and Arranger" delay={1500} />
        </Typography>
      </Container>
    </div>
  );
};

export default Home;

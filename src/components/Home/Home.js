import React from "react";
import { Container, Grow } from "@mui/material";
import glenn1 from "../../images/glenn1.jpeg";
import makeStyles from "./styles";

const Home = () => {
  const classes = makeStyles();
  return (
    <div>
      <Container fixed>
        <Grow in>
          <img className={classes.images} src={glenn1} alt="glenn home" />
        </Grow>
      </Container>
    </div>
  );
};

export default Home;

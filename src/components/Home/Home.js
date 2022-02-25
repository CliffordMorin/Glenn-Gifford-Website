import React from "react";
import { Container, Grow } from "@mui/material";
import glenn1 from "../../images/glenn1.jpeg";

const Home = () => {
  return (
    <div>
      <Container>
        <Grow in>
          <img src={glenn1} alt="glenn home" />
        </Grow>
      </Container>
    </div>
  );
};

export default Home;

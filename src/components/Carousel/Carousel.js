import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Container } from "@mui/material";
import glenn1 from "../../images/glenn1.jpeg";
import glenn2 from "../../images/glenn2.jpg";
import glenn3 from "../../images/glenn3.jpg";

function Example(props) {
  var items = [
    {
      img: glenn1,
    },
    {
      img: glenn2,
    },
    {
      img: glenn3,
    },
  ];

  return (
    <Container>
      <Carousel
        sx={{ height: "700px" }}
        animation="slide"
        duration="800"
        navButtonsAlwaysVisible
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}

function Item(props) {
  return (
    <Paper>
      <img src={props.item.img} alt="glenn" />
    </Paper>
  );
}

export default Example;

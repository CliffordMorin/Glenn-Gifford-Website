import React from "react";
import ImageGallery from "react-image-gallery";
import glenn1 from "../../images/glenn1.jpeg";
import glenn2 from "../../images/glenn2.jpg";
import glenn3 from "../../images/glenn3.jpg";
import makeStyles from "./styles";
import { Container } from "@mui/material";
import "./Media.css";

const images = [
  {
    original: glenn1,
    thumbnail: glenn1,
  },
  {
    original: glenn2,
    thumbnail: glenn2,
  },
  {
    original: glenn3,
    thumbnail: glenn3,
  },
];

const Media = () => {
  return (
    <Container>
      <ImageGallery items={images} />;
    </Container>
  );
};

export default Media;

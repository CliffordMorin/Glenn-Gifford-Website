import React from "react";
import ImageGallery from "react-image-gallery";
import glenn1 from "../../images/glenn1.jpeg";
import glenn2 from "../../images/glenn2.jpg";
import glenn3 from "../../images/glenn3.jpg";
import glennTMA from "../../images/glennTMA.jpg";
import group from "../../images/group.jpg";
import head from "../../images/head.jpg";
import head2 from "../../images/head2.jpg";
import head3 from "../../images/head3.jpg";
import head4 from "../../images/head4.jpg";
import makeStyles from "./styles";
import { Container } from "@mui/material";
import "./Media.css";

const images = [
  {
    original: glennTMA,
    thumbnail: glennTMA,
  },
  {
    original: group,
    thumbnail: group,
  },
  {
    original: head,
    thumbnail: head,
  },
  {
    original: head2,
    thumbnail: head2,
  },
  {
    original: head3,
    thumbnail: head3,
  },
  {
    original: head4,
    thumbnail: head4,
  },
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

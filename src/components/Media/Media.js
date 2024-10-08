import React from "react";
import ImageGallery from "react-image-gallery";
import glenn1 from "../../images/glenn1.jpeg";
import glenn2 from "../../images/glenn2.jpg";
import glenn3 from "../../images/glenn3.jpg";
import glenn4 from "../../images/glenn4.jpg";
import glenn5 from "../../images/glenn5.jpg";
import glenn6 from "../../images/glenn6.jpg";
import glenn7 from "../../images/glenn7.jpg";
import glennTMA from "../../images/glennTMA.jpg";
import group from "../../images/group.jpg";
import head from "../../images/head.jpg";
import head2 from "../../images/head2.jpg";
import head3 from "../../images/head3.jpg";
import head4 from "../../images/head4.jpg";
import makeStyles from "./styles";
import { Container, Typography, Divider } from "@mui/material";
import Rollin from "../Animations/Rollin";
import { Helmet } from "react-helmet-async";
import "./Media.css";

const images = [
  {
    original: glenn4,
    thumbnail: glenn4,
  },
  {
    original: glenn5,
    thumbnail: glenn5,
  },
  {
    original: glenn6,
    thumbnail: glenn6,
  },
  {
    original: glenn7,
    thumbnail: glenn7,
  },
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
  const classes = makeStyles();
  return (
    <div>
      <Helmet>
        <title>Media | Glenndon Gifford</title>
        <meta
          name="description"
          content="Glenndon Gifford's Media Page with pictures, videos and recordings of glenndon performing."
        />
        <link rel="canonical" href="/media" />
      </Helmet>
      <Typography align="center" variant="h2" sx={{ my: 5 }}>
        <Rollin text="Media" />
      </Typography>
      <Divider
        sx={{
          zIndex: "100",
          backgroundColor: "text.primary",
          height: "2px",
          width: "200px",
          margin: "auto",
          my: 4,
        }}
      />
      <Container sx={{ mt: 5 }}>
        <ImageGallery items={images} />
        <Container sx={{ mt: 5, mb: 5 }}>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            title="Glenndon Gifford"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1214053780&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: "100",
            }}
          >
            <a
              href="https://soundcloud.com/glenndon-gifford"
              title="Glenndon Gifford"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Glenndon Gifford
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/glenndon-gifford/come-out-and-play"
              title="come out and play"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              come out and play
            </a>
          </div>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/Pjy1g85W4ms?si=zIHGwjtfd4wKnJhH"
            title="Neil Forever"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/OqDYcuCTq4M?si=Dc74X522qm7jmck9"
            title="TMA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/HyCLW1rUROk"
            title="Look for the silver lining"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
        <Container align="center" className={classes.video}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/AWLtrXLRwRw"
            title="TMA Band"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Container>
      </Container>
    </div>
  );
};

export default Media;

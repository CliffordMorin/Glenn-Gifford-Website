import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { Instagram, YouTube, Facebook, Favorite } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import makeStyles from "./styles";
import "./style.css";

const Footer = () => {
  const classes = makeStyles();
  let date = new Date();
  return (
    <footer>
      <Box>
        <Container
          align="center"
          sx={{
            backgroundColor: "secondary.main",
            height: "100px",
            mt: 5,
          }}
          maxWidth
        >
          <Box>
            {/* <Instagram htmlColor="" fontSize="large" /> */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-2x insta"
              style={{ margin: "10px 10px 15px 10px" }}
            />

            <YouTube
              htmlColor="#FF0000"
              fontSize="large"
              style={{ margin: "10px" }}
            />

            <Facebook
              htmlColor="#4267B2"
              fontSize="large"
              style={{ margin: "10px" }}
            />

            <FontAwesomeIcon
              icon={faSoundcloud}
              className="fa-2x"
              style={{ color: "#FF7700", margin: "10px" }}
            />
          </Box>
          <Box>
            <Typography variant="h9">
              Made with <Favorite fontSize="small" color="error" /> by{" "}
              <a
                href="https://www.cliffordmorinmusic.com/"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Clifford Morin
              </a>
              {` ${date.getFullYear()}`}
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;

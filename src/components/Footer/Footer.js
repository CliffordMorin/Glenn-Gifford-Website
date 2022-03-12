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
          sx={{ backgroundColor: "primary.main", height: "100px" }}
          maxWidth
        >
          <Box>
            <Grid container columnSpacing={5}>
              <Grid item>
                {/* <Instagram htmlColor="" fontSize="large" /> */}
                <FontAwesomeIcon icon={faInstagram} className="fa-2x insta" />
              </Grid>
              <Grid item>
                <YouTube htmlColor="#FF0000" fontSize="large" />
              </Grid>
              <Grid item>
                <Facebook htmlColor="#4267B2" fontSize="large" />
              </Grid>
              <Grid item>
                <FontAwesomeIcon
                  icon={faSoundcloud}
                  className="fa-2x"
                  style={{ color: "#FF7700" }}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography variant="h8">
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

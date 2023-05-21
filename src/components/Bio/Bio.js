import React from "react";
import {
  Container,
  Grow,
  Paper,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

import Rollin from "../Animations/Rollin";
import makeStyles from "./styles";
import glenn4Short from "../../images/glenn4Short.jpg";
import { Helmet } from "react-helmet-async";

const Bio = () => {
  const classes = makeStyles();
  return (
    <div>
      <Helmet>
        <title>Biography | Glenndon Gifford</title>
        <meta
          name="description"
          content=" Glenndon Gifford is a musician, composer, producer, and
                  educator from Long Island, New York."
        />
        <link rel="canonical" href="/bio" />
      </Helmet>
      <Grow in>
        <Container sx={{ my: 5 }}>
          <Paper elevation={16} sx={{ py: 5 }}>
            <Typography
              variant="h2"
              align="center"
              className={classes.text}
              gutterBottom
            >
              <Rollin text="Biography" />
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
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid item xs={12} md={6}>
                <img className={classes.images} src={glenn4Short} alt="glenn" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  Glenndon Gifford is a musician, composer, producer, and
                  educator from Long Island, New York. He performs in various
                  styles of music across the Northeast, from Salsa and event
                  bands to brass quartets and Jazz trios. Though his primary
                  instrument is trumpet, he also performs on piano and vocals. 
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  Glenndon holds a Bachelors of Music in Jazz Studies from
                  Temple University's Boyer College of Music and Dance. He has
                  been fortunate enough to have been mentored by some of the
                  great trumpet players and musicians of our time, including
                  Terell Stafford, John Swana, Rodney Marsalis, Nick Marchione,
                  Tanya Darby, Mike Natale, and Leon Petruzzi. 
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  He currently performs regularly with The Morning After (event
                  band based in South NJ), The Latin Express (salsa band based
                  in Philadelphia), and his solo project under his own name. 
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grow>
    </div>
  );
};

export default Bio;

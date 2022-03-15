import React from "react";
import { Container, Grow, Paper, Typography, Grid } from "@mui/material";

import Roll from "react-reveal/Roll";
import makeStyles from "./styles";
import glenn2 from "../../images/glenn2.jpg";

const Bio = () => {
  const classes = makeStyles();
  return (
    <div>
      <Grow in>
        <Container sx={{ mt: 5 }}>
          <Paper elevation={16} sx={{ pb: 5 }}>
            <Typography
              variant="h2"
              align="center"
              className={classes.text}
              py={4}
              pt={5}
              gutterBottom
            >
              <Roll left cascade>
                Biography
              </Roll>
            </Typography>
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid item xs={12} md={6}>
                <img className={classes.images} src={glenn2} alt="glenn" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.text}
                  p={2}
                >
                  {" "}
                  Veniam ad velit qui reprehenderit elit. Officia dolor dolor
                  velit nostrud proident esse ex sit eu mollit dolore id. In
                  velit aliquip esse eiusmod. Aliquip amet nostrud quis dolore
                  ex sit ea ut. Exercitation ex incididunt anim exercitation
                  dolor nulla laboris aliquip ullamco. Ad ullamco aute ex aliqua
                  consectetur veniam non magna. Non magna deserunt exercitation
                  labore sunt mollit exercitation ut fugiat laboris quis mollit.
                  Id officia ullamco elit aliquip aliquip magna veniam
                  consectetur cupidatat reprehenderit sunt adipisicing. Amet
                  consectetur incididunt aliquip ut non est cupidatat culpa duis
                  pariatur duis. Reprehenderit ipsum esse ipsum dolor laboris
                  magna tempor adipisicing. In nostrud deserunt ut duis. Duis
                  labore magna ea aliquip aute reprehenderit culpa. Dolor
                  consequat velit pariatur aliqua quis tempor do labore
                  reprehenderit eiusmod duis pariatur exercitation pariatur.
                  Duis laborum sint laborum est pariatur duis ad labore
                  incididunt irure. Eiusmod sint esse consequat consectetur
                  reprehenderit commodo velit mollit eu ad. Reprehenderit sint
                  eu magna exercitation nulla culpa incididunt. Sit sint velit
                  non nulla nulla. Eiusmod do consequat ut velit cupidatat.
                  Officia nostrud ut dolor cupidatat amet fugiat consectetur
                  labore esse incididunt amet non velit. In ex sint ad id.
                  Fugiat officia laborum labore nulla ipsum deserunt ullamco
                  esse pariatur sit nostrud. Nisi ad minim cupidatat adipisicing
                  anim labore. Deserunt ipsum aliquip laborum elit culpa esse
                  ipsum tempor mollit mollit ut dolore amet nulla. Esse labore
                  aliqua minim cillum in commodo ullamco pariatur cupidatat ea
                  quis ullamco.
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

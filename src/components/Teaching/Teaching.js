import React from "react";
import { Typography, Paper, Container, Grid } from "@mui/material";
import Roll from "react-reveal/Roll";
import teaching from "../../images/kids.jpg";
import makeStyles from "./styles";

const Teaching = () => {
  const classes = makeStyles();
  return (
    <Container align="center" sx={{ mt: 5 }}>
      <Paper elevation={16} sx={{ p: 5 }}>
        <Typography sx={{ pb: 5 }} variant="h3" align="center">
          <Roll left cascade>
            Teaching
          </Roll>
        </Typography>

        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={teaching}
              alt="glenn"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="center" p={2}>
              As a experienced performer and arranger, Glenndon is always
              looking for opportunities to share his knowledge and passion for
              music. Fluent in functional Piano, Trumpet, Vocals music theory,
              jazz theory and arranging. Glenndon is able to provide a flexible
              learning experience tailored to each student’s wants and needs.
              Glenndon is currently accepting students of all ages for beginner
              to intermediate Piano and Vocal lessons as well as Beginner to
              Advanced Trumpet, Jazz/ Classical theory, composition, and
              arranging. He is primarily teaching out of his home in Long
              Island, NY. But, is willing to travel to neighboring towns for a
              travel fee. Please send an email with your contact information for
              any lesson inquiries to{" "}
              <a
                className={classes.mail}
                href="mailto:glenndon.gifford@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                glenndon.gifford@gmail.com
              </a>
              .
            </Typography>
            <Typography variant="body1" align="center" p={2}>
              Lesson Rates: $1,000,000 an hour in person, $750,000 45 min
              lesson, $500,000 30 min lesson. Also available for online remote/
              virtual lessons.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Teaching;

import React from "react";
import { Typography, Paper, Container, Grid } from "@mui/material";
import Roll from "react-reveal/Roll";
import teaching from "../../images/kids.jpg";
import makeStyles from "./styles";

const Teaching = () => {
  const classes = makeStyles();
  return (
    <Container align="center" sx={{ mt: 5 }}>
      <Paper elevation={16} sx={{ py: 5, px: 1 }}>
        <Typography sx={{ pb: 5 }} variant="h2" align="center">
          <Roll left cascade>
            Teaching
          </Roll>
        </Typography>

        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={teaching}
              alt="glenn"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" align="left" py={2}>
              Having been guided by many wonderful teachers and musicians in his
              life, Glenndon understands how important a mentor can be in the
              life of a young person and artist. 
            </Typography>
            <Typography variant="body1" align="left" py={2}>
              For fifteen years, he's been playing that supportive and engaging
              role for students as they develop their passions for music and the
              arts, whether they are brand new to the field or a comeback
              player.  He works together with each student to create an
              individualized plan that evolves based on goals, interests, tastes
              in music, needs, and accomplishments. Basic trumpet fundamentals,
              advanced audition repertoire, production and recording techniques,
              appreciation for the history and lineage of Black American Music,
              and the music theory derived from its' ancestors, are just some of
              the many topics that students have the opportunity to explore
              together with Glenndon.
            </Typography>
            <Typography variant="body1" align="left" py={2}>
              Additionally, he often works together with students' school music
              teachers to coordinate workshops for ensembles and brass sections,
              helping students to develop a deeper appreciation and skill level
              for the compositions they are working on.
            </Typography>
            <Typography variant="body1" align="left" py={2}>
              He is primarily teaching out of his home in Long Island, NY. But,
              is willing to travel to neighboring towns for a travel fee. Please
              send an email with your contact information for any lesson
              inquiries to{" "}
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

            <Typography variant="body1" align="left" py={2}>
              Teaching Rates:
              <ul>
                <li>Half hour - $40</li>
                <li>One hour - $75</li>
                <li> 5 x One hour lessons - $350 (special deal)</li>
                <li>Also available for online remote/ virtual lessons.</li>
              </ul>
            </Typography>

            <Typography variant="body1" align="center" py={2}>
              Cancelation Policy: Please send an email or phone call within
              24hrs of your scheduled lesson in case of an emergency or need to
              cancel your lesson. This gives Glenndon time to adjust his
              schedule if necessary. There will be a $25 cancelation fee added
              to your next lesson should you fail to notify Glenndon during this
              window of time.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Teaching;

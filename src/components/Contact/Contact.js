import React from "react";
import {
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import head from "../../images/head.jpg";
import makeStyles from "./styles";

const Contact = () => {
  const classes = makeStyles();
  return (
    <div>
      <Typography sx={{ mt: 5 }} variant="h3" align="center">
        Contact
      </Typography>
      <Container sx={{ mt: 5 }}>
        <Paper elevation={16} sx={{ pt: 5, pl: 5, pb: 10 }}>
          <Typography variant="body1">
            Glenndon Gifford is available as a lead trumpet player, soloist,
            sideman, and trumpet player of The Morning After Band, Available for
            both public and private engagements. Commercial and church music. He
            is also available as a clinician, educator, and guest lecturer.
            Virtual lessons and in person lessons now available! Customizable
            learning topics. Personalized experience. Flexible scheduling.
          </Typography>
          <Typography variant="body1" sx={{ pt: 5 }}>
            For all inquiries contact Glenndon at{" "}
            <a
              className={classes.mail}
              href="mailto:glenndon.gifford@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              glenndon.gifford@gmail.com
            </a>
          </Typography>
          <Container align="center" sx={{ mt: 7 }}>
            <img className={classes.image} src={head} alt="glenn" />
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Contact;

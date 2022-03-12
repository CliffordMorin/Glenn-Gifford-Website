import { React, useEffect } from "react";
import {
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
} from "@mui/material";

let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let band = [
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
  "The Morning After Band",
];
let date = [
  "Friday, September 16 @ 9:00PM",
  "Saturday, September 3 @ 9:00PM",
  "Thursday, August 4 @ 9:00PM",
  "Saturday, July 16 @ 9:00PM",
  "Friday, July 8 @ 9:00PM",
  "Thursday, June 16 @ 9:00PM",
  "Friday, June 3 @ 9:00PM",
  "Sunday, May 29 @ 9:00PM",
  "Friday, April 8 @ 9:00PM",
  "Saturday, March 26 @ 9:00PM",
  "Friday, March 25 @ 9:00PM",
  "Saturday, March 19 @ 9:00PM",
];
let location = [
  "Hard Rock Cafe, Atlantic City, NJ",
  "Windrift Hotel Resort, Avalon, NJ",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Windrift Hotel Resort, Avalon, NJ",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Live! Casino, Philadelphia, PA",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Windrift Hotel Resort, Avalon, NJ",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Rivers Casino, Philadelphia, PA",
  "Hard Rock Cafe, Atlantic City, NJ",
  "Live! Casino, Philadelphia, PA",
];

const Calender = () => {
  let events = ids.map((id, i) => {
    return {
      id: id,
      band: band[i],
      date: date[i],
      location: location[i],
    };
  });

  return (
    <Container sx={{ mt: 7 }}>
      <Typography variant="h4" align="center" sx={{ pb: 6 }}>
        Upcoming Shows
      </Typography>
      <Paper elevation={16}>
        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ pb: 2, pl: 7 }}>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="h6"> Event </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography variant="h6"> Date </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              {" "}
              Location{" "}
            </Typography>
          </Grid>
        </Grid>
        <Divider style={{ backgroundColor: "white" }} />

        {events.map((i) => {
          return (
            <>
              <Grid container spacing={{ xs: 2, md: 3 }} sx={{ py: 3, pl: 7 }}>
                <Grid item xs={6} sm={6} md={4}>
                  <Typography variant="h8">{i.band}</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Typography variant="h8">{i.date}</Typography>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <Typography variant="h8">{i.location}</Typography>
                </Grid>
              </Grid>
              <Divider variant="middle" style={{ backgroundColor: "white" }} />
            </>
          );
        })}

        <Divider />
      </Paper>
    </Container>
  );
};

export default Calender;

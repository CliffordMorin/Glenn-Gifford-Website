import { React, useEffect } from "react";
import { Button, Typography } from "@mui/material";

const Calender = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <iframe
        title="calender"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&mode=WEEK&showTabs=1&showPrint=0&showTitle=0&showCalendars=1&showTz=1&showDate=1&showNav=1&src=Y2xpZmZvcmRtb3Jpbm11c2ljQGdtYWlsLmNvbQ&color=%23039BE5"
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Calender;

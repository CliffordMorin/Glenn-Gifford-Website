import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Bio from "./components/Bio/Bio";
import Teaching from "./components/Teaching/Teaching";
import Contact from "./components/Contact/Contact";
import Media from "./components/Media/Media";
import Calender from "./components/Calender/Calender";
import Nav from "./components/Nav/Nav";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./colorpalette";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

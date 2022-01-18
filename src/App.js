import React from "react";
import { BikeKit, HeroSection, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <BikeKit />
    </BrowserRouter>
  );
}

export default App;

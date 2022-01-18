import React from "react";
import { BikeKit, Footer, HeroSection, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import Hybrid from "./components/Bikes/Hybrid";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <BikeKit />
      <Hybrid />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

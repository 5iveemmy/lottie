import React from "react";
import { HeroSection, Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
    </BrowserRouter>
  );
}

export default App;

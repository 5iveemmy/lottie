import React from "react";
import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;

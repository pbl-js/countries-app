import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainRouter from "router/MainRouter";
import Navigation from "components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;

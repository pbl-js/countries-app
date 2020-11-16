import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";

import MainRouter from "router/MainRouter";
import Navigation from "components/Navigation/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

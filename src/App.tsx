import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "theme/theme";

import { ApolloProvider } from "@apollo/client";
import client from "apollo/client";

import MainRouter from "router/MainRouter";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
